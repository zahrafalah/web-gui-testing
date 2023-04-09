import pages from './pages';

fixture('About test').page('http://localhost:3000/about');

// Tests
test('Test about page', async t => {
  //
  await t
    .expect(pages.slider.exists).ok()
    .expect(pages.slider.clientWidth).eql(400)
});

// test('Click an array of labels and then check their states', async t => {
// 	for (const feature of pages.featureList) {
// 		await t.click(feature.label).expect(feature.checkbox.checked).ok();
// 	}
// });

// test('Dealing with text using keyboard', async t => {
// 	await t
// 		.typeText(pages.nameInput, 'Peter Parker') // Type name
// 		.click(pages.nameInput, { caretPos: 5 }) // Move caret position
// 		.pressKey('backspace') // Erase a character
// 		.expect(pages.nameInput.value)
// 		.eql('Pete Parker') // Check result
// 		.pressKey('home right . delete delete delete') // Pick even shorter form for name
// 		.expect(pages.nameInput.value)
// 		.eql('P. Parker'); // Check result
// });

// test('Moving the slider', async t => {
// 	const initialOffset = await pages.slider.handle.offsetLeft;

// 	await t
// 		.click(pages.triedTestCafeCheckbox)
// 		.dragToElement(pages.slider.handle, pages.slider.tick.withText('9'))
// 		.expect(pages.slider.handle.offsetLeft)
// 		.gt(initialOffset);
// });

// test('Dealing with text using selection', async t => {
// 	await t
// 		.typeText(pages.nameInput, 'Test Cafe')
// 		.selectText(pages.nameInput, 7, 1)
// 		.pressKey('delete')
// 		.expect(pages.nameInput.value)
// 		.eql('Tfe'); // Check result
// });

// test('Handle native confirmation dialog', async t => {
// 	await t.setNativeDialogHandler(() => true).click(pages.populateButton);

// 	const dialogHistory = await t.getNativeDialogHistory();

// 	await t.expect(dialogHistory[0].text).eql('Reset information before proceeding?');

// 	await t.click(pages.submitButton).expect(pages.results.innerText).contains('Peter Parker');
// });

// test('Pick option from select', async t => {
// 	await t
// 		.click(pages.interfaceSelect)
// 		.click(pages.interfaceSelectOption.withText('Both'))
// 		.expect(pages.interfaceSelect.value)
// 		.eql('Both');
// });

// test('Filling a form', async t => {
// 	// Fill some basic fields
// 	await t
// 		.typeText(pages.nameInput, 'Bruce Wayne')
// 		.click(pages.macOSRadioButton)
// 		.click(pages.triedTestCafeCheckbox);

// 	// Let's leave a comment...
// 	await t
// 		.typeText(pages.commentsTextArea, "It's...")
// 		.wait(500)
// 		.typeText(pages.commentsTextArea, '\ngood');

// 	// I guess, I've changed my mind
// 	await t
// 		.wait(500)
// 		.selectTextAreaContent(pages.commentsTextArea, 1, 0)
// 		.pressKey('delete')
// 		.typeText(pages.commentsTextArea, 'awesome!!!');

// 	// Let's submit our form
// 	await t.wait(500).click(pages.submitButton).expect(pages.results.innerText).contains('Bruce Wayne');
// });
