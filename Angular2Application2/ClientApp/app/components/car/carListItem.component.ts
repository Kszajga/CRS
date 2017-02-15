import { NgModule, Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Http } from '@angular/http';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { CarService } from './carService';

import ICar = App.Models.ICar;

@Component({
    selector: 'carListItem',
    template: require('./carListItem.component.html')
})
export class CarListItemComponent implements OnInit {
    public cars: ICar[];
    public customerID;

    private subscription: Subscription;
    private routeSubscription: Subscription;

    constructor(
        private carService: CarService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        console.log(this.customerID);
        this.carService.cars.subscribe(this.processData);
    }

    processData = (data: ICar[]) => {
        this.cars = data;
    }

    ngOnInit() {
        //let id = this.route.snapshot.params['customerID'];
        //this.customerID = id;
        console.log("ngOnInit " + this.customerID);

        this.subscription =
            this.carService.cars.subscribe(this.processData);

        this.routeSubscription =
            this.route.params.subscribe((p: Params) => { this.customerID = parseInt(p["customerID"], 10) });

        if (this.customerID > 0) {
            this.carService.getCarByCustomerID(this.customerID);
        }
        
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
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
