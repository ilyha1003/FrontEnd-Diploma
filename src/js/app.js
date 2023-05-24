import BurgerMenu from './BurgerMenu';
import HeroSlider from './HeroSlider'
import PopularTripsSlider from './PopularTripsSlider';
import ReviewSlider from './ReviewSlider';
import { getData } from './fakeAPI';

document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = new HeroSlider();
    const reviewSlider = new ReviewSlider();
    const popularTripsSlider = new PopularTripsSlider();
    const navMenu = new BurgerMenu();

    const recentlyList = document.querySelector('.recently-trips__list');
    getData(recentlyList, 'Scandinavia', 'Barcelona', 'Yellowstone and Grand Tetons');
})