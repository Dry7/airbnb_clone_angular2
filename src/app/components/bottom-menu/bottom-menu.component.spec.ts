/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BottomMenuComponent } from './bottom-menu.component';
import {By} from "@angular/platform-browser";

describe('Component: BottomMenu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BottomMenuComponent
      ]
    });
  });

  it('should create an instance', () => {
    let component = new BottomMenuComponent();
    expect(component).toBeTruthy();
  });

  it(`should have 'Choose language'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Choose language');
  }));

  it(`should have 'Select language'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let select = fixture.debugElement.query(By.css('select#language-selector'));
    expect(select).toBeTruthy();
  }));

  it(`should have 'Choose currency'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Choose currency');
  }));

  it(`should have 'Select currency'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let select = fixture.debugElement.query(By.css('select#currency-selector'));
    expect(select).toBeTruthy();
  }));

  it(`should have 'About'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('About');
  }));

  it(`should have 'Link About'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[routerLink="/about/about-us"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Careers'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Careers');
  }));

  it(`should have 'Link Careers'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/careers"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Press'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('');
  }));

  it(`should have 'Link Press'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/press/news"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Blog'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Blog');
  }));

  it(`should have 'Help'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Help');
  }));

  it(`should have 'Link Help'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/help?from=footer"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Policies'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Policies');
  }));

  it(`should have 'Link Policies'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/policies"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Disaster Response'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Disaster Response');
  }));

  it(`should have 'Link Disaster Response'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/disaster-response"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Terms & Privacy'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Terms & Privacy');
  }));

  it(`should have 'Link Terms &amp; Privacy'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/terms"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Trust & Safety'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Trust & Safety');
  }));

  it(`should have 'Link Trust &amp; Safety'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/trust"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Travel Credit'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Travel Credit');
  }));

  it(`should have 'Link Travel Credit'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/invite?r=6"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Gift Cards'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Gift Cards');
  }));

  it(`should have 'Link Gift Cards'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/gift?s=footer"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Airbnb Picks'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Airbnb Picks');
  }));

  it(`should have 'Link Airbnb Picks'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/wishlists/airbnb_picks"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Mobile'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Mobile');
  }));

  it(`should have 'Link Mobile'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/mobile"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Airbnb Action'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Airbnb Action');
  }));

  it(`should have 'Business Travel'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Business Travel');
  }));

  it(`should have 'Link Business Travel'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/business-travel?s=footer"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Site Map'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Site Map');
  }));

  it(`should have 'Link Site Map'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/sitemaps"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Why Host'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Why Host');
  }));

  it(`should have 'Link Why Host'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/host"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Hospitality'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Hospitality');
  }));

  it(`should have 'Link Hospitality'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/hospitality"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Responsible Hosting'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Responsible Hosting');
  }));

  it(`should have 'Link Responsible Hosting'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/help/responsible-hosting"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Home Safety'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Home Safety');
  }));

  it(`should have 'Link Home Safety'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/home-safety"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'Instant Book'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.textContent).toContain('Instant Book');
  }));

  it(`should have 'Link Instant Book'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);
    let link = fixture.debugElement.query(By.css('a[href="/host/instant"]'));
    expect(link).toBeTruthy();
  }));

  it(`should have 'h2 Company'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h2'))[0];

    expect(h2.nativeElement.textContent).toContain('Company');
  }));

  it(`should have 'h2 Discover'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h2'))[1];

    expect(h2.nativeElement.textContent).toContain('Discover');
  }));

  it(`should have 'h2 Hosting'`, async(() => {
    let fixture = TestBed.createComponent(BottomMenuComponent);

    fixture.detectChanges();
    let h2 = fixture.debugElement.queryAll(By.css('h2'))[2];

    expect(h2.nativeElement.textContent).toBeTruthy();
  }));
});
