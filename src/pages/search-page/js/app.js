import getData from "../../../js/fakeAPI.js";
import { loaderHTML } from "./loader.js"

document.addEventListener('DOMContentLoaded', () => {
    const regionInput = document.querySelector('.region-input');
    const countryInput = document.querySelector('.country-input');
    const tripsField = document.querySelector('.trips-wrapper');

    tripsField.innerHTML = loaderHTML;
    getData();
})