export default class ScrollNav {
    constructor({elem, top}){
        this.nav = typeof elem == 'string' ? document.querySelector(elem) : elem;
        this.top = top;
        this.nav.style.position = 'fixed';
        this.nav.style.top = `${this.top}px`;
        this.nav.style.zIndex = '100';
        this.scrollNav();
        window.addEventListener('scroll', this.scrollNav);
        window.addEventListener('resize', this.scrollNav);
    }
    scrollNav = () => {
        if(window.innerWidth <= 730) {
            this.nav.style.top = '0px';
        }
        else if(window.scrollY < this.top) {
            this.nav.style.top = `${this.top - window.scrollY}px`;
        }
        else this.nav.style.top = '0px';
    }
}