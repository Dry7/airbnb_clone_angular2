import {Component, OnInit, Inject} from '@angular/core';
import {CompleterData, CompleterService, CompleterItem} from "ng2-completer";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-help-search',
  templateUrl: './help-search.component.html',
  styleUrls: ['./help-search.component.css']
})
export class HelpSearchComponent implements OnInit {

  private searchData: CompleterData;

  constructor(
      private completerService: CompleterService,
      private http: Http,
      @Inject(Router) private router
  ) { }

  ngOnInit() {
    this.searchData = this.completerService.remote(
      "http://airbnb/api/v1/help/search?q=",
      "name",
      "name"
    );
  }

  public onAnswerSelected(selected: CompleterItem) {
      this.router.navigate([selected.originalObject.url]);
  }
}
