import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {HelpService} from "../../services/help.service";
import {IHelpQuestion} from "../../interfaces/ihelp-question";

@Component({
  selector: 'app-help-details',
  templateUrl: './help-details.component.html',
  styleUrls: ['./help-details.component.css']
})
export class HelpDetailsComponent implements OnInit {

  private question: IHelpQuestion;

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