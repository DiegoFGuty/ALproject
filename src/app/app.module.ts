
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Imports for using Material Design
import {
  MatAutocompleteModule,
} from '@angular/material';

//import {MatIconModule} from '@angular/material/icon';

//Imports for the application
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { AutocompleteSimpleExample } from './app/autocomplete-simple-example';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
  ],
  exports: [
//    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
