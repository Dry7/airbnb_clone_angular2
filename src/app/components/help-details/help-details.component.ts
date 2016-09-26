import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HelpService} from "../../services/help.service";
import {IHelpArticle} from "../../interfaces/ihelp-article";
import {HelpCategoriesComponent} from "../help-categories/help-categories.component";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {
  @ViewChild(HelpCategoriesComponent) categoriesComponent : HelpCategoriesComponent;

  private question: IHelpArticle;

  /**
   * Current category
   */
  private current_category : any = null;

  /**
   * Parent category
   */
  private parent_category : any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HelpService: HelpService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.HelpService.details(id).subscribe(
        item => this.question = item,
        error => console.log(error)
      );
    })
  }
}