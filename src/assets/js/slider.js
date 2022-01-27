export default class Slider {
    constructor({
        slider = ".slider",
        sliderLines = ".slider__lines",
        sliderItem = ".slider__item",
        duration = 400,
        direction = "x",
        active = 0,
        buttons = true,
        pagination = false,
        autoplay = false,
        autoplayTime = 5000
    }) {
        this.slider =
            typeof slider == "string" ? document.querySelector(slider) : slider;
        this.sliderLines =
            typeof sliderLines == "string"
                ? this.slider.querySelector(sliderLines)
                : sliderLines;
        this.sliderItems =
            typeof sliderItem == "string"
                ? [...this.slider.querySelectorAll(sliderItem)]
                : sliderItem;
        this.duration = duration;
        this.direction = direction.toUpperCase();
        this.active = active;
        this.buttons = buttons;
        this.pagination = pagination
        this.posX1 = 0;
        this.posX2 = 0;
        this.posInit = 0;
        this.sliderTrueWidth = this.slider.querySelector('.slider__true-width');
        this.autoplay = autoplay;
        this.autoplayTime = autoplayTime;
        this.interval;
        if (this.buttons) {
            this.prev = this.slider.querySelector(".slider__prev");
            this.next = this.slider.querySelector(".slider__next");
            this.prev.addEventListener("click", () => this.movePrevious());
            this.next.addEventListener("click", () => this.moveNext());
        }
        if(this.pagination){
            this.navigation = this.slider.querySelector('.slider__pagination');
            for (let i = 0; i < this.sliderItems.length; i++) {
                let li = document.createElement('li');
                this.navigation.append(li);
            }
            this.bullets = [...this.navigation.children];
            this.bullets.forEach(item => {
                item.addEventListener('click', (e) => this.bulletsClick(e))
            })
        }
        this.basicStyles();
        window.addEventListener('resize', () => {
            this.basicStyles()
            console.dir(this.sliderLines);
        })
        this.setClass();
        this.slider.addEventListener('touchstart',this.touchStart)
        this.slider.addEventListener('mousedown', this.touchStart)
    }
    basicStyles() {
        this.slider.style.overflow = "hidden";
        this.sliderLines.style.overflow = "hidden";
        this.sliderLines.style.display = "flex";
        this.sliderLines.style.transition = `${this.duration}ms`;
        this.sliderItems.forEach((item, i) => {
            item.style.width = this.sliderTrueWidth.clientWidth + "px";
            // item.style.left = this.sliderTrueWidth.clientWidth* i + "px";
        });
        let commonWidth = this.sliderItems.reduce((acc, item) => acc + item.clientWidth, 0);
        this.sliderLines.style.width = commonWidth + "px";
        this.sliderPosition()
    }
    movePrevious() {
        this.disableButtons();
        this.sliderLines.style.transition = `${this.duration}ms`;
        if (this.active > 0) this.active--;
        this.setClass();
        let limit = this.sliderItems[this.active].clientWidth * this.active;
        this.sliderLines.style.transform = `translate${this.direction}(${-limit}px)`;
    }
    moveNext() {
        this.sliderLines.style.transition = `${this.duration}ms`;
        this.disableButtons();
        if (this.active < this.sliderItems.length-1) this.active++;
        let limit = this.sliderItems[this.active].clientWidth * this.active;
        this.sliderLines.style.transform = `translate${this.direction}(-${limit}px)`;
        this.setClass();
    }
    setClass() {
        this.sliderItems.forEach((item, i) => {
            item.classList.remove("active");
            item.classList.remove("prev");
            item.classList.remove("next");
            if(this.pagination) {
                this.bullets[i].classList.remove('active');
            }
        });
        this.sliderItems[this.active].classList.add("active");
        if(this.pagination) this.bullets[this.active].classList.add('active');
        if (this.sliderItems[this.active].nextElementSibling) this.sliderItems[this.active].nextElementSibling.classList.add("next");
        else this.sliderItems[0].classList.add("next");
        if (this.sliderItems[this.active].previousElementSibling) this.sliderItems[this.active].previousElementSibling.classList.add("prev");
        else this.sliderItems[this.sliderItems.length - 1].classList.add("prev");
    }
    disableButtons() {
        this.prev.disabled = true;
        this.next.disabled = true;
        setTimeout(() => {
            this.prev.disabled = false;
            this.next.disabled = false;
        }, this.duration);
    }
    bulletsClick(e) {
        this.sliderLines.style.transition = `${this.duration}ms`;
        let index = this.bullets.indexOf(e.target);
        this.active = index;
        this.setClass();
        let limit = this.sliderItems[this.active].clientWidth * this.active;
        this.sliderLines.style.transform = `translate${this.direction}(-${limit}px)`;
    }
    touchStart = (e) => {
        if(e.type == 'touchstart') this.posX1 = this.direction == 'X' ? e.touches[0].clientX : e.touches[0].clientY;
        else this.posX1 = this.direction == 'X' ? e.clientX : e.clientY;
        document.addEventListener('touchmove',this.touchMove)
        document.addEventListener('mousemove',this.touchMove)
        document.addEventListener('touchend', this.touchEnd)
        document.addEventListener('mouseup', this.touchEnd)
        // document.addEventListener('touchcancel', (e) => this.touchCancel(e))
    }
    touchMove = (e) => {
        if(e.type == 'touchmove') this.posX2 = this.direction == 'X' ? e.changedTouches[0].clientX : e.changedTouches[0].clientY;
        else this.posX2 = this.direction == 'X' ? e.clientX : e.clientY;
        this.posInit = this.posX2 - this.posX1;
        let activeSlider = this.sliderItems.indexOf(this.sliderItems[this.active]);
        let activeSliderWidth = this.sliderItems[activeSlider].clientWidth * activeSlider
        this.sliderLines.style.transform = `translate${this.direction}(${-activeSliderWidth+ this.posInit}px)`;
    }
    touchEnd = (e) => {
        if(this.posInit > 150){
            this.movePrevious();
        }
        else if(this.posInit < -150) {
            this.moveNext()
        }
        else{
            this.sliderPosition(this.duration)
        }
        this.posX1 = 0;
        this.posX2 = 0;
        this.posInit = 0;
        document.removeEventListener('touchmove', this.touchMove, {passive: true})
        document.removeEventListener('mousemove', this.touchMove, {passive: true})
        document.removeEventListener('touchend', this.touchEnd, {passive: true})
        document.removeEventListener('mouseup', this.touchEnd, {passive: true})
    }
    sliderPosition(time = 0){
        this.sliderLines.style.transition = `${time}ms`;
        let activeSlider = this.sliderItems.indexOf(this.sliderItems[this.active]);
        let activeSliderWidth = this.sliderItems[activeSlider].clientWidth * activeSlider;
        this.sliderLines.style.transform = `translate${this.direction}(${-activeSliderWidth}px)`;
    }
    autoplaying(){
        this.interval = setInterval(() => {
            this.moveNext()
        }, this.autoplayTime + this.duration);
    }
    // touchCancel(e) {
    //     console.log(e.type);
    // }
}


