class BurgerMenu {
    constructor() {
        this.searchField = document.querySelector('.search-field');
        this.firstLayer = document.querySelector('.first-layer');
        this.secondLayer = document.querySelector('.second-layer');
        this.thirdLayer = document.querySelector('.third-layer');
        this.websiteBody = document.querySelector('body');
        this.mobileList = document.querySelector('.mobile__list');
        this.burgerMenu = document.querySelector('.nav-mobile');
        this.header = document.querySelector('.navigation');
        this.burgerMenu.addEventListener('click', () => {
            this.header.classList.toggle('nav-mobile-active');
            this.mobileList.classList.toggle('mobile-list-active');
            this.websiteBody.classList.toggle('lock');
            this.firstLayer.classList.toggle('mobile-position');
            this.secondLayer.classList.toggle('mobile-position-hidden');
            this.thirdLayer.classList.toggle('mobile-position-reverse');
            this.burgerMenu.classList.toggle('mobile-active');
            this.searchField.classList.toggle('hidden');
        })
    }
}

export default BurgerMenu;