import { Component, OnInit } from "@angular/core";
import { Params, Router, ActivatedRoute } from "@angular/router";
import { CarService } from "./carService";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

import ICar = App.Models.ICar;

@Component({
    selector: 'carNewItem',
    template: require('./carNewItem.component.html')
})

export class CarNewItemComponent implements OnInit {
    car: ICar = null;
    carForm: FormGroup;

    private state: ICar = null;

    constructor(
        private router: Router,
        private carService: CarService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ){}

    private processData = (data: ICar) => {
        this.car = data; // ez egyáltalán minek?
    }

    ngOnInit(): void { }

    saveCar() {
        this.car = this.carForm.value;
        this.carService.addNewCar(this.car);
    }
}