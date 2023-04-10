import pages from './pages';

fixture('About page test').page('http://localhost:3000/about');

test('test the link of the about tab', async t => {
	await t
		.expect(pages.aboutNavItem.exists)
		.ok()
		.expect(pages.aboutNavItem.getAttribute('href'))
		.eql('/about');
});

test('test length and width of the image', async t => {
	await t
		.expect(pages.aboutImage.exists)
		.ok()
		.expect(pages.aboutImage.clientWidth)
		.eql(500)
		.expect(pages.aboutImage.clientHeight)
		.eql(600);
});

test('test the number of items in the list', async t => {
	await t.expect(pages.aboutList.exists).ok().expect(pages.aboutList.childElementCount).eql(5);
});

test('test that clicking the button reveals text', async t => {
	await t
		.expect(pages.aboutBtn.exists)
		.ok()
		.click(pages.aboutBtn)
		.expect(pages.aboutBtnClickedDiv.exists)
		.ok()
		.expect(pages.aboutBtnClickedDiv.textContent)
		.eql('About Button clicked');
});

test('test that text can be added to the text area', async t => {
	await t
		.expect(pages.aboutTextArea.exists)
		.ok()
		.expect(pages.aboutTextArea.value)
		.eql('')
		.selectText(pages.aboutTextArea)
		.typeText(pages.aboutTextArea, 'New value')
		.expect(pages.aboutTextArea.value)
		.eql('New value')
		.click(pages.aboutSubmit)
		.expect(pages.aboutTextArea.value)
		.eql('');
});

test('test the min and max of the slider', async t => {
	await t
		.expect(pages.aboutSlider.exists)
		.ok()
		.expect(pages.aboutSliderVal.textContent)
		.eql('5')
		.click(pages.aboutSlider)
		.pressKey('right')
		.pressKey('right')
		.expect(pages.aboutSliderVal.textContent)
		.eql('7')
		.pressKey('left')
		.expect(pages.aboutSliderVal.textContent)
		.eql('6');
});

test('test that the page has a label', async t => {
	await t
		.expect(pages.aboutLabel.exists)
		.ok()
		.expect(pages.aboutLabel.textContent)
		.eql('About text area:');
});
