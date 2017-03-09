import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { CarListComponent } from './components/car/carList.component';
import { CarListItemComponent } from './components/car/carListItem.component';
import { CarNewItemComponent } from "./components/car/carNewItem.component";
import { CarService } from './components/car/carService';

import { CustomerListComponent } from './components/customer/customerList.component';
import { CustomerListItemComponent } from './components/customer/customerListItem.component';
import { CustomerNewItemComponent } from './components/customer/customerNewItem.component';
import { CustomerService } from './components/customer/customerService';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        CarListComponent,
        CarListItemComponent,
        CarNewItemComponent,
        CustomerListComponent,
        CustomerListItemComponent,
        CustomerNewItemComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ReactiveFormsModule,
        ToasterModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'car', component: CarListComponent },
            { path: 'editcar/:carID', component: CarNewItemComponent },
            { path: 'car/:customerID', component: CarListItemComponent },
            { path: 'newcar/:customerID', component: CarNewItemComponent },

            { path: 'customers', component: CustomerListComponent },
            { path: 'editcustomer/:customerID', component: CustomerNewItemComponent },
            { path: 'viewcustomer/:customerID', component: CustomerListItemComponent },
            { path: 'newcustomer', component: CustomerNewItemComponent },
            { path: '**', redirectTo: 'home' }            
        ])
    ],
    providers: [CarService, CustomerService]
})

export class AppModule {
}
