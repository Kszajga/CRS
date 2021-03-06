﻿import { NgModule, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { CarService } from './car.service';

import ICar = App.Models.ICar;

@Component({
    selector: 'carListItem',
    template: require('./carListItem.component.html')
})
export class CarListItemComponent implements OnInit {
    public car: ICar[];
    public customerID;
    
    constructor(
        private carService: CarService,
        private route: ActivatedRoute
    ) {
        this.carService.cars.subscribe(this.processData);
    }

    processData = (data: ICar[]) => {
        this.car = data;
    }

    ngOnInit() {
        this.customerID = this.route.snapshot.params['customerID'];
        this.carService.getCarByCustomerID(this.customerID);
    }    
}