import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Rx";

import { ResultItem } from "./result-item/result-item";
import { ConsultaApiService } from "./consulta-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  //Variables for the autocomplete
  myControl: FormControl = new FormControl();
  movies_Auto: string[]; //Here are stored the name of all the movies found in the results, this is what the autocomplete sees
  people_Auto: string[]; //Here are stored the name of all the people found in the results, this is what the autocomplete sees

  resultads: number[] = [1, 2, 3, 4]; //DEBUG ONLY

  //Other Variables
  private response: any; //Here will be stored the answer of the API rest in JSON
  private results: ResultItem[];//Here will be stored the answer of the API in the type ResultItem
  private movies: ResultItem[];
  private people: ResultItem[];

  constructor(private consultaApiService: ConsultaApiService) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    let searchField = document.querySelector("input");

    Observable.fromEvent(searchField, "input")
      .pluck("target", "value")
      .filter((searchText: string) => {
        return searchText.length > 2;
      })
      .debounceTime(250)
      .distinctUntilChanged()
      .switchMap( (searchText: string) => {
         return this.consultaApiService.fullSearch(searchText)
      })
      .subscribe({
        next: (response: Object) => {
          this.response = response;
          this.jsonToResultItem_FullSearch();
          console.log(this.movies_Auto);
        },
        error: err => (this.results = []),
        complete: () => {}
      });
  }

  /*
  This method translates the JSON response from the Rest API to ResultItem, so that the App can understand what the API sent.
  Note that when this method is invoked, it's assumed that the information is already in the 'response' variable, and then it
  writes/overwrites in results
  **/
  jsonToMovies() {
    let moviesFound:any[] = this.response.results;

    this.movies = [];

    moviesFound.forEach(movie => {
      let resultItem = new ResultItem();
      resultItem.setName(movie.title);
      resultItem.setType("Movie");
      this.movies.push(resultItem);
    });
  }

  jsonToResultItem_FullSearch() {
    let resutlsFound:any[] = this.response.results;

    this.movies = [];
    this.movies_Auto = [];
    this.people = [];
    this.people_Auto = [];

    resutlsFound.forEach(resultItemAPI => {

      let resultItem = new ResultItem();
      if(resultItemAPI.media_type == "movie"){
        resultItem.setName(resultItemAPI.title);
        resultItem.setType("Movie");
        this.movies.push(resultItem);
        this.movies_Auto.push(resultItemAPI.title);
      }else
      if(resultItemAPI.media_type == "person"){
        resultItem.setName(resultItemAPI.name);
        resultItem.setType("Person");
        this.people.push(resultItem);
        this.people_Auto.push(resultItemAPI.name);
      }

    });
  }

  extractMoviesFromResult(){
    this.movies = [];

    this.results.forEach(itemResult => {
      if(itemResult.getType() == "Movie"){
        this.movies_Auto.push(itemResult.getName());
      }
    });
  }
}
