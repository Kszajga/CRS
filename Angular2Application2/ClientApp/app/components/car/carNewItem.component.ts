import { Component, OnInit } from "@angular/core";
import { Params, Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { CarService } from "./carService";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import ICar = App.Models.ICar;
import ICarMake = App.Models.ICarMake;
import ICarModel = App.Models.ICarModel;
import IFuelType = App.Models.IFuelType;

@Component({
    selector: 'carNewItem',
    template: require('./carNewItem.component.html')
})

export class CarNewItemComponent implements OnInit {
    car: ICar = null;
    carMakes: ICarMake[];
    carModels: ICarModel[];
    fuelTypes: IFuelType[];
    carForm: FormGroup;
    private customerID;

    private state: ICar = null;
    
    private subscription: Subscription;

    constructor(
        private router: Router,
        private carService: CarService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ){
        this.carService.carMakes.subscribe(this.processData);
        this.carService.carModels.subscribe(this.carmodelData);
        this.carService.fuelTypes.subscribe(this.fueltypeData);
    }

    private processData = (data: ICarMake[]) => {
        this.carMakes = data;
    }
    private carmodelData = (data: ICarModel[]) => {
        this.carModels = data;
    }
    private fueltypeData = (data: IFuelType[]) => {
        this.fuelTypes = data;
    }

    ngOnInit(): void {
        this.carService.getAllCarMakes();
        this.carService.getFuelTypes();
        this.customerID = this.route.snapshot.params['customerID'];

        if (this.customerID > 0) {
            console.log("van user");
        }

        //console.log("carmakes from component " + this.carMakes);
        //console.log("car from component " + this.car);
        this.carForm = this.formBuilder.group({
            "carMakeID": [null, Validators.compose([Validators.required])],
            "carModelID": [null, Validators.compose([Validators.required])],
            "fuelTypeID": [null, Validators.compose([Validators.required])],
            "vin": [null, Validators.compose([Validators.required])],
            "engineNumber": [null, Validators.compose([Validators.required])],
            "color": [null, Validators.compose([Validators.required])],
            "customerID": [this.customerID],
            "licenseplate": [null, Validators.compose([Validators.required])]

        });
    }

    SelectedCarMake(carmakeid: number) {
        this.carModels = null;
        this.carService.getCarModelByCarMakeID(carmakeid);
    }

    SelectedCarModel(carmodelid: number) {
        console.log(carmodelid);
    }

    SelectedFuelType(fueltypeid: number) {
        console.log(fueltypeid);
    }

    saveCar() {
        this.car = this.carForm.value;
        //console.log("this.car" + this.car.carModelID + " " + this.car.carMakeID + " " + this.car.engineNumber + " " + this.car.color + " " + this.car.vin + " " + this.car.customerID);
        this.carService.insert(this.car);
        this.router.navigate(["/viewcustomer/" + this.customerID]);
    }


}