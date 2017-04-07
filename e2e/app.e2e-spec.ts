import { Demo01Page } from './app.po';

describe('demo01 App', () => {
  let page: Demo01Page;

  beforeEach(() => {
    page = new Demo01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
