export default class Difference {
    constructor({oldOfficer, newOfficer, items}) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        try {
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
        } catch (e) {}
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    bindTriggers(officer, items, counter) {
        officer.querySelector('.plus').addEventListener('click', () => {

            if (counter === 2) {
                items[items.length - 1].style.display = 'none';
            }
            items[counter].style.display = 'flex';
            counter++;
        });
    }

    hideItems(list) {
        list.forEach((item, i, arr) => {
            if (i  !== arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        } catch (e) {}
    }
}