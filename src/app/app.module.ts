
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

//Imports for using Material Design
import { MatAutocompleteModule,
   MatIconModule,
   MatGridListModule
   } from "@angular/material";

//Imports for the application
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { SearchPageComponent } from './search-page/search-page.component';
import { ResultItemComponent } from './result-item/result-item.component';
import { ConsultaApiService } from './consulta-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ResultItemComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    MatAutocompleteModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [ConsultaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
