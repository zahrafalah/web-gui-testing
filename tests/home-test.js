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
