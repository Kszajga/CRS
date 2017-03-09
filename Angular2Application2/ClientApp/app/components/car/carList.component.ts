import { NgModule, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './carService';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import ICar = App.Models.ICar;

@Component({
    selector: 'carList',
    template: require('./carList.component.html')
})
export class CarListComponent implements OnInit {
    public cars: ICar[];
    
    constructor(
        private carService: CarService,
        private route: ActivatedRoute,
        private toaster: ToasterService
    ) {
        this.carService.cars.subscribe(this.processData);
    }

    processData = (data: ICar[]) => {
        this.toaster.pop("success", "Notification", "Sikeres hozzáadás!");
        this.cars = data;
    }

    ngOnInit() {
        this.carService.getAllCar();
    }        
}