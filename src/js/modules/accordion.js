export default class Accordion {
    constructor(trigger, content) {
        this.trigger = document.querySelector(trigger);
        this.content = document.querySelector(content);
    }

    init() {
        try {
            this.trigger.addEventListener('click', () => {

                this.content.classList.toggle('msg');
                this.content.style.marginTop = '20px';
            });
        } catch (e) {}
    }
}