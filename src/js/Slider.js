class Slider {
    autoSwiping() {
        setInterval(() => {
            if(this.slideIndex < 2) {
                this.slideIndex += 1;
                this.slideTo(this.slideIndex);
            }
            else {
                this.slideIndex = 0;
                this.slideTo(0);
            }
        }, 4000);
    }

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
        const slideWidth = this.slides.firstElementChild.clientWidth;
        this.slides.style.transform = `translateX(-${index * slideWidth}px)`;
        this.slides.style.transitionDuration = '0.9s';
        this.slideIndex = index;
        this.updatePagination(index);
    }

    prevSlide() {
        if (this.slideIndex === 0) {
            this.slideTo(this.slides.children.length - 1);
        } else {
            this.slideTo(this.slideIndex - 1);
        }
    }

    nextSlide() {
        if (this.slideIndex >= this.slides.children.length - 1) {
            this.slideTo(0);
        } else {
            this.slideTo(this.slideIndex + 1);
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
        this.slides = document.querySelector('.hero-slider-slides');
        this.slideIndex = 0;
        this.createPagination(this.slideIndex);
        this.prevBtn = document.getElementById('hero-slider-prev');
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn = document.getElementById('hero-slider-next');
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        // this.autoSwiping();
    }
}

export default Slider;