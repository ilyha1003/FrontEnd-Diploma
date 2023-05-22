import fillTripsList from "../pages/search-page/js/list";

const regionInput = document.querySelector('.region-input');
const countryInput = document.querySelector('.country-input');

const debounce = (func, delay) => {
    let timeout;
    return function () {
        const funcCall = () => {
            func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(funcCall, delay);       
    };
};

const getTrips = async () => {
    const regionInputValue = regionInput.value;
    const countryInputValue = countryInput.value;

    try {
        const data = await fetch(`http://127.0.0.1:5500/trips.json`);
        const json = await data.json();

        fillTripsList(json, regionInputValue, countryInputValue);

        return json;
    } catch(err) {
        console.log(err);
    }   
}

export const getMatchedData = debounce(getTrips, 500);
export const getAllTrips = debounce(getTrips, 500);


