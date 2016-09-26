import { Component, OnInit } from '@angular/core';
import {HelpCategoriesComponent} from "../help-categories/help-categories.component";
import {ViewChild} from "@angular/core/src/metadata/di";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {HelpService} from "../../services/help.service";
import {IHelpGettingStarted} from "../../interfaces/ihelp-getting-started";

@Component({
  selector: 'app-help-getting-started',
  templateUrl: './help-getting-started.component.html',
  styleUrls: ['./help-getting-started.component.css']
})
export class HelpGettingStartedComponent implements OnInit {
  @ViewChild(HelpCategoriesComponent) categoriesComponent : HelpCategoriesComponent;

  /**
   * Current category
   */
  private current_category : any = null;

  /**
   * Parent category
   */
  private parent_category : any = null;

  private item : IHelpGettingStarted;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HelpService: HelpService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.HelpService.gettingStarted(slug).subscribe(
        item => this.item = item,
        error => console.log(error)
      );
    })
  }
}
