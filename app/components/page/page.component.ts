import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import { View } from "ui/core/view";
import {PageDataService} from "../../services/page-data/page-data.service";
import * as uiBuilder from "ui/builder";
import {H1Component} from "../h1/h1.component";

@Component({
    selector: "app-page",
    templateUrl: "components/page/page.component.html",
    styleUrls: ["components/page/page.component.css"]
})
export class PageComponent implements OnInit {
  public args: any

  private componentMap = {
    "h1": H1Component,
  }

  @ViewChild("mainContainer") mainContainer: ElementRef;

  constructor(
    private pageData: PageDataService,
  ) {
    this.args = this.pageData.data;
  }

  ngOnInit() {
    for(var componentArgs of this.args.components) {
      var component = this.componentMap[componentArgs.type];
      if (component) {
        let mainContainer = this.mainContainer.nativeElement;
        let h1 = uiBuilder.load({
            path: 'components/h1/h1.component',
            name: 'H1Component'
        });
        mainContainer.addChild(h1);
      }
    }
  }
}
