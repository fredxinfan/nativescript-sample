import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

// Modules
import { PageModule } from "./components/page/page.module";
import { H1Module } from "./components/h1/h1.module";

// Services
import { AuthGuard } from "./services/auth-guard/auth-guard.service";
import { PageDataService } from "./services/page-data/page-data.service";

@NgModule({
  providers: [
    AuthGuard,
    PageDataService
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
    PageModule,
    H1Module
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
