class Rotator {
    constructor(element) {
        this.rotator = element;
        this.cases = this.rotator.querySelectorAll('.rotator__case');
        this.currentIndex = 0;
        this.intervalId = null;

        this.speed = parseInt(this.cases[0].getAttribute('data-speed')) || 1000;

        this.applyColor();

        this.start();
    }

    applyColor() {
        const activeCase = this.rotator.querySelector('.rotator__case_active');
        if (activeCase) {
            const color = activeCase.getAttribute('data-color');
            if (color) {
                activeCase.style.color = color;
            }
        }
    }

    next() {
        const currentCase = this.rotator.querySelector('.rotator__case_active');
        if (currentCase) {
            currentCase.classList.remove('rotator__case_active');
        }

        this.currentIndex = (this.currentIndex + 1) % this.cases.length;

        const nextCase = this.cases[this.currentIndex];
        nextCase.classList.add('rotator__case_active');

        this.applyColor();

        const newSpeed = parseInt(nextCase.getAttribute('data-speed')) || 1000;
        if (newSpeed !== this.speed) {
            this.speed = newSpeed;
            this.restart();
        }
    }

    start() {
        if (this.intervalId) return;
        this.intervalId = setInterval(() => this.next(), this.speed);
    }

    restart() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.start();
        }
    }

    stop() {
        if (this.IntervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotatorElement => {
    new Rotator(rotatorElement);
});