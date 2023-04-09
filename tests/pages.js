import { Selector } from 'testcafe';

class Pages {
	constructor() {
		// about page
		this.slider = Selector('.rc-slider');
		this.sliderVal = Selector('#slider-val');
		this.aboutBtn = Selector('#about-btn');
		this.abotuBtnClickedDiv = Selector('#about-btn-clicked-div');
		this.aboutTextArea = Selector('#about-text-area');

		this.toGalleryBtn = Selector('#gallery-link');
		this.galleryHeader = Selector('#gallery-header');
		this.contactButton = Selector('#contact-btn');
		this.aboutList = Selector('#about-list');
		this.textArea = Selector('#text-area');
    this.alertDiv = Selector('alert-text')
	}
}

const pages = new Pages();
export default pages;
