import pages from './pages';

fixture('Home page test').page('http://localhost:3000');

test('Click button', async t => {
  await t
    .expect(pages.toGalleryBtn.exists).ok()
    .click(pages.toGalleryBtn)
    .expect(pages.galleryHeader.exists).ok()
});
