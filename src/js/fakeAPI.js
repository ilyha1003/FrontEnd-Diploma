import fillListElement from "../pages/search-page/js/list";

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
    try {
        const data = await fetch(`http://127.0.0.1:5500/trips.json`);
        const json = await data.json();
        const tripsField = document.querySelector('.trips-wrapper');

        fillListElement(json);
        return json;
    } catch(err) {
        console.log(err);
    }   
}

const getData = debounce(getTrips, 500)

export default getData;