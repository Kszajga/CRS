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
export class IncidenceNewItemComponent implements OnInit, OnDestroy {
    incidence: IServiceIncidence = null;
    incidences: IServiceIncidence[];
    private carID: number;
    private incidenceID: number;

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

    private incidenceData = (data: IServiceIncidence) => {
        console.log("incidenceData start");
        this.incidence = data;
        if (this.incidenceID > 0) {
             //Dátum átalakítása, hogy az inputban megjelenhessen
            if (this.incidence[0].repairDate) {
                this.incidence[0].repairDate = new Date(this.incidence[0].repairDate).toISOString().substring(0, 10);
            }
        }
        console.log(this.incidence);
        this.incidenceForm.patchValue(this.incidence[0]);
        this.incidenceForm.setValue({
            repairDate: this.incidence[0].repairDate,
            ServiceIncidenceName: this.incidence[0].serviceIncidenceName.incidenceName,
            CarID: this.incidence[0].carID,
            ManHour: this.incidence[0].manHour,
            Mileage: this.incidence[0].mileage
        });

        //if (this.isLoading) {
        //    this.toaster.pop("success", "Info", "Hozzáadás sikeres");
        //    console.log("toaster volt");
        //}

        this.isLoading = false;
        console.log("incidenceData end");
    }

    ngOnInit(): void {
        this.carID = 0;
        //GET CustomerID
        this.carID = this.route.snapshot.params['carID'];
        this.incidenceID = this.route.snapshot.params['incidenceID'];
        //console.log(this.router.url.substring(1,14) == "viewincidence");

        if (this.router.url.substring(1, 14) == "viewincidence") {
            console.log(this.incidenceID);
            this.incidenceService.getIncidenceByIncidenceID(this.incidenceID);
            this.subscription = this.incidenceService.incidence.subscribe(this.incidenceData);
        }

        console.log(this.carID);
        if (this.carID > 0) {
            console.log("customerID > 0");
            this.incidenceService.getIncidencesByCarID(this.carID);
            this.subscription = this.incidenceService.incidence.subscribe(this.incidenceData);
        }
        else {}

        

        this.incidenceForm = this.formBuilder.group({
            "repairDate": [""],
            //"ServiceIncidenceID": [""],
            //"ServiceIncidenceNameID": [""],
            "ServiceIncidenceName": [""],
            "CarID": [""],
            "ManHour": [""],
            "Mileage": [""]
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
