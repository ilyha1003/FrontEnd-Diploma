class PopularTripsSlider {
    getItemSize() {
        const listItem = document.querySelector('.popular-trips-list__item');
        const listItemWidth = listItem.offsetWidth;
        return (listItemWidth);
    }

    scroll(slidesAmount, factor) {
        this.slider.scrollTo({ left: this.slider.scrollLeft + slidesAmount * factor * this.getItemSize(),
            behavior: "smooth",
        });
    }


    constructor() {
        this.slideIndex = 0;
        this.slidesAmount = 2;
        this.slider = document.querySelector('.popular-trips__list');
        this.btnPrev = document.querySelector('.popular-trips-slider-prev');
        this.btnNext = document.querySelector('.popular-trips-slider-next');
        this.btnNext.addEventListener('click', () => {
            this.scroll(this.slidesAmount, 0.5);
        });
        this.btnPrev.addEventListener('click', () => {
            this.scroll(this.slidesAmount, -0.5);
        });
    }
}

export default PopularTripsSlider;