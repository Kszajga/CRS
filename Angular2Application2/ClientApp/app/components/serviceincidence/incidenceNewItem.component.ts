import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { IncidenceService } from "./incidenceService";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Response } from "@angular/http";
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import IServiceIncidence = App.Models.IServiceIncidence;

@Component({
    selector: 'incidence-new',
    providers: [ToasterService],
    template: require('./incidenceNewItem.component.html')
})
export class CustomerNewItemComponent implements OnInit, OnDestroy {
    incidence: IServiceIncidence = null;
    private carID: number;

    incidenceForm: FormGroup;
    private state: IServiceIncidence = null;
    private subscription: Subscription;
    private isLoading: boolean = false;

    constructor(
        private router: Router,
        private incidenceService: IncidenceService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private toaster: ToasterService
    ) { }

    private processData = (data: IServiceIncidence) => {
        this.incidence = data;
        // Dátum átalakítása, hogy az inputban megjelenhessen
        //if (this.incidence[0].birthday) {
        //    this.incidence[0].birthday = new Date(this.incidence[0].birthday).toISOString().substring(0, 10);
        //}
        this.incidenceForm.patchValue(this.incidence[0]);

        if (this.isLoading) {
            this.toaster.pop("success", "Info", "Hozzáadás sikeres");
            console.log("toaster volt");
        }

        this.isLoading = false;
    }

    ngOnInit(): void {
        this.carID = 0;
        //GET CustomerID
        this.carID = this.route.snapshot.params['carID'];

        if (this.carID > 0) {
            console.log("customerID > 0");
            //this.customerService.getCustomerById(this.carID);
        }
        else {
        }

        this.subscription = this.incidenceService.incidence.subscribe(this.processData);

        this.incidenceForm = this.formBuilder.group({
            "customerID": [0],
            "lastName": [null, Validators.compose([Validators.required])],
            "firstName": [null, Validators.compose([Validators.required])],
            "birthplace": [""],
            "birthday": [""],
            "address": [""],
            "idNumber": [""],
            "phoneNumber": [null, Validators.compose([Validators.required])],
            "nameOfMother": [""],
            "registerDate": [new Date()],
            "lastModified": [new Date()]
        });
    }

    saveIncidence() {
        this.isLoading = true;
        this.incidence = this.incidenceForm.value;
        if (this.incidence.CarID === 0) {
            console.log("insert");
            this.toaster.pop("success", "Info", "Hozzáadás sikeres");
            this.incidenceService.insert(this.incidence).subscribe((r: Response) => {
                console.log("Incidens elmentve: " + r.json().carID);
                //this.router.navigate(["/newcar/" + r.json().customerID]);
            });

            //this.subscription = this.customerService.customer.subscribe(this.processData);
            //console.log("subs"+ this.subscription);

            //console.log(sajt);
        } else {
            console.log("update");
            this.incidenceService.update(this.incidence);
            this.subscription.unsubscribe();
        }
        //this.customerForm.reset();
    }

    back() {
        this.router.navigate(["/newcar/" + this.incidence.CarID]);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
