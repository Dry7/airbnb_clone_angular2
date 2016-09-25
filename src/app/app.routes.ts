import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {FoundersComponent} from "./components/founders/founders.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'about/about-us', component: AboutComponent },
    { path: 'about/founders', component: FoundersComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);