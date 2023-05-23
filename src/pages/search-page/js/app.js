import { getMatchedData } from "../../../js/fakeAPI.js";
import { errorImage } from "./list.js";
import { loaderHTML } from "./loader.js"

document.addEventListener('DOMContentLoaded', () => {
    const regionInput = document.querySelector('.region-input');
    const countryInput = document.querySelector('.country-input');
    const tripsField = document.querySelector('.trips-wrapper');
    const resetBtn = document.querySelector('.reset-button');

    regionInput.focus();

    tripsField.innerHTML = loaderHTML;
    if(regionInput.value === '' && countryInput.value === '') {
        getMatchedData();
    };
    
    regionInput.oninput = () => {
        tripsField.innerHTML = loaderHTML;
        errorImage('none');
        getMatchedData();
    };

    countryInput.oninput = () => {
        tripsField.innerHTML = loaderHTML;
        errorImage('none');
        getMatchedData();
    };

    resetBtn.addEventListener('click', () => {
        if(regionInput.value || countryInput.value) {
            tripsField.innerHTML = loaderHTML;
            errorImage('none');
            regionInput.value = '';
            countryInput.value = '';
            getMatchedData();
        }
    })
})