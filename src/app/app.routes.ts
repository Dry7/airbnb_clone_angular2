import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {FoundersComponent} from "./components/founders/founders.component";
import {HelpComponent} from "./components/help/help.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'about/about-us', component: AboutComponent },
    { path: 'about/founders', component: FoundersComponent },
    { path: 'help', component: HelpComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);