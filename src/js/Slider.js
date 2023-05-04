class Slider {
    autoSwiping(index) {
        setInterval(() => {
            console.log(this.slideIndex)
            if(index < 2) {
                this.slideTo(index);
                index += 1;
            }
            else {
                this.slideTo(0);
                index = 0;
            }
        }, 3000);
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
        const slides = document.querySelector('.hero-slider-slides');
        const slideWidth = slides.firstElementChild.clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
        slides.style.transitionDuration = '0.9s';
        this.slideIndex = index;
        this.updatePagination(this.slideIndex);
    }

    prevSlide() {
        const slides = document.querySelector('.hero-slider-slides');
        if (this.slideIndex === 0) {
            this.slideTo(slides.children.length - 1);
        } else {
            this.slideTo(this.slideIndex - 1);
        }
        console.log(this.slideIndex);
    }

    nextSlide() {
        const slides = document.querySelector('.hero-slider-slides');
        if (this.slideIndex === slides.children.length - 1) {
            this.slideTo(0);
        } else {
            this.slideTo(this.slideIndex + 1);
        }
        console.log(this.slideIndex);
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
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn = document.getElementById('hero-slider-next');
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.autoSwiping(this.slideIndex);
    }
}

export default Slider;