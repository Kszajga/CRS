import { Component, OnInit} from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//import { Subscription } from "rxjs/Subscription";
//import { CarService } from "../car/carService";

//import ICarMake = App.Models.ICarMake;
//import ICarModel = App.Models.ICarModel;

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    //private searchForm: FormGroup;
    //carMakes: ICarMake[];
    //carModels: ICarModel[];

    //private carModelsSubs: Subscription;
    //private carMakesSubs: Subscription;
    
    constructor(
        //private carService: CarService,
        //private formBuilder: FormBuilder
    ){}

    //private carmakeData = (data: ICarMake[]) => {
    //    this.carMakes = data;
    //    console.log("carMakes carmakeData loaded" + this.carMakes);
    //}
    //private carmodelData = (data: ICarModel[]) => {
    //    this.carModels = data;
    //    console.log("carModels carmodelData loaded");
    //}

    //SelectedCarMake(carmakeid: number) {
    //    //this.carModels = null;
    //    console.log(carmakeid);
    //    this.carService.getCarModelByCarMakeID(carmakeid);
    //    this.carModelsSubs = this.carService.carModels.subscribe(this.carmodelData);

    //}

    //SelectedCarModel(carmodelid: number) {
    //    console.log(carmodelid);
    //}

    ngOnInit() {
        //this.carService.getAllCarMakes();
        //this.carMakesSubs = this.carService.carMakes.subscribe(this.carmakeData);

        //this.searchForm = this.formBuilder.group({
        //    "customerName": [],
        //    "licensePlate": [],
        //    "carMakeID": [],
        //    "carModelID": []
        //});
    }
}
