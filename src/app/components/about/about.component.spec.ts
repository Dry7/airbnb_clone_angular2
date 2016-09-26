/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import {By} from "@angular/platform-browser";
import {TopMenuComponent} from "../top-menu/top-menu.component";
import {AboutMenuComponent} from "../about-menu/about-menu.component";
import {BottomMenuComponent} from "../bottom-menu/bottom-menu.component";

describe('Component: About', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        TopMenuComponent,
        AboutMenuComponent,
        BottomMenuComponent
      ]
    });
  });

  it('should create an instance', () => {
    let component = new AboutComponent();
    expect(component).toBeTruthy();
  });

  it(`should have 'About Us'`, async(() => {
    let fixture = TestBed.createComponent(AboutComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('About Us');
  }));

  it(`should have 'h1 About Us'`, async(() => {
    let fixture = TestBed.createComponent(AboutComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h1'))[0];

    expect(h2.nativeElement.textContent).toContain('About Us');
  }));
});
