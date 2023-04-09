import pages from './pages';

fixture('Home page test').page('http://localhost:3000');

test('Test home page', async t => {
	// test the link of the home tab
	await t
		.expect(pages.homeNavItem.exists)
		.ok()
		.expect(pages.homeNavItem.getAttribute('href'))
		.eql('/');

	// test the label
	await t
		.expect(pages.homeLabel.exists)
		.ok()
		.expect(pages.homeLabel.textContent)
		.eql('Home text area:');
});
