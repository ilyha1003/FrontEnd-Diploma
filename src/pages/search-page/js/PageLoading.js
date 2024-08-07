import { getMatchedData } from "../../../js/fakeAPI.js";
import LocalStorage from "../../destinations-page/js/localStorage.js";
import { errorImage } from "./list.js";
import { loaderHTML } from "./loader";

class PageLoading {
    searching() {
        this.tripsField.innerHTML = loaderHTML;
        errorImage('none');
        getMatchedData();
    }

    emptyFieldsSearching() {
        if(this.regionInput.value === '' && this.countryInput.value === '') {
            getMatchedData();
        };
    }

    constructor() {
        this.regionInput = document.querySelector('.region-input');
        this.countryInput = document.querySelector('.country-input');
        this.dateInput = document.querySelector('.date-input');
        this.dateInput.setAttribute('placeholder', `${new Date().toLocaleDateString('ru-RU')}`);
        this.tripsField = document.querySelector('.trips-wrapper');
        this.resetBtn = document.querySelector('.reset-button');

        this.regionInput.focus();
        this.tripsField.innerHTML = loaderHTML;

        this.regionInput.oninput = () => {
            this.searching();
        };
        this.countryInput.oninput = () => {
            this.searching();
        };
        this.resetBtn.addEventListener('click', () => {
            if(this.regionInput.value || this.countryInput.value) {
                this.searching();
                this.regionInput.value = '';
                this.countryInput.value = '';
            }
        });
        this.emptyFieldsSearching();
        this.regionInput.value = LocalStorage.getRegionName() ? LocalStorage.getRegionName() : '';
        LocalStorage.setRegionName('');
    }
}

export default PageLoading;