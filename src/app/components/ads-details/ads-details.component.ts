import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AdsService} from "../../services/ads.service";
import {IAd} from "../../interfaces/iad";
import {Subscription} from "rxjs";
import {AmenitiesService} from "../../services/amenities.service";
import {WishListService} from "../../services/wish-list.service";
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

  /** Open photo slider */
  private showPhotos: boolean = false;

  private showAmenities: boolean = false;
  private showFullDescription: boolean = false;
  private showFullHouseRules: boolean = false;

  /** Current image */
  private current_image : number = 0;

  constructor(
      @Inject(ActivatedRoute) private route,
      @Inject(AdsService) private AdsService,
      @Inject(AmenitiesService) private AmenitiesService,
      @Inject(WishListService) private WishListService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.subscriptions.push(this.AdsService.details(+params['id']).subscribe(item => this.ad = item, error => {}));
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


  /**
   * Show next image
   */
  public nextImage() {
    this.current_image++;
    if (this.current_image >= this.ad.images.length) {
      this.current_image = 0;
    }
  }

  /**
   * Show previous image
   */
  public prevImage() {
    this.current_image--;
    if (this.current_image < 0) {
      this.current_image = this.ad.images.length-1;
    }
  }

  /**
   * Set current image
   *
   * @param index
   */
  public setImage(index : number) {
    this.current_image = index;
  }

  /**
   * Calculate shift in photo thumbnails slider
   *
   * @returns {number}
   */
  get photoTransform() {
    if ((this.current_image == 0) || (this.current_image == 1)) {
      return 0;
    }
    if (this.current_image == 2) {
      return -3;
    }

    if ((this.current_image > 2) && (this.current_image < this.ad.images.length-3)) {
      return -3 + (this.current_image-2)*-110.5;
    }

    if (this.current_image == (this.ad.images.length-1)) {
      return -3 + (this.current_image-4)*-110.5;
    }
    if (this.current_image == (this.ad.images.length-2)) {
      return -3 + (this.current_image-3)*-110.5;
    }
  }

  /**
   * Check is ad in wish list
   *
   * @param id
   * @returns {any}
   */
  public isInWishList(id: number) {
    return this.WishListService.is(id);
  }

  /**
   * Toggle state ad in wish list
   *
   * @param id
   * @returns {boolean}
   */
  public toggleWishList(id: number) {
    this.WishListService.toggle(id);

    return false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
