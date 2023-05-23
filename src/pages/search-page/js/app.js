import { getMatchedData } from "../../../js/fakeAPI.js";
import { getAllTrips } from "../../../js/fakeAPI.js";
import { errorImage } from "./list.js";
import { loaderHTML } from "./loader.js"

document.addEventListener('DOMContentLoaded', () => {
    const regionInput = document.querySelector('.region-input');
    const countryInput = document.querySelector('.country-input');
    const tripsField = document.querySelector('.trips-wrapper');

    regionInput.focus();

    tripsField.innerHTML = loaderHTML;
    if(regionInput.value === '' && countryInput.value === '') {
        getAllTrips();
    }
    
    regionInput.oninput = () => {
        tripsField.innerHTML = loaderHTML;
        errorImage('none');
        getMatchedData();
    };

    countryInput.oninput = () => {
        tripsField.innerHTML = loaderHTML;
        errorImage('none');
        getMatchedData();
    }
})