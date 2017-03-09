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
    private carID: number;

    private state: ICar = null;
    
    private subscription: Subscription;

    constructor(
        private router: Router,
        private carService: CarService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ){
        this.carService.car.subscribe(this.carData);
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
    private carData = (data: ICar) => {
        this.car = data;
        //console.log(this.car[0]);
        this.carForm.patchValue(this.car[0]);
        this.carForm.controls['carMakeID'].setValue(this.car[0].carModel.carMake.carMakeID);
        this.carService.getCarModelByCarMakeID(this.car[0].carModel.carMake.carMakeID);
        this.carForm.controls['carModelID'].setValue(this.car[0].carModelID);
    }

    ngOnInit(): void {
        //Paraméterek lekérése az URL-ből
        this.carID = this.route.snapshot.params['carID'];

        //Jármű márkák és üzemanyagtípusok lekérése
        this.carService.getAllCarMakes();
        this.carService.getFuelTypes();

        //Ha ügyféltől érkezünk, és az autó már létezik, lekérjük az adatait
        if (this.carID > 0) {
            console.log("Ügyfél autója szerkesztésre");
            this.carService.getCarByCarID(this.carID);
        }

        //console.log("carmakes from component " + this.carMakes);
        //console.log("car from component " + this.car);
        this.carForm = this.formBuilder.group({
            "carID": [0],
            "carMakeID": [null, Validators.compose([Validators.required])],
            "carModelID": [null, Validators.compose([Validators.required])],
            "fuelTypeID": [null],
            "vin": [null],
            "engineNumber": [null],
            "color": [null],
            "customerID": [],
            "licenseplate": [null]

        });
    }

    SelectedCarMake(carmakeid: number) {
        this.carModels = null;
        console.log("carID" + this.carID);
        if (this.carID == 0) {
            this.carService.getCarModelByCarMakeID(carmakeid);
        }
        
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
        if (this.car.carID === 0) {
            console.log("insert car");
            this.carService.insert(this.car);
        }
        else {
            console.log("update car");
            console.log(this.car);
            this.carService.update(this.car);
        }
        
        //this.router.navigate(["/viewcustomer/" + this.car.customerID]);
    }

    back() {
        this.router.navigate(["/viewcustomer/" + this.car[0].customerID]);
    }


}