/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FoundersComponent } from './founders.component';
import {BottomMenuComponent} from "../bottom-menu/bottom-menu.component";
import {AboutMenuComponent} from "../about-menu/about-menu.component";
import {TopMenuComponent} from "../top-menu/top-menu.component";
import {By} from "@angular/platform-browser";

describe('Component: Founders', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FoundersComponent,
        TopMenuComponent,
        AboutMenuComponent,
        BottomMenuComponent
      ]
    });
  });

  it('should create an instance', () => {
    let component = new FoundersComponent();
    expect(component).toBeTruthy();
  });

  it(`should have 'Our Co-Founders'`, async(() => {
    let fixture = TestBed.createComponent(FoundersComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('About Us');
  }));

  it(`should have 'h1 Our Co-Founders'`, async(() => {
    let fixture = TestBed.createComponent(FoundersComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h1'))[0];

    expect(h2.nativeElement.textContent).toContain('Our Co-Founders');
  }));

  it(`should have 'h2 Joe Gebbia'`, async(() => {
    let fixture = TestBed.createComponent(FoundersComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h2'))[0];

    expect(h2.nativeElement.textContent).toContain('Joe Gebbia');
  }));

  it(`should have 'h2 Brian Chesky'`, async(() => {
    let fixture = TestBed.createComponent(FoundersComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h2'))[1];

    expect(h2.nativeElement.textContent).toContain('Brian Chesky');
  }));

  it(`should have 'h2 Nathan Blecharczyk'`, async(() => {
    let fixture = TestBed.createComponent(FoundersComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h2'))[2];

    expect(h2.nativeElement.textContent).toContain('Nathan Blecharczyk');
  }));
});
