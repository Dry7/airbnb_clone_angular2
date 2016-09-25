import { AirbnbAngular2Page } from './app.po';

describe('airbnb-angular2 App', function() {
  let page: AirbnbAngular2Page;

  beforeEach(() => {
    page = new AirbnbAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
