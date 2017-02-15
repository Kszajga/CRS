import { NgModule, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './carService';

import ICar = App.Models.ICar;

@Component({
    selector: 'carList',
    template: require('./carList.component.html')
})
export class CarListComponent implements OnInit {
    public cars: ICar[];
    public customerID;
    
    constructor(private carService: CarService, private route: ActivatedRoute) {
        console.log(this.customerID);
        this.carService.cars.subscribe(this.processData);
    }

    processData = (data: ICar[]) => {
        this.cars = data;
    }

    ngOnInit() {
        //let id = this.route.snapshot.params['customerID'];
        //this.customerID = id;
        //console.log("ngOnInit " + this.customerID);
        this.carService.getAllCar();
    }

    

        
}

interface Car {
    carMake: string;
    carModel: string;
    vin: string;
    engineNumber: string;
    fuelType: string;
    color: string;
    //serviceIncidences: string[];
}
