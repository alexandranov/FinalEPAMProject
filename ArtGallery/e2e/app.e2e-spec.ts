import { ArtGalleryPage } from './app.po';

describe('art-gallery App', () => {
  let page: ArtGalleryPage;

  beforeEach(() => {
    page = new ArtGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
