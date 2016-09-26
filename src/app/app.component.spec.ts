/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterStub} from "./tests/router.stub";

describe('App: AirbnbAngular2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
          { provide: Router, useClass: RouterStub }
      ],
      imports: [
          RouterTestingModule
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
