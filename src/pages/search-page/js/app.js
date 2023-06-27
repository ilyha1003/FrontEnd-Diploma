import { getMatchedData } from "../../../js/fakeAPI.js";
import { errorImage } from "./list.js";
import { loaderHTML } from "./loader.js"

document.addEventListener('DOMContentLoaded', () => {
    const regionInput = document.querySelector('.region-input');
    const countryInput = document.querySelector('.country-input');
    const dateInput = document.querySelector('.date-input');
    dateInput.setAttribute('placeholder', `${new Date().toLocaleDateString('ru-RU')}`);
    const tripsField = document.querySelector('.trips-wrapper');
    const resetBtn = document.querySelector('.reset-button');

    regionInput.focus();
    tripsField.innerHTML = loaderHTML;

    const searching = () => {
        tripsField.innerHTML = loaderHTML;
        errorImage('none');
        getMatchedData();
    }
    
    if(regionInput.value === '' && countryInput.value === '') {
        getMatchedData();
    };
    
    regionInput.oninput = () => {
        searching();
    };

    countryInput.oninput = () => {
        searching();
    };

    resetBtn.addEventListener('click', () => {
        if(regionInput.value || countryInput.value) {
            searching();
            regionInput.value = '';
            countryInput.value = '';
        }
    })
});

