/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import { TopMenuComponent } from './top-menu.component';
import {TranslateService, TranslatePipe, TranslateModule} from "ng2-translate";
import {TranslateStub} from "../../tests/translate.stub";

describe('Component: TopMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
        TopMenuComponent
      ]
    });
  });

  it('should create an instance', () => {
    let component = new TopMenuComponent();
    expect(component).toBeTruthy();
  });

  it(`should have 'Logo'`, async(() => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Logo');
  }));

  it(`should have 'Where to?'`, async(() => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Where to?');
  }));

  it(`should have 'Become a Host'`, async(() => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Become a Host');
  }));

  it(`should have 'Help'`, async(() => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Help');
  }));

  it(`should have 'Sign Up'`, async(() => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Sign Up');
  }));

  it(`should have 'Log In'`, inject([TranslateService], (translate) => {
    let fixture = TestBed.createComponent(TopMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Log In');
  }));
});