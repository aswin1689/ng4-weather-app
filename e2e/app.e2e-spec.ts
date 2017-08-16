import { NgMaterialAppPage } from './app.po';

describe('ng-material-app App', () => {
  let page: NgMaterialAppPage;

  beforeEach(() => {
    page = new NgMaterialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
