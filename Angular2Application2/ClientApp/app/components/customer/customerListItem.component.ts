import { NgModule, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './customerService';

import ICustomer = App.Models.ICustomer;

@Component({
    selector: 'customerListItem',
    template: require('./customerListItem.component.html')
})
export class CustomerListItemComponent implements OnInit {
    public customer: ICustomer;
    public customerID;

    constructor(
        private customerService: CustomerService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.customerService.customer.subscribe(this.processData);
    }

    processData = (data: ICustomer) => {
        this.customer = data;
    }

    ngOnInit() {
        this.customerID = this.route.snapshot.params['customerID'];
        this.customerService.getCustomerById(this.customerID);
    }

    editCustomer(customer: ICustomer) {
        console.log("Listből " + customer);
        this.router.navigate(["/editcustomer/" + this.customerID]);
    }

    addCar(customer: ICustomer) {
        console.log(customer);
        this.router.navigate(["/newcar/" + customer]);
    }

    editCar(carID: number) {
        console.log("editCar from CustomerListItem " + carID);
        this.router.navigate(["/editcar/"+ carID])
    }
}