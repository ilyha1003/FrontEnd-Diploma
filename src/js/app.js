import BurgerMenu from './BurgerMenu';
import HeroSlider from './HeroSlider'
import PopularTripsSlider from './PopularTripsSlider';
import ReviewSlider from './ReviewSlider';
import fakeAPI from './fakeAPI';

document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = new HeroSlider();
    const reviewSlider = new ReviewSlider();
    const popularTripsSlider = new PopularTripsSlider();
    const navMenu = new BurgerMenu();
    const tripsData = new fakeAPI();
    
    // let myRequest = new Request("http://127.0.0.1:5500/trips.json");
    // fetch(myRequest)
    //     .then(function(resp) {
    //         return resp.json();
    //     })
    //     .then(function(data) {
    //         console.log(data)
    //     })
})