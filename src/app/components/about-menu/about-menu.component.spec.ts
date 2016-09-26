/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AboutMenuComponent } from './about-menu.component';
import {By} from "@angular/platform-browser";

describe('Component: AboutMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutMenuComponent
      ]
    });
  });

  it('should create an instance', () => {
    let component = new AboutMenuComponent();
    expect(component).toBeTruthy();
  });

  it(`should have 'About Us'`, async(() => {
    let fixture = TestBed.createComponent(AboutMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('About Us');
  }));

  it(`should have 'Link About Us'`, async(() => {
    let fixture = TestBed.createComponent(AboutMenuComponent);
    let link = fixture.debugElement.query(By.css('a[routerLink="/about/about-us"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Founders'`, async(() => {
    let fixture = TestBed.createComponent(AboutMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Founders');
  }));

  it(`should have 'Link Founders'`, async(() => {
    let fixture = TestBed.createComponent(AboutMenuComponent);
    let link = fixture.debugElement.query(By.css('a[routerLink="/about/founders"]'));
    expect(link).toBeTruthy();
  }));
});
