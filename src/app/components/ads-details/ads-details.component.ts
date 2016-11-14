import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AdsService} from "../../services/ads.service";
import {IAd} from "../../interfaces/iad";
import {Subscription} from "rxjs";
import {AmenitiesService} from "../../services/amenities.service";
import {IAmenity} from "../../interfaces/iamenity";

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.component.html',
  styleUrls: ['./ads-details.component.css']
})
export class AdsDetailsComponent implements OnInit {
  private ad: IAd = null;
  private subscriptions: Subscription[] = [];
  private amenities: IAmenity[] = [];

  private showAmenities: boolean = false;
  private showFullDescription: boolean = false;
  private showFullHouseRules: boolean = false;

  constructor(
      @Inject(ActivatedRoute) private route,
      @Inject(AdsService) private AdsService,
      @Inject(AmenitiesService) private AmenitiesService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.subscriptions.push(this.AdsService.details(+params['id']).subscribe(item => { console.log(item); this.ad = item }, error => {}));
    });
    this.subscriptions.push(this.AmenitiesService.all().subscribe(items => this.amenities = items, error => {}));
  }

  /**
   * Check amenity available in ad
   *
   * @param amenity
   * @returns {boolean}
   */
  public inAmenities(amenity: IAmenity) : boolean {
    return (this.ad.amenities.indexOf(amenity.id) > -1);
  }

  /**
   * Get all amenities
   *
   * @returns {Array}
   */
  get availableAmenities()
  {
    let available = [];

    for (let amenity of this.ad.amenities.slice(0, 4)) {
      available.push(this.amenities.filter(item => item.id == amenity)[0]);
    }

    return available;
  }

  /**
   * Return current amenities (4 available|all)
   * @returns {any}
   */
  get currentAmenities()
  {
    if (this.showAmenities) {
      return this.amenities;
    } else {
      return this.availableAmenities;
    }
  }

  /**
   * Get cancellation
   *
   * @returns {string}
   */
  get cancellation()
  {
    switch (this.ad.cancellation) {
      case 'flexible': return 'Flexible';
      case 'long-term': return 'Long Term';
      default: return '';
    }
  }

  /**
   * Get cancellation url
   *
   * @returns {string}
   */
  get cancellationUrl()
  {
    switch (this.ad.cancellation) {
      case 'flexible': return '/home/cancellation_policies#flexible';
      case 'long-term': return '/home/cancellation_policies#long-term';
      default: return '';
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
