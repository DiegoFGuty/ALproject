//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from "@angular/platform-browser";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

//Imports for using Material Design
import { MatAutocompleteModule,
   MatIconModule,
   MatGridListModule
   } from "@angular/material";

//import {MatIconModule} from '@angular/material/icon';

//Imports for the application
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatGridListModule
    // FormsModule,
    // HttpModule,
  ],
  exports: [
//    MatAutocompleteModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
