import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { CarListComponent } from "./carList.component";
//import { ContactActivator } from "./contactActivator";
import { CarListItemComponent } from "./carListItem.component";
//import { ContactEdit } from "./contactEdit";
import { CarService } from "./car.service";
import { CarRouting } from "./carRoutes";
import { Car } from "./cars";
import { Configuration } from "../../configuration";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ToasterModule } from 'angular2-toaster/angular2-toaster';
//import { Shorten } from "../commonPipes/shorten";
//import { MakeLarge } from "../commonDirectives/makeLarge";

@NgModule({
    imports: [BrowserModule, HttpModule, CarRouting, FormsModule, ReactiveFormsModule], //ToasterModule
    declarations: [CarListItemComponent, Car], //, ContactEdit, Shorten, MakeLarge
    providers: [Configuration, HttpModule, CarService], //, ContactActivator
    exports: []
})
export class CarModule { }