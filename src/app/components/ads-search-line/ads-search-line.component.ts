import {Component, OnInit, Inject} from '@angular/core';
import {MapService} from "../../services/map.service";
import {Http} from "@angular/http";
import {CompleterService, CompleterData} from "ng2-completer";
import {environment} from "../../../environments/environment";
import {StringHelper} from "../../helpers/string.helper";
import {Router} from "@angular/router";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ads-search-line',
  templateUrl: './ads-search-line.component.html',
  styleUrls: ['./ads-search-line.component.css']
})
export class AdsSearchLineComponent implements OnInit {
  private api: string = environment.api;

  private searchData: CompleterData;

  private guests : any[];

  constructor(
    @Inject(MapService) private MapService,
    @Inject(CompleterService) private completerService,
    @Inject(Http) private http,
    @Inject(Router) private router
  ) {
    this.guests = [];
    this.guests.push({name: '1 Guest', value: 1});
    this.guests.push({name: '2 Guests', value: 2});
    this.guests.push({name: '3 Guests', value: 3});
    this.guests.push({name: '4 Guests', value: 4});
    this.guests.push({name: '5 Guests', value: 5});
    this.guests.push({name: '6 Guests', value: 6});
    this.guests.push({name: '7 Guests', value: 7});
    this.guests.push({name: '8 Guests', value: 8});
    this.guests.push({name: '9 Guests', value: 9});
    this.guests.push({name: '10 Guests', value: 10});
    this.guests.push({name: '11 Guests', value: 11});
    this.guests.push({name: '12 Guests', value: 12});
    this.guests.push({name: '13 Guests', value: 13});
    this.guests.push({name: '14 Guests', value: 14});
    this.guests.push({name: '15 Guests', value: 15});
    this.guests.push({name: '16+ Guests', value: 16});
  }

  ngOnInit() {
    this.searchData = this.completerService.remote(
      this.api + "map/places?query=",
      "description",
      "description"
    );
  }

  public selectPlace(event: any) {
    console.log(event);
    let url: string[] = [];
    for (let term of event.originalObject.terms) {
      url.push(StringHelper.urlencode(term.value));
    }
    console.log(url.join('--'));
    this.router.navigate(['/s/' + url.join('--')]);
  }

}
