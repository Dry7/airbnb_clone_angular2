import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { routing, appRoutingProviders } from "./app.routes";
import { TranslateModule } from "ng2-translate";
import { AboutComponent } from './components/about/about.component';
import { FoundersComponent } from './components/founders/founders.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { AboutMenuComponent } from './components/about-menu/about-menu.component';
import { DiscoveryTilesComponent } from './components/discovery-tiles/discovery-tiles.component';
import { HelpComponent } from './components/help/help.component';
import { Ng2CompleterModule } from "ng2-completer";
import { HelpService } from "./services/help.service";
import { HelpDetailsComponent } from './components/help-details/help-details.component';
import { HelpSearchComponent } from './components/help-search/help-search.component';
import { HelpCategoriesComponent } from './components/help-categories/help-categories.component';
import { HelpContactUsComponent } from './components/help-contact-us/help-contact-us.component';
import { HelpTopicComponent } from './components/help-topic/help-topic.component';
import { HelpGettingStartedComponent } from './components/help-getting-started/help-getting-started.component';
import { DatePickerComponent } from "ng2-datepicker/src/components/ng2-datepicker";
import { AdsSearchLineComponent } from './components/ads-search-line/ads-search-line.component';
import { MapService } from "./services/map.service";
import { AdsSearchComponent } from './components/ads-search/ads-search.component';
import { AdsService } from "./services/ads.service";
import { StarComponent } from './components/star/star.component';
import { RoomTypePipe } from './pipes/room-type.pipe';
import { AdsMapComponent } from './components/ads-map/ads-map.component';
import { WishListService } from "./services/wish-list.service";
import { LocalStorageService } from "angular2-localstorage/LocalStorageEmitter"
import {AgmCoreModule, MarkerManager} from "angular2-google-maps/core";
import {Ng2SliderComponent} from "ng2-slider-component/ng2-slider.component";
import {Ng2SliderModule} from "ng2-slider-component/ng2-slider.module";
import { AdsDetailsComponent } from './components/ads-details/ads-details.component';
import {AmenitiesService} from "./services/amenities.service";
import {LanguagesService} from "./services/languages.service";
import { RoomTypeClassPipe } from './pipes/room-type-class.pipe';
import { HouseTypePipe } from './pipes/house-type.pipe';
import {HouseTypeService} from "./services/house-type.service";
import { ArrayLeftPipe } from './pipes/array-left.pipe';
import { ArrayRightPipe } from './pipes/array-right.pipe';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { RegistrationDatePipe } from './pipes/registration-date.pipe';
import { ResponseTimePipe } from './pipes/response-time.pipe';
import { PricePipe } from './pipes/price.pipe';
import { LargePhotoPipe } from './pipes/large-photo.pipe';
import { PriceDiscountPipe } from './pipes/price-discount.pipe';
import { PriceFormatPipe } from './pipes/price-format.pipe';


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
    HelpGettingStartedComponent,
    HelpComponent,
    DatePickerComponent,
    AdsSearchLineComponent,
    AdsSearchComponent,
    StarComponent,
    RoomTypePipe,
    AdsMapComponent,
    AdsDetailsComponent,
    RoomTypeClassPipe,
    HouseTypePipe,
    ArrayLeftPipe,
    ArrayRightPipe,
    CountryCodePipe,
    RegistrationDatePipe,
    ResponseTimePipe,
    PricePipe,
    LargePhotoPipe,
    PriceDiscountPipe,
    PriceFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2CompleterModule,
    Ng2SliderModule,
    TranslateModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC-FJQ50jNqF12T3bi2PTUw3u8x9WbWyPg'
    })
  ],
  providers: [
    appRoutingProviders,
    HelpService,
    MapService,
    AdsService,
    AmenitiesService,
    LanguagesService,
    HouseTypeService,
    WishListService,
    MarkerManager,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
