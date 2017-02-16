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

    
    constructor(
        private carService: CarService,
        private route: ActivatedRoute
    ) {
        this.carService.cars.subscribe(this.processData);
    }

    processData = (data: ICar[]) => {
        this.cars = data;
    }

    ngOnInit() {
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
