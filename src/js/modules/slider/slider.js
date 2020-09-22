export default class Slider {
    constructor({
        container = null, 
        btns = null, 
        next = null, 
        prev = null,
        nextPageLink = null,
        prevPageLink = null,
        activeClass = '',
        animate,
        autoPlay} = {}) {
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch (e) {}
        this.btns = document.querySelectorAll(btns);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.nextPageLink = document.querySelectorAll(nextPageLink);
        this.prevPageLink = document.querySelectorAll(prevPageLink);
        this.activeClass = activeClass,
        this.animate = animate,
        this.autoPlay = autoPlay,
        this.slideIndex = 1;
    }
};