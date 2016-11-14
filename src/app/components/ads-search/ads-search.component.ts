import {Component, OnInit, Inject} from '@angular/core';
import {AdsService} from "../../services/ads.service";
import {IAd} from "../../interfaces/iad";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {AdsMapComponent} from "../ads-map/ads-map.component";
import {ViewChild} from "@angular/core/src/metadata/di";
import {WishListService} from "../../services/wish-list.service";
import {AmenitiesService} from "../../services/amenities.service";
import {LanguagesService} from "../../services/languages.service";

@Component({
  selector: 'app-ads-search',
  templateUrl: './ads-search.component.html',
  styleUrls: ['./ads-search.component.css']
})
export class AdsSearchComponent implements OnInit {
  @ViewChild(AdsMapComponent) mapComponent: AdsMapComponent;

  /** Current city */
  private city = null;

  /** Pagination */
  private total: number = 0;
  private from: number = 0;
  private to: number = 0;
  private pages: number[] = null;
  private current_page: number = 0;

  /** Items */
  private ads: IAd[];

  private images: any = {};

  /** Filter values */
  private filter: any = {amenities: []};
  private showFilter: boolean = false;
  private showFilterAmenities = false;
  private showFilterLanguages = false;

  /** Loading ads */
  private loading = false;

  /** Price slider */
  private price_min: number;
  private price_max: number;

  /** Active filters */
  private active: any = {
    price_min: 0,
    price_max: 0,
    date_start: null,
    date_end: null,
    guests: 1,
    room_type: [],
    bedrooms: -1,
    bathrooms: -1,
    beds: -1,
    instant_book: false,
    superhost: false,
    amenities: [],
    languages: []
  };

  constructor(
    @Inject(ActivatedRoute) private route,
    @Inject(Router) private router,
    @Inject(AdsService) private AdsService,
    @Inject(AmenitiesService) private AmenitiesService,
    @Inject(LanguagesService) private LanguagesService,
    @Inject(WishListService) private WishListService
  ) {

    this.filter.guests = [];
    this.filter.guests.push({name: '1 Guest', value: 1});
    let i = 2;
    while (i <= 15) {
      this.filter.guests.push({name: i + ' Guests', value: i});
      i++;
    }
    this.filter.guests.push({name: '16+ Guests', value: 16});

    this.filter.bedrooms = [];
    this.filter.bedrooms.push({name: '1 Bedroom', value: 1});
    i = 2;
    while (i <= 10) {
      this.filter.bedrooms.push({name: i + ' Bedrooms', value: i});
      i++;
    }

    this.filter.bathrooms = [];
    i = 0;
    while (i <= 7) {
      this.filter.bathrooms.push({name: i + '.0 Bathrooms', value: i + '.0'});
      this.filter.bathrooms.push({name: i + '.5 Bathrooms', value: i + '.5'});
      i++;
    }
    this.filter.bathrooms.push({name: '8+ Bathrooms', value: 8});


    this.filter.beds = [];
    this.filter.beds.push({name: '1 Bed', value: 1});
    i = 2;
    while (i <= 15) {
      this.filter.beds.push({name: i + ' Beds', value: i});
      i++;
    }
    this.filter.beds.push({name: '16+ Beds', value: 16});

    this.filter.amenities = [];

    this.filter.languages = [];
  }

  /**
   * Init
   */
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let page = +params['page'];
      this.current_page = page > 0 ? page : 1;
      this.city = params['slug'];
      this.mapComponent.setCity(this.city);
    });

    this.AmenitiesService.filter().subscribe(items => this.filter.amenities = items, error => {});
    this.LanguagesService.all().subscribe(items => this.filter.languages = items, error => {});

    this.load(this.current_page);
  }

  /**
   * Load ads
   *
   * @param page
   */
  public load(page: number) {
    this.showLoading();
    this.AdsService.search(page, this.active).subscribe(search => {
      this.total = search.total;
      this.from = search.from;
      this.to = search.to;
      let i = 0;
      this.pages = [];
      while (i < search.pages) {
        this.pages.push(i+1);
        i++;
      }
      this.current_page = search.current_page;
      this.ads = search.items;
      this.hideLoading();
    });
  }

  /**
   * Show next image
   *
   * @param ad
   */
  public nextImage(ad: IAd) {
    ad.current_image++;
    if (ad.current_image >= ad.images.length) {
      ad.current_image = ad.images.length-1;
    }
  }

  /**
   * Show previous image
   *
   * @param ad
   */
  public prevImage(ad: IAd) {
    ad.current_image--;
    if (ad.current_image < 0) {
      ad.current_image = 0;
    }
  }

  /**
   * Toggle filter
   */
  public toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  /**
   * Hide filter
   */
  public hideFilter() {
    this.showFilter = false;
  }

  /**
   * Apply filter
   */
  public applyFilter() {
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

  /**
   * Show loading
   */
  public showLoading() {
    this.loading = true;
  }

  /**
   * Hide loading
   */
  public hideLoading() {
    this.loading = false;
  }

  /**
   * Change price range
   *
   * @param event
   */
  public changePrice(event) {
    this.active.price_min = event.startValue;
    this.active.price_max = event.endValue;
  }

  /**
   * Check exists value in array
   *
   * @param field
   * @param value
   * @returns {boolean}
   */
  public isChecked(field: string, value: string) {
    return this.active[field].indexOf(value) > -1;
  }

  /**
   * Change checkbox filter
   *
   * @param event
   * @param field
   * @param value
   */
  public changeFilter(event, field: string, value: string) {
    if (event.target.checked) {
      this.active[field].push(value);
    } else {
      this.active[field] = this.active[field].filter(item => item != value);
    }
  }

  get diagnostic() {
    return JSON.stringify(this.active);
  }
}
