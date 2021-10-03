interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void //return type undefined
    unsubscribe: (observer: Observer) => void 
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor() {
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }
    
    subscribe (observer: Observer) {
        this.observers.push(observer)
    }

    unsubscribe (observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer
        })

        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;
    id: string;

    constructor(id: string) {
        this.el = document.querySelector(id);

    }
    
    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay("#price");
const display1 = new PriceDisplay("#price1");
const display2 = new PriceDisplay("#price2");
const display3 = new PriceDisplay("#price3");
const display4 = new PriceDisplay("#price4");

const sbutton = document.getElementById("sprice").addEventListener("click", () => {value.subscribe(display)});
const ubutton = document.getElementById("uprice").addEventListener("click", () => {value.unsubscribe(display)});
const sbutton1 = document.getElementById("sprice1").addEventListener("click", () => {value.subscribe(display1)});
const ubutton1 = document.getElementById("uprice1").addEventListener("click", () => {value.unsubscribe(display1)});
const sbutton2 = document.getElementById("sprice2").addEventListener("click", () => {value.subscribe(display2)});
const ubutton2 = document.getElementById("uprice2").addEventListener("click", () => {value.unsubscribe(display2)});
const sbutton3 = document.getElementById("sprice3").addEventListener("click", () => {value.subscribe(display3)});
const ubutton3 = document.getElementById("uprice3").addEventListener("click", () => {value.unsubscribe(display3)});
const sbutton4 = document.getElementById("sprice4").addEventListener("click", () => {value.subscribe(display4)});
const ubutton4 = document.getElementById("uprice4").addEventListener("click", () => {value.unsubscribe(display4)});