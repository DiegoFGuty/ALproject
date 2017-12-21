import { Injectable } from "@angular/core";
import { Http, URLSearchParams, Response } from "@angular/http";
import { ResultItem } from "./result-item/result-item";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ConsultaApiService {
  private theMovieDbUrl = "http://api.themoviedb.org/3";
  private apiKey = "da08c5cc8d0c461e45f3cf670805afbd";

  constructor(private http: Http) {
  }

  /*
  This method retrieves only Movies querying by its argument (the name of the movie you're looking for).
  Note that the result can have more than one answer.
  **/
  searchMovies(movieToSearch: string) {
    let finalUrl:string = this.theMovieDbUrl + "/search/movie";

    let myParams = new URLSearchParams();
    myParams.set('include_adult', 'false');
    myParams.set('page', '1');
    myParams.set('language', 'en-US');
    myParams.set('api_key', this.apiKey);
    myParams.set('query', movieToSearch);

    // Send a request and process the response
    return this.http
      .get(finalUrl, {search: myParams})
      .map((res: Response) => res.json());
  }

  /*
  This method retrieves only People querying by its argument (the name of the person you're looking for).
  Note that the result can have more than one answer.
  **/
  searchPeople(personToSearch: string) {
    let finalUrl:string = this.theMovieDbUrl + "/search/person";

    let myParams = new URLSearchParams();
    myParams.set('include_adult', 'false');
    myParams.set('page', '1');
    myParams.set('language', 'en-US');
    myParams.set('api_key', this.apiKey);
    myParams.set('query', personToSearch);

    // Send a request and process the response
    return this.http
      .get(finalUrl, {search: myParams})
      .map((res: Response) => res.json());
  }

  /*
  This method should be called for a full search, this retrieves all the first page of the query
  Note that this search, recieves both People and Movies(and TV shows), it's up to you to split the results into Movies and People

  **/
  fullSearch(query: string) {
    let finalUrl:string = this.theMovieDbUrl + "/search/multi";

    let myParams = new URLSearchParams();
    myParams.set('include_adult', 'false');
    myParams.set('page', '1');
    myParams.set('language', 'en-US');
    myParams.set('api_key', this.apiKey);
    myParams.set('query', query);

    // Send a request and process the response
    return this.http
      .get(finalUrl, {search: myParams})
      .map((res: Response) => res.json());

  }

}
