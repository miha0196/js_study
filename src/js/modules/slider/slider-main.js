import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }
    
    showSlides(n) {

        if (n > this.slides.length) {
            this.slideIndex = 1;
        };

        if (n < 1) {
            this.slideIndex = this.slides.length;
        };

        try {
            this.hanson.style.display = 'none';

            if (n == 3) {
                this.timeout = setTimeout(() => {
                    this.hanson.classList.add('animated', 'fadeIn');
                    this.hanson.style.display = 'block';
                }, 3000);
            } else {
                clearInterval(this.timeout);
                this.hanson.classList.remove('animated', 'fadeIn');
            }
        } catch (e) {}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    bindTriggers() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.prevPageLink.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                this.plusSlides(-1);
            });
        });

        this.nextPageLink.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                this.plusSlides(1);
            });
        });
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch (e) {}
    
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}