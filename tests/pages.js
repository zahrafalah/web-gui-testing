import { Selector } from 'testcafe';

class Pages {
	constructor() {
		// About page
		this.aboutBtn = Selector('#about-btn');
		this.aboutBtnClickedDiv = Selector('#about-btn-clicked-div');
		this.aboutImage = Selector('#about-image');
		this.aboutLabel = Selector('#about-label');
		this.aboutList = Selector('#about-list');
		this.aboutSlider = Selector('.rc-slider');
		this.aboutSliderVal = Selector('#slider-val');
		this.aboutTextArea = Selector('#about-text-area');

		// Home page
		this.homeBtn = Selector('#home-btn');
		this.homeBtnClickedDiv = Selector('#home-btn-clicked-div');
		this.homeImage = Selector('#home-image');
		this.homeLabel = Selector('#home-label');
		this.homeTextArea = Selector('#home-text-area');
		this.homeGalleryBtn = Selector('#gallery-link');

		// Nav items
		this.aboutNavItem = Selector('a[href="/about"]');
		this.blogNavItem = Selector('a[href="/blogs"]');
		this.contactNavItem = Selector('a[href="/contact"]');
		this.homeNavItem = Selector('a[href="/"]');

		// Gallery page
		this.galleryHeader = Selector('#gallery-header');

		// Contact page
		this.alertDiv = Selector('alert-text');
		this.contactButton = Selector('#contact-btn');
		this.contactLabel = Selector('#contact-label');
		this.textArea = Selector('#text-area');

		// Blog page
		this.blogCheckbox = Selector('#blog-checkbox');
		this.blogLabel = Selector('#blog-label');
		this.blogScrollBar = Selector('#blog-scroll-bar');
	}
}

const pages = new Pages();
export default pages;
