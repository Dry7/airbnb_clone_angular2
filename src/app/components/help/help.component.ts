import {Component, OnInit, Inject} from '@angular/core';
import {HelpService} from "../../services/help.service";
import {HelpCategoriesComponent} from "../help-categories/help-categories.component";
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  @ViewChild(HelpCategoriesComponent) categoriesComponent : HelpCategoriesComponent;

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
   * Parent category
   */
  private parent_category : any = null;

  constructor(@Inject(HelpService) private HelpService) {
  }

  ngOnInit() {
    this.HelpService.suggested().subscribe(items => this.suggested = items, error => console.log(error));
    this.HelpService.popular().subscribe(items => this.popular = items, error => console.log(error));
  }

  public clear() {
    this.categoriesComponent.clear();
  }
}
