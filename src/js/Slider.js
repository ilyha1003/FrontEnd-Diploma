class Slider {

    updatePagination(slideIndex) {
        const pagination = document.querySelector('.hero-pagination');
        const buttons = pagination.querySelectorAll('button');
        buttons.forEach((button, index) => {
          if (index === slideIndex) {
            button.classList.add('active');
          } else {
            button.classList.remove('active');
          }
        });
    }

    slideTo(index) {
        const slides = document.querySelector('.hero-slider-slides');
        const slideWidth = slides.firstElementChild.clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
        let currentIndex = index;
        this.updatePagination(currentIndex);
    }

    prevSlide() {
        const slides = document.querySelector('.hero-slider-slides');
        if (slideIndex === 0) {
            this.slideTo(slides.children.length - 1);
        } else {
            this.slideTo(slideIndex - 1);
        }
    }

    nextSlide() {
        const slides = document.querySelector('.hero-slider-slides');
        if (slideIndex === slides.children.length - 1) {
            this.slideTo(0);
        } else {
            this.slideTo(slideIndex + 1);
        }
    }

    createPagination(slideIndex) {
        const pagination = document.querySelector('.hero-pagination');
        const slides = document.querySelector('.hero-slider-slides');
        for (let i = 0; i < slides.children.length; i++) {
          const button = document.createElement('button');
          button.addEventListener('click', () => this.slideTo(i));
          pagination.appendChild(button);
        }
        this.updatePagination(slideIndex);
    }

    constructor() {
        this.slideIndex = 0;
        this.createPagination(this.slideIndex);
        this.prevBtn = document.getElementById('hero-slider-prev');
        this.prevBtn.addEventListener('click', this.prevSlide);
        this.nextBtn = document.getElementById('hero-slider-next');
        this.nextBtn.addEventListener('click', this.nextSlide);
    }
}

export default Slider;