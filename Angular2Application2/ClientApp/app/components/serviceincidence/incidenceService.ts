import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';
//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
import { Http, Response, RequestOptionsArgs, Headers } from "@angular/http";

import ServiceIncidence = App.Models.IServiceIncidence;

@Injectable()
export class IncidenceService {

    incidences: Subject<ServiceIncidence[]>;//ezekhez lehet, hogy nem kell a private!
    incidence: Subject<ServiceIncidence>;
    
    private defaultArgs: RequestOptionsArgs;
    //private configuration: Configuration, 
    constructor(private http: Http) {
        this.incidences = new Subject<ServiceIncidence[]>();
        this.incidence = new Subject<ServiceIncidence>();
        
        let defaultHeaders: Headers = new Headers();
        defaultHeaders.append("Content-Type", "application/json")
        this.defaultArgs = { headers: defaultHeaders };
    }

    getIncidencesByCarID (carID: number): void {
        this.http.get("/api/ServiceIncidence/GetIncidencesByCarID?carID=" + carID).subscribe(
            (result: Response) => {
                this.incidences.next(result.json());
                //console.log("car " + result.json()[0].carModel.carModelName);
            }, this.handleError);
    }

    getIncidenceByIncidenceID(incidenceID: number): void {
        this.http.get("/api/Car/ServiceIncidence/GetIncidenceByIncidenceID?incidenceID=" + incidenceID).subscribe(
            (result: Response) => {
                this.incidence.next(result.json());
                //console.log("incidence " + result.json()[0]);
            }, this.handleError);
    }

    insert(incidence: ServiceIncidence): Observable<Response> {
        //console.log("insert car service " + car.carModelID + " " + car.carMakeID + " " + car.engineNumber + " " + car.color + " " + car.vin + " " + car.customerID);
        this.http.post("/api/ServiceIncidence/",
            JSON.stringify(incidence),
            this.defaultArgs);
    }

    update(incidence: ServiceIncidence): void {
        console.log("updated car service incidence " + incidence);
        this.http.put("/api/incidence/",
            JSON.stringify(incidence),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.incidence.next(incidence);
            }, this.handleError);
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
}
