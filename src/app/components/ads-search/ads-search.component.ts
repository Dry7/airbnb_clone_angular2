import {Component, OnInit, Inject} from '@angular/core';
import {AdsService} from "../../services/ads.service";
import {IAd} from "../../interfaces/iad";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {AdsMapComponent} from "../ads-map/ads-map.component";
import {ViewChild} from "@angular/core/src/metadata/di";
import {WishListService} from "../../services/wish-list.service";

@Component({
  selector: 'app-ads-search',
  templateUrl: './ads-search.component.html',
  styleUrls: ['./ads-search.component.css']
})
export class AdsSearchComponent implements OnInit {
  @ViewChild(AdsMapComponent) mapComponent: AdsMapComponent;

  private city = null;

  private total: number = 0;
  private from: number = 0;
  private to: number = 0;
  private pages: number[] = null;
  private current_page: number = 0;

  private ads: IAd[];

  private images: any = {};

  private filter: any = {};
  private showFilter: boolean = false;
  private showFilterAmentities = false;
  private showFilterLanguages = false;

  private loading = false;

  constructor(
    @Inject(ActivatedRoute) private route,
    @Inject(Router) private router,
    @Inject(AdsService) private AdsService,
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
    this.filter.bedrooms.push({name: 'Bedrooms', value: -1});
    this.filter.bedrooms.push({name: '1 Bedroom', value: 1});
    i = 2;
    while (i <= 10) {
      this.filter.bedrooms.push({name: i + ' Bedrooms', value: i});
      i++;
    }

    this.filter.bathrooms = [];
    this.filter.bathrooms.push({name: 'Bathrooms', value: -1});
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

    this.filter.amentities = [];
    this.filter.amentities.push({name: 'Wireless Internet',         value: 4});
    this.filter.amentities.push({name: 'Pool',                      value: 7});
    this.filter.amentities.push({name: 'Kitchen',                   value: 8});
    this.filter.amentities.push({name: '24-Hour Check-in',          value: 43});
    this.filter.amentities.push({name: 'Air Conditioning',          value: 5});
    this.filter.amentities.push({name: 'Breakfast',                 value: 16});
    this.filter.amentities.push({name: 'Buzzer/Wireless Intercom',  value: 28});
    this.filter.amentities.push({name: 'Cable TV',                  value: 2});
    this.filter.amentities.push({name: 'Carbon Monoxide Detector',  value: 36});
    this.filter.amentities.push({name: 'Doorman',                   value: 14});
    this.filter.amentities.push({name: 'Dryer',                     value: 34});
    this.filter.amentities.push({name: 'Elevator in Building',      value: 21});
    this.filter.amentities.push({name: 'Essentials',                value: 40});
    this.filter.amentities.push({name: 'Family/Kid Friendly',       value: 31});
    this.filter.amentities.push({name: 'Fire Extinguisher',         value: 39});
    this.filter.amentities.push({name: 'First Aid Kit',             value: 37});
    this.filter.amentities.push({name: 'Free Parking on Premises',  value: 9});
    this.filter.amentities.push({name: 'Hair Dryer',                value: 45});
    this.filter.amentities.push({name: 'Hangers',                   value: 44});
    this.filter.amentities.push({name: 'Heating',                   value: 30});
    this.filter.amentities.push({name: 'Hot Tub',                   value: 25});
    this.filter.amentities.push({name: 'Indoor Fireplace',          value: 27});
    this.filter.amentities.push({name: 'Internet',                  value: 3});
    this.filter.amentities.push({name: 'Iron',                      value: 46});
    this.filter.amentities.push({name: 'Laptop Friendly Workspace', value: 47});
    this.filter.amentities.push({name: 'Lock on Bedroom Door',      value: 42});
    this.filter.amentities.push({name: 'Pets Allowed',              value: 12});
    this.filter.amentities.push({name: 'Safety Card',               value: 38});
    this.filter.amentities.push({name: 'Shampoo',                   value: 41});
    this.filter.amentities.push({name: 'Smoke Detector',            value: 35});
    this.filter.amentities.push({name: 'Smoking Allowed',           value: 11});
    this.filter.amentities.push({name: 'Suitable for Events',       value: 32});
    this.filter.amentities.push({name: 'TV',                        value: 1});
    this.filter.amentities.push({name: 'Washer',                    value: 33});
    this.filter.amentities.push({name: 'Wheelchair Accessible',     value: 6});

    this.filter.languages = [];
    this.filter.languages.push({name: 'English',          value: 1});
    this.filter.languages.push({name: 'Italiano',         value: 16});
    this.filter.languages.push({name: 'Русский',          value: 32});
    this.filter.languages.push({name: 'Bahasa Indonesia', value: 32});
    this.filter.languages.push({name: 'Bahasa Malaysia',  value: 32});
    this.filter.languages.push({name: 'Bengali',          value: 32});
    this.filter.languages.push({name: 'Dansk',            value: 32});
    this.filter.languages.push({name: 'Deutsch',          value: 32});
    this.filter.languages.push({name: 'Hindi',            value: 32});
    this.filter.languages.push({name: 'Magyar',           value: 32});
    this.filter.languages.push({name: 'Nederlands',       value: 32});
    this.filter.languages.push({name: 'Norsk',            value: 32});
    this.filter.languages.push({name: 'Polski',           value: 32});
    this.filter.languages.push({name: 'Português',        value: 32});
    this.filter.languages.push({name: 'Punjabi',          value: 32});
    this.filter.languages.push({name: 'Sign Language',    value: 32});
    this.filter.languages.push({name: 'Suomi',            value: 32});
    this.filter.languages.push({name: 'Svenska',          value: 32});
    this.filter.languages.push({name: 'Čeština',          value: 32});
    this.filter.languages.push({name: 'עברית',            value: 32});
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

    this.load(this.current_page);
  }

  /**
   * Load ads
   *
   * @param page
   */
  public load(page: number) {
    this.showLoading();
    this.AdsService.search(page).subscribe(search => {
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
}
