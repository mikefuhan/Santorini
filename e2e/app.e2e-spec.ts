import { SantoriniPage } from './app.po';

describe('santorini App', () => {
  let page: SantoriniPage;

  beforeEach(() => {
    page = new SantoriniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
