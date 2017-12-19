import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.scss"
  ]
})
export class AppComponent {
  myControl: FormControl = new FormControl();

  options = ["One", "Two", "Three","El mio :3"];
}
