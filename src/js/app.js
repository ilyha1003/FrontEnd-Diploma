import BurgerMenu from './BurgerMenu';
import HeroSlider from './HeroSlider'
import PopularTripsSlider from './PopularTripsSlider';
import ReviewSlider from './ReviewSlider';

document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = new HeroSlider();
    const reviewSlider = new ReviewSlider();
    const popularTripsSlider = new PopularTripsSlider();
    const navMenu = new BurgerMenu();
})