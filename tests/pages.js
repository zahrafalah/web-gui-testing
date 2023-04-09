import { Selector } from 'testcafe';

class Pages {
	constructor() {
		// about page
		this.aboutSlider = Selector('.rc-slider');
		this.aboutSliderVal = Selector('#slider-val');
		this.aboutBtn = Selector('#about-btn');
		this.abotuBtnClickedDiv = Selector('#about-btn-clicked-div');
		this.aboutTextArea = Selector('#about-text-area');
		this.aboutList = Selector('#about-list');
		this.aboutImage = Selector('#about-image');
		this.aboutNavItem = Selector('a[href="/about"]');

		this.toGalleryBtn = Selector('#gallery-link');
		this.galleryHeader = Selector('#gallery-header');
		this.contactButton = Selector('#contact-btn');
		this.aboutList = Selector('#about-list');
		this.textArea = Selector('#text-area');
	}
}

const pages = new Pages();
export default pages;
