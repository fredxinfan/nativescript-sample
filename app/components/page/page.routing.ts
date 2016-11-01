import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageComponent } from "./page.component";
import { AuthGuard } from "../../services/auth-guard/auth-guard.service";

const pageRoutes: Routes = [
  { path: "page", component: PageComponent, canActivate: [AuthGuard] },
];
export const pageRouting: ModuleWithProviders = RouterModule.forChild(pageRoutes);
