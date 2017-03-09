import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { CustomerService } from "./customerService";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Response } from "@angular/http";
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import ICustomer = App.Models.ICustomer;

@Component({
    selector: 'customer-new',
    providers: [ToasterService],
    template: require('./customerNewItem.component.html')
})
export class CustomerNewItemComponent implements OnInit {
    customer: ICustomer = null;
    private customerID: number;
    
    customerForm: FormGroup;
    private state: ICustomer = null;
    private subscription: Subscription;
    private isLoading: boolean = false;
    
    constructor(
        private router: Router,
        private customerService: CustomerService,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private toaster: ToasterService
    ) {}

    private processData = (data: ICustomer) => {
        this.customer = data;
        // Dátum átalakítása, hogy az inputban megjelenhessen
        if (this.customer[0].birthday) {
            this.customer[0].birthday = new Date(this.customer[0].birthday).toISOString().substring(0, 10);
        }
        this.customerForm.patchValue(this.customer[0]);

        if (this.isLoading)
        {   
            this.toaster.pop("success", "Info", "Hozzáadás sikeres");
            console.log("toaster volt");
        }

        this.isLoading = false;
    }

    ngOnInit(): void {
        this.customerID = 0;
        //GET CustomerID
        this.customerID = this.route.snapshot.params['customerID'];

        if (this.customerID > 0) {
            console.log("customerID > 0");
            this.customerService.getCustomerById(this.customerID);            
        }
        else {
        }

        this.subscription = this.customerService.customer.subscribe(this.processData);

        this.customerForm = this.formBuilder.group({
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

    saveCustomer() {
        this.isLoading = true;
        this.customer = this.customerForm.value;
        if (this.customer.customerID === 0) {
            console.log("insert");
            this.toaster.pop("success", "Info", "Hozzáadás sikeres");
            this.customerService.insert(this.customer).subscribe((r: Response) => {
                console.log("Jump to CustomerID: " + r.json().customerID);
                this.router.navigate(["/newcar/" + r.json().customerID]);
            });

            //this.subscription = this.customerService.customer.subscribe(this.processData);
            //console.log("subs"+ this.subscription);
            
            //console.log(sajt);
        } else {
            console.log("update");
            this.customerService.update(this.customer);
        }
        //this.customerForm.reset();
    }

    back() {
        console.log("dirty? " + this.customerForm.dirty);
        if (this.customerForm.dirty) {
            alert("Visszalépés előtt mentsen!");
        } else {
            this.router.navigate(["customers"]);
        }
    }
}
