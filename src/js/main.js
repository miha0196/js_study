import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';
import Accordion from './modules/accordion';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({container: '.page', btns: '.next'});
    mainSlider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: 'a.next', prevPageLink: 'div.prev', nextPageLink: 'div.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const moduleSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules .slick-next',
        prev: '.modules .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    moduleSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed .slick-next',
        prev: '.feed .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();    

    const difference = new Difference({
        oldOfficer: '.officerold',
        newOfficer: '.officernew',
        items: '.officer__card-item'
    });
    difference.init();

    new Form('.form').init();

    new Accordion('.module__info-show', '.msg').init();

    new Download('.download').init();
});