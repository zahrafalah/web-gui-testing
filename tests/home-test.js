import pages from './pages';

fixture('Home page test').page('http://localhost:3000');

test('test the link of the home page', async t => {
	// test the link of the home tab
	await t
		.expect(pages.homeNavItem.exists)
		.ok()
		.expect(pages.homeNavItem.getAttribute('href'))
		.eql('/');
});

test('test that the page has a label', async t => {
	await t
		.expect(pages.homeLabel.exists)
		.ok()
		.expect(pages.homeLabel.textContent)
		.eql('Home text area:');
});

test('test length and width of the image', async t => {
	await t
		.expect(pages.homeImage.exists)
		.ok()
		.expect(pages.homeImage.clientWidth)
		.eql(500)
		.expect(pages.homeImage.clientHeight)
		.eql(600);
});

test('test that clicking the button reveals text', async t => {
	await t
		.expect(pages.homeBtn.exists)
		.ok()
		.click(pages.homeBtn)
		.expect(pages.homeBtnClickedDiv.exists)
		.ok()
		.expect(pages.homeBtnClickedDiv.textContent)
		.eql('Button clicked');
});

test('test that text can be added to the text area', async t => {
	await t
		.expect(pages.homeTextArea.exists)
		.ok()
		.expect(pages.homeTextArea.value)
		.eql('')
		.selectText(pages.homeTextArea)
		.typeText(pages.homeTextArea, 'New value')
		.expect(pages.homeTextArea.value)
		.eql('New value');
});

test('test that the link takes you to the gallery', async t => {
	await t
		.expect(pages.homeGalleryBtn.exists)
		.ok()
		.click(pages.homeGalleryBtn)
		.expect(pages.galleryHeader.exists)
		.ok()
		.expect(pages.galleryHeader.textContent)
		.eql('Gallery');
});
