import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CarListComponent } from "./carList.component";
import { CarListItemComponent } from "./carListItem.component";
import { Car } from "./cars";
//import { ContactActivator } from "./contactActivator";

const CarRoutes: Routes = [
    {
        path: "cars",
        component: Car,
        //canActivate: [ContactActivator],
        //canDeactivate: [ContactActivator],
        children: [
            { path: "", component: CarListComponent },
            { path: ":id", component: CarListItemComponent }
        ]
    }
];


export const CarRouting: ModuleWithProviders = RouterModule.forChild(CarRoutes);