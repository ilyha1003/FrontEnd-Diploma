import LocalStorage from "../pages/destinations-page/js/LocalStorageDestinations";

class RegionSearch {
    searchByRegion() {
        const placesList = document.querySelector('.places__list');

        for(let i = 0; i < placesList.children.length - 1; i++) {
            const placesListName = placesList.children[i].querySelector('.places-name');
            placesList.children[i].addEventListener('click', () => {
                const regionName = placesList.children[i].querySelector('.places-name').innerHTML;
                console.log(regionName);
                LocalStorage.setRegionName(regionName);
            })
        }
    }

    constructor() {
        this.searchByRegion();
    }
}

export default RegionSearch;