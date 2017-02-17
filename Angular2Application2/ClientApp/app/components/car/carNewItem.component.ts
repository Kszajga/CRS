import { Component, OnInit } from "@angular/core";
import { Params, Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { CarService } from "./carService";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import ICar = App.Models.ICar;

@Component({
    selector: 'carNewItem',
    template: require('./carNewItem.component.html')
})

export class CarNewItemComponent implements OnInit {
    car: ICar = null;
    carForm: FormGroup;

    private state: ICar = null;

    private subscription: Subscription;

    constructor(
        private router: Router,
        private carService: CarService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ){}

    private processData = (data: ICar) => {
        this.car = data; // ez egyáltalán minek?
    }

    ngOnInit(): void {
        this.subscription =
            this.carService.car.subscribe(this.processData);

        this.carForm = this.formBuilder.group({
            "carMakeID": [null, Validators.compose([Validators.required])],
            "carModelID": [null, Validators.compose([Validators.required])],
            "FuelTypeID": [null, Validators.compose([Validators.required])],
            "VIN": [null, Validators.compose([Validators.required])],
            "engineNumber": [null, Validators.compose([Validators.required])],
            "color": [null, Validators.compose([Validators.required])],
            "customerID": [null, Validators.compose([Validators.required])]

        });
    }

    saveCar() {
        this.car = this.carForm.value;
        console.log(this.car);
        this.carService.insert(this.car);
    }
}