import pages from './pages';

fixture('Blog page test').page('http://localhost:3000/about');

test('Test blog page', async t => {
	// test the link of the blog tab
	await t
		.expect(pages.blogNavItem.exists)
		.ok()
		.expect(pages.blogNavItem.getAttribute('href'))
		.eql('/blogs');
	// test length and width of the content
	// test the terms of service button can be clicked and unclicked
});
