import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  results: number[];

  constructor() {
    this.results = [1,2,3,4];
   }

  ngOnInit() {
  }

}
