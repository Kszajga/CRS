﻿import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
import { Http, Response, RequestOptionsArgs, Headers } from "@angular/http";

import Car = App.Models.ICar;

@Injectable()
export class CarService {

    cars: Subject<Car[]>;
    car: Subject<Car>;

    private defaultArgs: RequestOptionsArgs;
    //private configuration: Configuration, 
    constructor(private http: Http) {
        this.cars = new Subject<Car[]>();
        this.car = new Subject<Car>();

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
        this.http.get("api/Car/GetCarsByCustomerID/" + customerID)
            .subscribe((result: Response) => {
                this.car.next(result.json());
            }, this.handleError);
    }
}
