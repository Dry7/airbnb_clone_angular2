import {Component, OnInit, Inject} from '@angular/core';
import {CompleterData, CompleterService, CompleterItem} from "ng2-completer";
import {Http} from "@angular/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-help-search',
  templateUrl: './help-search.component.html',
  styleUrls: ['./help-search.component.css']
})
export class HelpSearchComponent implements OnInit {

  private api = environment.api;
  private searchData: CompleterData;

  constructor(
      private completerService: CompleterService,
      private http: Http,
      @Inject(Router) private router
  ) { }

  ngOnInit() {
    this.searchData = this.completerService.remote(
      this.api + "help/search?q=",
      "name",
      "name"
    );
  }

  public onAnswerSelected(selected: CompleterItem) {
      this.router.navigate([selected.originalObject.url]);
  }
}
