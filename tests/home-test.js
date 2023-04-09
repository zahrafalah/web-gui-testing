import pages from './pages';

fixture('Home page test').page('http://localhost:3000');

test('Click button', async t => {
	// test the link of the home tab
	await t
		.expect(pages.hometNavItem.exists)
		.ok()
		.expect(pages.hometNavItem.getAttribute('href'))
		.eql('/');

	await t
		.expect(pages.toGalleryBtn.exists)
		.ok()
		.click(pages.toGalleryBtn)
		.expect(pages.galleryHeader.exists)
		.ok();
});
