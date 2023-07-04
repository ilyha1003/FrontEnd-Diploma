import LocalStorage from "./LocalStorage";

class HeaderSearchMenu {

    constructor() {
        this.regionInput = document.querySelector('.hero-region-search-input');
        this.placeInput = document.querySelector('.hero-place-search-input');
        this.dateInput = document.querySelector('.hero-date-search-input');

        this.searchBtn = document.querySelector('.hero-search-button');

        this.searchBtn.addEventListener('click', () => {
            LocalStorage.setInputValues(this.regionInput.value, this.placeInput.value, this.dateInput.value);
        })
    }
}

export default HeaderSearchMenu;