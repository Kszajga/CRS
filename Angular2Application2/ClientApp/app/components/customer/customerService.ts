﻿import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
//import { Configuration } from "../configuration"; ez lehet, hogy nem kell
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from "@angular/http";


import Customer = App.Models.ICustomer;

@Injectable()
export class CustomerService {
    /* FORMHOZ */
    customer: Subject<Customer>;
    customers: Subject<Customer[]>;
    /* FORMHOZ VÉGE*/

    private defaultArgs: RequestOptionsArgs;
    //private configuration: Configuration, 
    constructor(private http: Http) {
        this.customer = new Subject<Customer>();
        this.customers = new Subject<Customer[]>();
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

    getAllCustomer(): void {
        this.http.get("/api/Customer/GetAllCustomer").subscribe(
            (result: Response) => {
                this.customers.next(result.json());
            }, this.handleError);
    }

    getCustomerById(customerID: number): void {
        this.http.get("/api/Customer/GetCustomerByID?customerID=" + customerID).subscribe(
            (result: Response) => {
                this.customer.next(result.json());
            }, this.handleError);
    }

    insert(customer: Customer): Promise<{ [key: string]: any }> {
        var p = new Promise<{ [key: string]: any }>((resolve, reject) => {
        this.http.post("/api/Customer/",
            JSON.stringify(customer),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.customer.next(result.json());
                }, this.handleError);
        });

        p.then(r => console.log("then: " + r)).catch(e => console.log("reject: " + e));

        //console.log("service insert hivas " + p.then(r => console.log("then: " + r)).catch(e => console.log("reject: " + e)));
        return p;
        
    }

    update(customer: Customer): void {
        console.log("update customer " + customer);
        this.http.put("/api/Customer/",
            JSON.stringify(customer),
            this.defaultArgs)
            .subscribe((result: Response) => {
                this.customer.next(customer);
            }, this.handleError);
    }
}
