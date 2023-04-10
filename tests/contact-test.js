import { ClientFunction } from 'testcafe';
import pages from './pages';

fixture('Contact page test').page('http://localhost:3000/contact');

test('test the link of the contact tab', async t => {
	// test the link of the contact tab
	await t
		.expect(pages.contactNavItem.exists)
		.ok()
		.expect(pages.contactNavItem.getAttribute('href'))
		.eql('/contact');
});

test('test check box by checking and unchecking it', async t => {
	await t
		.expect(pages.contactCheckBox.exists)
		.ok()
		.click(pages.contactCheckBox)
		.expect(pages.contactCheckBox.checked)
		.ok()
		.click(pages.contactCheckBox)
		.expect(pages.contactCheckBox.checked)
		.notOk();
});

test('test the number of items in the list', async t => {
	await t.expect(pages.contactList.exists).ok().expect(pages.contactList.childElementCount).eql(5);
});

test('test length and width of the image', async t => {
	await t
		.expect(pages.contactImage.exists)
		.ok()
		.expect(pages.contactImage.clientWidth)
		.eql(500)
		.expect(pages.contactImage.clientHeight)
		.eql(600);
});

test('test that clicking the button reveals text', async t => {
	await t
		.expect(pages.contactBtn.exists)
		.ok()
		.click(pages.contactBtn)
		.expect(pages.contactBtnClickedDiv.exists)
		.ok()
		.expect(pages.contactBtnClickedDiv.textContent)
		.eql('Contact Button clicked');
});

test('test that text can be added to the text area', async t => {
	await t
		.expect(pages.contactTextArea.exists)
		.ok()
		.expect(pages.contactTextArea.value)
		.eql('')
		.selectText(pages.contactTextArea)
		.typeText(pages.contactTextArea, 'New value')
		.expect(pages.contactTextArea.value)
		.eql('New value');
});

test('test that the page has a label', async t => {
	await t
		.expect(pages.contactLabel.exists)
		.ok()
		.expect(pages.contactLabel.textContent)
		.eql('Contact text area:');
});
