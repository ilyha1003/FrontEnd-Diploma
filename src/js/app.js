import BurgerMenu from './BurgerMenu';
import HeroSlider from './HeroSlider'
import PopularTripsSlider from './PopularTripsSlider';
import RegionSearch from './RegionSearch';
import ReviewSlider from './ReviewSlider';
import { getData, getMatchedPopularTrips } from './fakeAPI';

document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = new HeroSlider();
    const reviewSlider = new ReviewSlider();
    const popularTripsSlider = new PopularTripsSlider();
    const navMenu = new BurgerMenu();
    const regionSearch = new RegionSearch();

    const recentlyList = document.querySelector('.recently-trips__list');
    const popularTrips = document.querySelector('.popular-trips__list');
    getData(recentlyList, 'Scandinavia', 'Barcelona', 'Yellowstone and Grand Tetons');
    getMatchedPopularTrips(popularTrips, 'European Whirl', 'Greek Island Hopping', 'Norway Adventure', 'Romantic Paris Date', 'Philippines Adventures', 'popular-trips-list__item', 'recently-trips-preview');
})