import { Ng2weatherAppPage } from './app.po';

describe('ng2weather-app App', () => {
  let page: Ng2weatherAppPage;

  beforeEach(() => {
    page = new Ng2weatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
