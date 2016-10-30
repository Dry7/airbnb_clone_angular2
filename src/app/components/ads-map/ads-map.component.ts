import {Component, OnInit, Inject} from '@angular/core';
import {MapService} from "../../services/map.service";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-ads-map',
  templateUrl: './ads-map.component.html',
  styleUrls: ['./ads-map.component.css']
})
export class AdsMapComponent implements OnInit {

  @Input() private city;
  @Input() private ads;

  private lat: number;
  private lng: number;

  constructor(
    @Inject(MapService) private MapService
  ) { }

  ngOnInit() {
  }

  setCity(city: string) {
    this.MapService.location(city).subscribe(location => {
      this.lat = location.lat;
      this.lng = location.lng;
    })
  }

}
