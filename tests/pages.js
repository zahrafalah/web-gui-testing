import { Selector } from 'testcafe';


class Pages {
	constructor() {
		this.slider = Selector('.rc-slider');
    this.toGalleryBtn = Selector('#gallery-link');
    this.galleryHeader = Selector('#gallery-header');
    this.contactButton = Selector('#contact-btn')
	}
}

const pages = new Pages();
export default pages;
