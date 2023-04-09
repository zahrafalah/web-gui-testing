import pages from './pages';

fixture('About page test').page('http://localhost:3000/about');

test('Test about page', async t => {
	// test length and width of image
	// test the number of items in the list
	// test that clicking the button reveals text
	// test that text can be added to the text area and submitted
	await t
		.expect(pages.aboutTextArea.exists)
		.ok()
		.expect(pages.aboutTextArea.value)
		.eql('')
		.selectText(pages.aboutTextArea)
		.typeText(pages.aboutTextArea, 'New value')
		.expect(pages.aboutTextArea.value)
		.eql('New value');

	// test the min and max of the slider
	await t
		.expect(pages.slider.exists)
		.ok()
		.expect(pages.sliderVal.textContent)
		.eql('5')
		.click(pages.slider)
		.pressKey('right')
		.pressKey('right')
		.expect(pages.sliderVal.textContent)
		.eql('7')
		.pressKey('left')
		.expect(pages.sliderVal.textContent)
		.eql('6');
});
