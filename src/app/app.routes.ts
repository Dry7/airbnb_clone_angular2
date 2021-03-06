import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {FoundersComponent} from "./components/founders/founders.component";
import {HelpComponent} from "./components/help/help.component";
import {HelpDetailsComponent} from "./components/help-details/help-details.component";
import {HelpContactUsComponent} from "./components/help-contact-us/help-contact-us.component";
import {HelpTopicComponent} from "./components/help-topic/help-topic.component";
import {HelpGettingStartedComponent} from "./components/help-getting-started/help-getting-started.component";
import {AdsSearchComponent} from "./components/ads-search/ads-search.component";
import {AdsMapComponent} from "./components/ads-map/ads-map.component";
import {AdsDetailsComponent} from "./components/ads-details/ads-details.component";
import {UsersDetailsComponent} from "./components/users/users-details/users-details.component";

const appRoutes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'about/about-us', component: AboutComponent },
    { path: 'about/founders', component: FoundersComponent },
    { path: 'help', component: HelpComponent },
    { path: 'help/article/:id', component: HelpDetailsComponent },
    { path: 'help/article/:id/:slug', component: HelpDetailsComponent },
    { path: 'help/topic/:id', component: HelpTopicComponent },
    { path: 'help/topic/:id/:slug', component: HelpTopicComponent },
    { path: 'help/getting-started/:slug', component: HelpGettingStartedComponent },
    { path: 'help/contact_us', component: HelpContactUsComponent },
    { path: 'search', component: AdsSearchComponent },
    { path: 's', component: AdsSearchComponent },
    { path: 's/:slug', component: AdsSearchComponent },
    { path: 'rooms/:id', component: AdsDetailsComponent },
    { path: 'users/show/:id', component: UsersDetailsComponent },
    { path: 'map', component: AdsMapComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);