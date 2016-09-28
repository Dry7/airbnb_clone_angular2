import { Component, OnInit } from '@angular/core';
import {HelpCategoriesComponent} from "../help-categories/help-categories.component";
import {ViewChild} from "@angular/core/src/metadata/di";
import {Params, Router, ActivatedRoute} from "@angular/router";
import {HelpService} from "../../services/help.service";
import {IHelpArticle} from "../../interfaces/ihelp-article";
import {IHelpTopic} from "../../interfaces/ihelp-topic";

@Component({
  selector: 'app-help-topic',
  templateUrl: './help-topic.component.html',
  styleUrls: ['./help-topic.component.css']
})
export class HelpTopicComponent implements OnInit {
  @ViewChild(HelpCategoriesComponent) categoriesComponent : HelpCategoriesComponent;

  /**
   * Current category
   */
  private current_category : any = null;

  /**
   * Parent category
   */
  private parent_category : any = null;

  /**
   * Articles
   *
   * @type IHelpArticle[]
   */
  private item : IHelpTopic = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private HelpService: HelpService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.HelpService.topic(id).subscribe(
        item => this.item = item,
        error => console.log(error)
      );
    })
  }
}
