import {Component, OnInit, Inject, EventEmitter} from '@angular/core';
import {HelpService} from "../../services/help.service";
import {Output} from "@angular/core/src/metadata/directives";
import {IHelpCategory} from "../../interfaces/ihelp-category";

@Component({
  selector: 'app-help-categories',
  templateUrl: './help-categories.component.html',
  styleUrls: ['./help-categories.component.css']
})
export class HelpCategoriesComponent implements OnInit {

  /**
   * All help categories
   */
  private categories : any = [];

  /**
   * Current category
   */
  private current_category: IHelpCategory = null;
  @Output() private current_category_event = new EventEmitter<IHelpCategory>();

  /**
   * Current categories
   */
  private current_categories : any = [];

  /**
   * Parent category
   */
  private parent_category : IHelpCategory = null;
  @Output() private parent_category_event = new EventEmitter<IHelpCategory>();

  /**
   * Parent categories
   */
  private parent_categories : any = [];

  constructor(@Inject(HelpService) private HelpService) { }

  ngOnInit() {
    this.HelpService.categories().subscribe(items => { this.categories = items; this.current_categories = items; }, error => console.log(error));
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
      this.parent_category_event.emit(this.parent_category);
      this.current_category_event.emit(this.current_category);
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
    this.parent_category_event.emit(this.parent_category);
    this.current_category_event.emit(this.current_category);
  }

  /**
   * Back to help home
   */
  public clear() {
    this.current_category   = null;
    this.current_categories = this.categories;
    this.parent_category   = null;
    this.parent_categories = null;
    this.parent_category_event.emit(this.parent_category);
    this.current_category_event.emit(this.current_category);
  }
}
