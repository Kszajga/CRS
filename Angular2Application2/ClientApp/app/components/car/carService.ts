import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
import { Http, Response, RequestOptionsArgs, Headers } from "@angular/http";

import Car = App.Models.ICar;
import CarMake = App.Models.ICarMake;
import CarModel = App.Models.ICarModel;
import FuelType = App.Models.IFuelType;

@Injectable()
export class CarService {

    cars: Subject<Car[]>;
    car: Subject<Car>;

    /* FORMHOZ */
    carMakes: Subject<CarMake[]>;
    carModels: Subject<CarModel[]>;
    fuelTypes: Subject<FuelType[]>;
    /* FORMHOZ VÉGE*/

    private defaultArgs: RequestOptionsArgs;
    //private configuration: Configuration, 
    constructor(private http: Http) {
        this.cars = new Subject<Car[]>();
        this.car = new Subject<Car>();
        this.carMakes = new Subject<CarMake[]>();
        this.carModels = new Subject<CarModel[]>();
        this.fuelTypes = new Subject<FuelType[]>();

        let defaultHeaders: Headers = new Headers();
        defaultHeaders.append("Content-Type", "application/json")
        this.defaultArgs = { headers: defaultHeaders };
    }

    handleError(error: Response) {
        var message = "";

        try {
            var result = JSON.parse(error.text());

            for (var property in result) {
                if (Array.isArray(result[property])) {
                    for (var i = 0; i < result[property].length; i++) {
                        message = message + result[property][i] + "\n";
                    }
                }
            }
        }
        catch (e) {
            message = (error.text() || error.statusText || error.status.toString(10));
        }

        if (!message) {
            message = (error.text() || error.statusText || error.status.toString(10));
        }
        alert(message);
    }

    getAllCar(): void {
        this.http.get("/api/Car/GetCars").subscribe(
            (result: Response) => {
                this.cars.next(result.json());
            }, this.handleError);
    }

    getCarByCustomerID(customerID: number): void {
        this.http.get("/api/Car/GetCarsByCustomerID?customerID=" + customerID).subscribe(
            (result: Response) => {
                this.cars.next(result.json());
                //console.log("car " + result.json()[0].carModel.carModelName);
            }, this.handleError);
    }

    getCarByCarID(carID: number): void {
        this.http.get("/api/Car/GetCarByCarID?carID=" + carID).subscribe(
            (result: Response) => {
                this.car.next(result.json());
                console.log("car " + result.json()[0].licensePlate);
            }, this.handleError);
    }

    insert(car: Car): void {
        console.log("insert car service " + car.carModelID + " " + car.carMakeID + " " + car.engineNumber + " " + car.color + " " + car.vin + " " + car.customerID);
        this.http.post("/api/Car/",
            JSON.stringify(car),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.car.next(result.json());
                console.log("car insert " + result.json()[0]);
            }, this.handleError);
    }

    update(car: Car): void {
        console.log("update car service " + car);
        this.http.put("/api/Car/",
            JSON.stringify(car),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.car.next(car);
            }, this.handleError);
    }

    /* FORMHOZ */
    getAllCarMakes(): void {
        this.http.get("/api/Car/GetAllCarMakes").subscribe(
            (result: Response) => {
                this.carMakes.next(result.json());
                //console.log("carMakes " + result.json()[0].carMakeName);
            }, this.handleError);
    }

    getCarModelByCarMakeID(CarMakeID: number): void {
        console.log(CarMakeID);
        this.http.get("/api/Car/GetCarModelByCarMakeID?CarMakeID=" + CarMakeID).subscribe(
            (result: Response) => {
                this.carModels.next(result.json());
                //console.log("carModels from service " + result.json()[0]);
            }, this.handleError);
    }

    getFuelTypes(): void {
        this.http.get("/api/Car/GetFuelTypes").subscribe(
            (result: Response) => {
                this.fuelTypes.next(result.json());
                //console.log("fuelTypes from service " + result.json()[0].fuelTypeName);
            }, this.handleError);
    }
    /* FORMHOZ VÉGE */
}
