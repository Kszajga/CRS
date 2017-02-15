import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
//import { PageNotFound } from "./pageNotFound";
//import { DynamicPage } from "./dynamicPage";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "", component: HomeComponent },    
];


export const AppModuleRoutes: ModuleWithProviders = RouterModule.forRoot(routes);