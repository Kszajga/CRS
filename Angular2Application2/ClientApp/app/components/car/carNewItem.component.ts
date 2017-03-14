import { Component, OnInit, OnDestroy } from "@angular/core";
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

export class CarNewItemComponent implements OnInit, OnDestroy {
    private car: ICar = null;
    carMakes: ICarMake[];
    carModels: ICarModel[];
    fuelTypes: IFuelType[];

    carForm: FormGroup;
    private carID: number;
    private customerID: number;
    private isBusy: boolean = false;
    private state: ICar = null;
    
    private carModelsSubs: Subscription;
    private carMakesSubs: Subscription;
    private carFuelTypesSubs: Subscription;
    private carSubs: Subscription;

    constructor(
        private router: Router,
        private carService: CarService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder
    ){
        //nah idáig nem jön el ez a lófasz
        //console.log(this.car[0].carModel.carMake.carMakeID);
        console.log("Constructor");
        //this.carService.getCarModelByCarMakeID(this.car[0].carModel.carMake.carMakeID);
        //this.carModelsSubs = this.carService.carModels.subscribe(this.carmodelData);
    }

    private carmakeData = (data: ICarMake[]) => {
        this.carMakes = data;
        console.log("carMakes carmakeData loaded" + this.carMakes);
    }
    private carmodelData = (data: ICarModel[]) => {
        this.carModels = data;
        console.log("carModels carmodelData loaded");
    }
    private fueltypeData = (data: IFuelType[]) => {
        this.fuelTypes = data;
        console.log("fuelTypes fueltypeData loaded");
    }
    private carData = (data: ICar) => {
        this.car = data;
        console.log("car carData loaded " + this.car[0].carModel.carMake.carMakeID);

        //Ha az autó adatai betöltődtek, form feltöltése
        this.carForm.patchValue(this.car[0]);        
        this.carForm.controls["carMakeID"].setValue(this.car[0].carModel.carMake.carMakeID); //Márka beállítása a feltöltött listából
        this.SelectedCarMake(this.car[0].carModel.carMake.carMakeID); //Típusok letöltése a márkához
        this.carForm.controls["carModelID"].setValue(this.car[0].carModel.carModelID); //Típus beállítása márkán belül
    }

    ngOnInit(): void {
        console.log("ngOnInit Start");
        //Paraméterek lekérése az URL-ből
        this.customerID = this.route.snapshot.params['customerID'];
        console.log("customerID: " + this.customerID);
        this.carID = this.route.snapshot.params['carID'];

        //Ezek hívják meg a kezdeti betöltéshez a Subscribeokat
        this.carService.getAllCarMakes();
        this.carService.getFuelTypes();
        
        //Subscribeok, amik a carServicet szólítják az adatokért
        //Ha új autót adunk hozzá
        if (this.carID == undefined) {
            this.carID = 0;
        }
        //Ha már létező autót hívunk szerkesztésre
        else if(this.carID > 0) {
            console.log("Ügyfél autója szerkesztésre");
            //Ezek hívják meg a kezdeti betöltéshez a Subscribeokat
            this.carService.getAllCarMakes();
            this.carService.getFuelTypes();


            this.carService.getCarByCarID(this.carID);
            this.carSubs = this.carService.car.subscribe(this.carData);

            
            
        }
        console.log("carID: " + this.carID);        
        this.carMakesSubs = this.carService.carMakes.subscribe(this.carmakeData);
        this.carFuelTypesSubs = this.carService.fuelTypes.subscribe(this.fueltypeData);


        
        



        //Jármű márkák és üzemanyagtípusok lekérése
        //this.carMakesSubs = this.carService.carMakes.subscribe(this.carmakeData);
        

        //Ha ügyféltől érkezünk, és az autó már létezik, lekérjük az adatait
        //if (this.carID > 0) {
            
        //    //this.carService.get
        //}

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
            "customerID": [this.customerID],
            "licensePlate": [null]
        });

        
        console.log("ngOnInit End");
    }

    ngOnDestroy(): void {
        //this.carSubs.unsubscribe();
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
        //this.carSubs.unsubscribe();
        if (this.carID) {
            this.router.navigate(["/viewcustomer/" + this.car.customerID]);
        }
        else if (this.customerID) {
            this.router.navigate(["/viewcustomer/" + this.customerID]);
        }
        //this.router.navigate(["/viewcustomer/" + this.car.customerID]);
    }

    back() {
        if (this.customerID) {
            this.router.navigate(["/viewcustomer/" + this.customerID]);
        } else {
            this.router.navigate(["/viewcustomer/" + this.car[0].customerID]);
        }        
    }


}