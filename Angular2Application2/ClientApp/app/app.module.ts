import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { CarListComponent } from './components/car/carList.component';
import { CarListItemComponent } from './components/car/carListItem.component';
import { CarNewItemComponent } from "./components/car/carNewItem.component";
import { CarService } from './components/car/carService';
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
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ReactiveFormsModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'car', component: CarListComponent },
            { path: 'car/:customerID', component: CarListItemComponent },
            { path: 'newcar', component: CarNewItemComponent },
            { path: '**', redirectTo: 'home' }            
        ])
    ],
    providers: [CarService]
})

export class AppModule {
}
