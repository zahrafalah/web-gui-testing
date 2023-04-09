import pages from './pages';

fixture('About page test').page('http://localhost:3000/about');

test('Test about page', async t => {
	// test the link of the about tab
	await t
		.expect(pages.aboutNavItem.exists)
		.ok()
		.expect(pages.aboutNavItem.getAttribute('href'))
		.eql('/about');

	// test length and width of image
	await t
		.expect(pages.aboutImage.exists)
		.ok()
		.expect(pages.aboutImage.clientWidth)
		.eql(500)
		.expect(pages.aboutImage.clientHeight)
		.eql(600);

	// test the number of items in the list
	await t.expect(pages.aboutList.exists).ok().expect(pages.aboutList.childElementCount).eql(5);

	// test that clicking the button reveals text
	await t
		.expect(pages.aboutBtn.exists)
		.ok()
		.click(pages.aboutBtn)
		.expect(pages.abotuBtnClickedDiv.exists)
		.ok()
		.expect(pages.abotuBtnClickedDiv.textContent)
		.eql('Button clicked');

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
