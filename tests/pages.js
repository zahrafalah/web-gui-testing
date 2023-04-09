import { Selector } from 'testcafe';

class Pages {
	constructor() {
		// About page
		this.aboutSlider = Selector('.rc-slider');
		this.aboutSliderVal = Selector('#slider-val');
		this.aboutBtn = Selector('#about-btn');
		this.abotuBtnClickedDiv = Selector('#about-btn-clicked-div');
		this.aboutTextArea = Selector('#about-text-area');
		this.aboutList = Selector('#about-list');
		this.aboutImage = Selector('#about-image');
		this.aboutLabel = Selector('#about-label');

		// Home page
		this.homeLabel = Selector('#home-label');

		// Nav items
		this.homeNavItem = Selector('a[href="/"]');
		this.aboutNavItem = Selector('a[href="/about"]');
		this.contactNavItem = Selector('a[href="/contact"]');
		this.blogNavItem = Selector('a[href="/blogs"]');

		// Gallery page
		this.toGalleryBtn = Selector('#gallery-link');
		this.galleryHeader = Selector('#gallery-header');

		// Contact page
		this.contactLabel = Selector('#contact-label');
		this.contactButton = Selector('#contact-btn');
		this.textArea = Selector('#text-area');
		this.alertDiv = Selector('alert-text');

		// Blog page
		this.blogLabel = Selector('#blog-label');
	}
}

const pages = new Pages();
export default pages;
