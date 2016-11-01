import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { pageRouting } from "./page.routing";
import { PageComponent } from "./page.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    pageRouting
  ],
  declarations: [
    PageComponent,
  ]
})
export class PageModule {}
