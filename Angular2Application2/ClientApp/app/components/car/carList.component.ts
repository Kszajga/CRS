import { NgModule, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from './car.service';
//import { ToasterService } from 'angular2-toaster/angular2-toaster';

import ICar = App.Models.ICar;
import ICarMake = App.Models.ICarMake;
import ICarModel = App.Models.ICarModel;

@Component({
    selector: 'carList',
    template: require('./carList.component.html')
})
export class CarListComponent implements OnInit {
    private submitted: boolean;
    private cars: ICar[];
    private searchForm: FormGroup;

    carMakes: ICarMake[];
    carModels: ICarModel[];
    private carSubs: Subscription;
    private carModelsSubs: Subscription;
    private carMakesSubs: Subscription;
    
    constructor(
        private carService: CarService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
        //private toaster: ToasterService
    ) {
        this.carService.cars.subscribe(this.processData);
        this.submitted = false;
    }

    processData = (data: ICar[]) => {
        //this.toaster.pop("success", "Notification", "Sikeres hozzáadás!");
        this.cars = data;
    }
    private carmakeData = (data: ICarMake[]) => {
        this.carMakes = data;
        console.log("carMakes carmakeData loaded" + this.carMakes);
    }
    private carmodelData = (data: ICarModel[]) => {
        this.carModels = data;
        console.log("carModels carmodelData loaded");
    }

    ngOnInit() {
        //this.carService.getAllCar();
        this.carService.getAllCarMakes();
        this.carMakesSubs = this.carService.carMakes.subscribe(this.carmakeData);
        this.carSubs = this.carService.cars.subscribe(this.processData);

        this.searchForm = this.formBuilder.group({
            "firstName": [""],
            "lastName": [""],
            "licensePlate": [""],
            "carMakeID": [],
            "carModelID": []
        });
    }

    private StartSearch(firstName, lastName, licensePlate, carmakeselected, carmodelselected) {
        this.submitted = true;
        console.log(lastName, firstName, licensePlate, carmakeselected, carmodelselected);
        this.carService.getCarsForSearch(lastName, firstName, licensePlate, carmakeselected, carmodelselected);
        this.submitted = false;
    }

    SelectedCarMake(carmakeid: number) {
        //this.carModels = null;
        console.log(carmakeid);
        this.carService.getCarModelByCarMakeID(carmakeid);
        this.carModelsSubs = this.carService.carModels.subscribe(this.carmodelData);
    }

    SelectedCarModel(carmodelid: number) {
        console.log(carmodelid);
    }

    ViewCar(carID: number) {
        this.router.navigate(["/editcar/" + carID]);
    }
}