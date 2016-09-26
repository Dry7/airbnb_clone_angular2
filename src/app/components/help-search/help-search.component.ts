import { Component, OnInit } from '@angular/core';
import {CompleterData, CompleterService} from "ng2-completer";
import {Http} from "@angular/http";

@Component({
  selector: 'app-help-search',
  templateUrl: './help-search.component.html',
  styleUrls: ['./help-search.component.css']
})
export class HelpSearchComponent implements OnInit {

  private searchData: CompleterData;

  constructor(private completerService: CompleterService, private http: Http) { }

  ngOnInit() {
    this.searchData = this.completerService.remote(
      "http://airbnb/api/v1/help/search?q=",
      "name",
      "name"
    );
  }

}
