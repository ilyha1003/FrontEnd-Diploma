class LocalStorage {
    static setRegionName(regionName) {
        localStorage.setItem('regionName', JSON.stringify(regionName));
    }

    static getRegionName() {
        return JSON.parse(localStorage.getItem('regionName'));
    }
}

export default LocalStorage;