import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-h1",
  templateUrl: "components/h1/h1.component.html",
  styleUrls: ["components/h1/h1.component.css"]
})
export class H1Component implements OnInit {
  public args: any = {type: "h1", text: "Test"}

  ngOnInit() {

  }
}
