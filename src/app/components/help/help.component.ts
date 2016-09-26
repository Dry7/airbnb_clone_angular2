import {Component, OnInit, Inject} from '@angular/core';
import {CompleterData, CompleterService, CompleterItem} from "ng2-completer";
import {Http} from "@angular/http";
import {HelpService} from "../../services/help.service";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  /**
   * All help categories
   */
  private categories : any = [];

  /**
   * Suggested questions
   */
  private suggested : any = [];

  /**
   * Popular questions
   */
  private popular : any = [];

  /**
   * Current category
   */
  private current_category : any = null;

  /**
   * Current categories
   */
  private current_categories : any = [];

  /**
   * Parent category
   */
  private parent_category : any = null;

  /**
   * Parent categories
   */
  private parent_categories : any = [];

  private searchData: CompleterData;

  constructor(
    @Inject(HelpService) private HelpService,
    private completerService: CompleterService,
    private http: Http
  ) {
    this.searchData = completerService.remote(
      "http://airbnb/api/v1/help/search?q=",
      "name",
      "name"
    );
  }

  ngOnInit() {
    this.HelpService.categories().subscribe(items => { this.categories = items; this.current_categories = items; }, error => console.log(error));
    this.HelpService.suggested().subscribe(items => this.suggested = items, error => console.log(error));
    this.HelpService.popular().subscribe(items => this.popular = items, error => console.log(error));
  }

  /**
   * Change help category
   *
   * @param category
   * @returns {boolean}
   */
  public to(category: any) {
    if (category.hasOwnProperty("subcategories")) {
      this.parent_category = this.current_category;
      this.parent_categories = this.current_categories;
      this.current_category = category;
      this.current_categories = category.subcategories;
      return false;
    } else {
      return true;
    }
  }

  /**
   * Back to previous category
   */
  public back() {
    if (this.parent_categories == null) {
      this.current_category   = null;
      this.current_categories = this.categories;
    } else {
      this.current_category   = this.parent_category;
      this.current_categories = this.parent_categories;
    }
    this.parent_category   = null;
    this.parent_categories = null;
  }

  /**
   * Back to help home
   */
  public clear() {
    this.current_category   = null;
    this.current_categories = this.categories;
    this.parent_category   = null;
    this.parent_categories = null;
  }

  public onAnswerSelected(selected: CompleterItem) {
    console.log(selected);
  }
}
