class ReviewSlider {
    windowResize() {
        if(window.innerWidth > 820) {
            this.autoSwiping(this.slidesAmount, 2, 2);
        }
        if(window.innerWidth < 820 && window.innerWidth > 480) {
            this.slidesAmount = 2;
            this.createPagination(this.slideIndex, this.slidesAmount);
            this.autoSwiping(this.slidesAmount, 4, 4);
        }
        if(window.innerWidth < 480 && window.innerWidth > 0) {
            this.slidesAmount = 1;
            this.createPagination(this.slideIndex, this.slidesAmount);
            this.autoSwiping(this.slidesAmount, 8, 8);
        }
    }    

    getItemSize() {
        const listItem = document.querySelector('.carousel-list__item');
        const listItemWidth = listItem.offsetWidth;

        return (listItemWidth);
    }

    scroll(slidesAmount, factor) {
        this.carousel.scrollTo({ left: this.carousel.scrollLeft + slidesAmount * factor * this.getItemSize(),
            behavior: "smooth",
        });
    }

    autoSwiping(slidesAmount, factor, limit) {
        setInterval(() => {
            if(this.slideIndex < limit) {
                this.slideIndex += 1;
                this.updatePagination(this.slideIndex);
                this.scroll(slidesAmount, 1);
            } else {
                this.slideIndex = 0;
                this.updatePagination(this.slideIndex);
                this.scroll(slidesAmount, -factor);
            }
        }, 4000); 
    }

    createPagination(slideIndex, slidesAmount) {  
        this.pagination.innerHTML = '';      
        for (let i = 0; i < Math.round(this.carousel.children.length / slidesAmount); i++) {
            const button = document.createElement('button');
            button.addEventListener('click', () => this.slideTo(i));
            this.pagination.appendChild(button);
        }
        this.updatePagination(slideIndex);
    }

    updatePagination(slideIndex) {
        const buttons = this.pagination.querySelectorAll('button');
        buttons.forEach((button, index) => {
            if (index === slideIndex) {
              button.classList.add('active');
            } else {
              button.classList.remove('active');
            }
        });
    }

    slideTo(index) {
        if(index > this.slideIndex) {
            this.scroll((index - this.slideIndex), this.slidesAmount);
            this.updatePagination(index);
            this.slideIndex = index;
        } else {
            this.scroll(-(this.slideIndex - index), this.slidesAmount);
            this.updatePagination(index);
            this.slideIndex = index;
        }
    }

    constructor() {
        this.slidesAmount = 3;
        this.slideIndex = 0;
        this.pagination = document.querySelector('.review-pagination');
        this.carousel = document.querySelector('.carousel__list');
        this.createPagination(this.slideIndex, this.slidesAmount);
        this.windowResize();
    }
}

export default ReviewSlider;