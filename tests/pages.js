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
		this.aboutSubmit = Selector('#about-submit');
		this.aboutTextArea = Selector('#about-text-area');

		// Home page
		this.homeBtn = Selector('#home-btn');
		this.homeBtnClickedDiv = Selector('#home-btn-clicked-div');
		this.homeGalleryBtn = Selector('#gallery-link');
		this.homeImage = Selector('#home-image');
		this.homeLabel = Selector('#home-label');
		this.homeSubmit = Selector('#home-submit');
		this.homeTextArea = Selector('#home-text-area');

		// Nav items
		this.aboutNavItem = Selector('a[href="/about"]');
		this.blogNavItem = Selector('a[href="/blogs"]');
		this.contactNavItem = Selector('a[href="/contact"]');
		this.homeNavItem = Selector('a[href="/"]');

		// Gallery page
		this.galleryHeader = Selector('#gallery-header');

		// Contact page
		this.contactBtn = Selector('#contact-btn');
		this.contactBtnClickedDiv = Selector('#contact-btn-clicked-div');
		this.contactButton = Selector('#contact-btn');
		this.contactCheckBox = Selector('#contact-checkbox');
		this.contactImage = Selector('#contact-image');
		this.contactLabel = Selector('#contact-label');
		this.contactList = Selector('#contact-list');
		this.contactSubmit = Selector('#contact-submit');
		this.contactTextArea = Selector('#contact-text-area');

		// Blog page
		this.blogCheckbox = Selector('#blog-checkbox');
		this.blogLabel = Selector('#blog-label');
		this.blogScrollBar = Selector('#blog-scroll-bar');
	}
}

const pages = new Pages();
export default pages;
