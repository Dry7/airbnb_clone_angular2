import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {routing, appRoutingProviders} from "./app.routes";
import {TranslateModule} from "ng2-translate";
import { AboutComponent } from './components/about/about.component';
import { FoundersComponent } from './components/founders/founders.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { AboutMenuComponent } from './components/about-menu/about-menu.component';
import { DiscoveryTilesComponent } from './components/discovery-tiles/discovery-tiles.component';
import { HelpComponent } from './components/help/help.component';
import {Ng2CompleterModule} from "ng2-completer";
import {HelpService} from "./services/help.service";
import { HelpDetailsComponent } from './components/help-details/help-details.component';
import { HelpSearchComponent } from './components/help-search/help-search.component';
import { HelpCategoriesComponent } from './components/help-categories/help-categories.component';
import { HelpContactUsComponent } from './components/help-contact-us/help-contact-us.component';
import { HelpTopicComponent } from './components/help-topic/help-topic.component';
import { HelpGettingStartedComponent } from './components/help-getting-started/help-getting-started.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FoundersComponent,
    TopMenuComponent,
    BottomMenuComponent,
    AboutMenuComponent,
    DiscoveryTilesComponent,
    HelpComponent,
    HelpDetailsComponent,
    HelpSearchComponent,
    HelpCategoriesComponent,
    HelpContactUsComponent,
    HelpTopicComponent,
    HelpGettingStartedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2CompleterModule,
    TranslateModule.forRoot()
  ],
  providers: [
    appRoutingProviders,
    HelpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
