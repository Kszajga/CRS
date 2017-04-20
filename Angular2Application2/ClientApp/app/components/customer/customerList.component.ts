import { NgModule, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './customer.service';

import ICustomer = App.Models.ICustomer;

@Component({
    selector: 'customerList',
    template: require('./customerList.component.html')
})
export class CustomerListComponent implements OnInit {
    public customers: ICustomer[];


    constructor(
        private customerService: CustomerService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.customerService.customers.subscribe(this.processData);
    }

    processData = (data: ICustomer[]) => {
        this.customers = data;
    }

    ngOnInit() {
        this.customerService.getAllCustomer();
    }

    editCustomer(customer: ICustomer) {
        console.log("Listből " + customer);
        this.router.navigate(["/editcustomer/" + customer]);
    }

    viewCustomer(customer: ICustomer) {
        this.router.navigate(["/viewcustomer/" + customer]);
    }
}