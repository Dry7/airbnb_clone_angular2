import { Component, OnInit } from '@angular/core';
import {HelpCategoriesComponent} from "../help-categories/help-categories.component";
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'app-help-contact-us',
  templateUrl: './help-contact-us.component.html',
  styleUrls: ['./help-contact-us.component.css']
})
export class HelpContactUsComponent implements OnInit {
  @ViewChild(HelpCategoriesComponent) categoriesComponent : HelpCategoriesComponent;

  /**
   * Current category
   */
  private current_category : any = null;

  /**
   * Parent category
   */
  private parent_category : any = null;

  constructor() { }

  ngOnInit() {
  }

  public clear() {
    this.categoriesComponent.clear();
  }
}
