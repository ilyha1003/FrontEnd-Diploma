import { getData } from "../../../js/fakeAPI";
import LocalStorage from "./localStorage";

document.addEventListener('DOMContentLoaded', () => {
    const recentlyList = document.querySelector('.recently-trips__list');
    getData(recentlyList, 'Scandinavia', 'Barcelona', 'Yellowstone and Grand Tetons');

    const listElements = document.querySelectorAll('.places-list__item');

    listElements.forEach((el) => {
        el.addEventListener('click', () => {
            const regionName = el.querySelector('.places-name').innerHTML;
            LocalStorage.setRegionName(regionName);
        })
    })
})