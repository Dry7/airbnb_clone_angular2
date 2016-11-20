import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {IUser} from "../../../interfaces/iuser";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  /** Rx subscriptions */
  private subscriptions: Subscription[] = [];

  /** User */
  private user : IUser = null;

  /** Reviews: guests, hosts */
  private reviews: any = {guests: [], hosts: []};

  constructor(
      @Inject(ActivatedRoute) private route,
      @Inject(UsersService) private UsersService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.subscriptions.push(this.UsersService.details(+params['id']).subscribe(item => this.user = item, error => {}));
      this.subscriptions.push(this.UsersService.reviews(+params['id'], this.UsersService.REVIEWS_GUESTS).subscribe(items => this.reviews.guests = items, error => {}));
      this.subscriptions.push(this.UsersService.reviews(+params['id'], this.UsersService.REVIEWS_HOSTS).subscribe(items => this.reviews.hosts = items, error => {}));
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
