class LocalStorage {
    static setInputValues(regionValue, placeValue, dateValue) {
        localStorage.setItem('regionValue', JSON.stringify(regionValue));
        localStorage.setItem('placeValue', JSON.stringify(placeValue));
        localStorage.setItem('dateValue', JSON.stringify(dateValue));
    }

    static getRegionValue() {
        return JSON.parse(localStorage.getItem('regionValue'));
    }

    static getPlaceValue() {
        return JSON.parse(localStorage.getItem('placeValue'));
    }

    static getDateValue() {
        return JSON.parse(localStorage.getItem('dateValue'));
    }
}

export default LocalStorage;