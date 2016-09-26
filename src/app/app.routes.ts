import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {FoundersComponent} from "./components/founders/founders.component";
import {HelpComponent} from "./components/help/help.component";
import {HelpDetailsComponent} from "./components/help-details/help-details.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'about/about-us', component: AboutComponent },
    { path: 'about/founders', component: FoundersComponent },
    { path: 'help', component: HelpComponent },
    { path: 'help/article/:id', component: HelpDetailsComponent },
    { path: 'help/article/:id/:slug', component: HelpDetailsComponent },
    { path: 'help/topic/:id', component: HelpDetailsComponent },
    { path: 'help/topic/:id/:slug', component: HelpDetailsComponent },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);