import { TimereportPage } from './app.po';

describe('timereport App', () => {
  let page: TimereportPage;

  beforeEach(() => {
    page = new TimereportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
