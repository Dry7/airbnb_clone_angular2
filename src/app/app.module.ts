import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {routing, appRoutingProviders} from "./app.routes";
import { AboutComponent } from './components/about/about.component';
import { FoundersComponent } from './components/founders/founders.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FoundersComponent,
    TopMenuComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
