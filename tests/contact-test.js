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

test('test check box by checking and unchecking it', async t => {});

test('test the number of items in the list', async t => {});

test('test length and width of the image', async t => {});

test('test that clicking the button reveals text', async t => {});

test('test that text can be added to the text area', async t => {});

test('test that the page has a label', async t => {
	await t
		.expect(pages.contactLabel.exists)
		.ok()
		.expect(pages.contactLabel.textContent)
		.eql('Contact text area:');
});
