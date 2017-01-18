import { DasSchwarzeAugePage } from './app.po';

describe('das-schwarze-auge App', function() {
  let page: DasSchwarzeAugePage;

  beforeEach(() => {
    page = new DasSchwarzeAugePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
