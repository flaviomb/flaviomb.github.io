import { AndersonTccPage } from './app.po';

describe('anderson-tcc App', () => {
  let page: AndersonTccPage;

  beforeEach(() => {
    page = new AndersonTccPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
