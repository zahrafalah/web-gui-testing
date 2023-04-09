import pages from './pages';

fixture('Blog page test').page('http://localhost:3000/blogs');

test('test the link of the blog tab', async t => {
	// test the link of the blog tab
	await t
		.expect(pages.blogNavItem.exists)
		.ok()
		.expect(pages.blogNavItem.getAttribute('href'))
		.eql('/blogs');
});

test('test length and width of the scroll bar', async t => {
	await t
		.expect(pages.blogScrollBar.exists)
		.ok()
		.expect(pages.blogScrollBar.clientWidth)
		.eql(600)
		.expect(pages.blogScrollBar.clientHeight)
		.eql(400);
});

test('test check box by checking and unchecking it', async t => {
	await t
		.expect(pages.blogCheckbox.exists)
		.ok()
		.click(pages.blogCheckbox)
		.expect(pages.blogCheckbox.checked)
		.ok()
		.click(pages.blogCheckbox)
		.expect(pages.blogCheckbox.checked)
		.notOk();
});

test('test that the page has a label', async t => {
	await t
		.expect(pages.blogLabel.exists)
		.ok()
		.expect(pages.blogLabel.textContent)
		.eql('I agree to Terms of Service');
});
