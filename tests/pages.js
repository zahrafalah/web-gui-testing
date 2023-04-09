import { Selector } from 'testcafe';

class Pages {
	constructor() {
		// about page
		this.slider = Selector('.rc-slider');
		this.sliderVal = Selector('#slider-val');
		this.abotuBtnClicked = Selector('#about-btn-clicked');
		this.aboutTextArea = Selector('#about-text-area');

		this.toGalleryBtn = Selector('#gallery-link');
		this.galleryHeader = Selector('#gallery-header');
		this.contactButton = Selector('#contact-btn');
		this.aboutList = Selector('#about-list');
		this.textArea = Selector('#text-area');
	}
}

const pages = new Pages();
export default pages;
