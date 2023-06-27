import { getData } from "../../../js/fakeAPI";

document.addEventListener('DOMContentLoaded', () => {

    const recentlyList = document.querySelector('.recently-trips__list');
    getData(recentlyList, 'Scandinavia', 'Barcelona', 'Yellowstone and Grand Tetons');
})