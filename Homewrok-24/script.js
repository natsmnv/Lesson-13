// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).


// Можна додати добавки:

// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).

// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

// Приклад роботи коду:

// // маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());

// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());

// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());



class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    static SIZE_SMALL = 'SIZE_SMALL';
    static SIZE_BIG = 'SIZE_BIG';
    static STUFFING_CHEESE = 'STUFFING_CHEESE';
    static STUFFING_SALAD = 'STUFFING_SALAD';
    static STUFFING_POTATO = 'STUFFING_POTATO';
    static TOPPING_SAUCE = 'TOPPING_SAUCE';
    static TOPPING_MAYO = 'TOPPING_MAYO';
    price = 0;
    price_topping = 0;
    calories = 0;
    calories_topping = 0;

    addTopping (topping) {
        if (topping === Hamburger.TOPPING_SAUCE) {
            this.price_topping += 15;
            this.calories_topping += 0;
        } else if (topping === Hamburger.TOPPING_MAYO) {
            this.price_topping += 20;
            this.calories_topping += 5;
        } else {
            console.log(`Something went wrong...`);
        }
    }

    calculatePrice() {
        this.price = 0;
        if (this.size === Hamburger.SIZE_SMALL) {
            this.price += 50;
            this.price += this.price_topping;

            if (this.stuffing === Hamburger.STUFFING_CHEESE) {
                this.price += 10;
            } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
                this.price += 20;
            } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
                this.price += 15;
            } else {
                return `Something went wrong...`;
            }
        } else if (this.size === Hamburger.SIZE_BIG) {
            this.price += 100;
            this.price += this.price_topping;

            if (this.stuffing === Hamburger.STUFFING_CHEESE) {
                this.price += 10;
            } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
                this.price += 20;
            } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
                this.price += 15;
            } else {
                return `Something went wrong...`;
            }
        } else {
            return `Something went wrong...`;
        }
        return this.price;
    }

    calculate() {
        this.calories = 0;
        if (this.size === Hamburger.SIZE_SMALL) {
            this.calories += 20;
            this.calories += this.calories_topping;
            
            if (this.stuffing === Hamburger.STUFFING_CHEESE) {
                this.calories += 20;
            } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
                this.calories += 5;
            } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
                this.calories += 10;
            } else {
                return `Something went wrong...`;
            }
        } else if (this.size === Hamburger.SIZE_BIG) {
            this.calories += 40;
            this.calories += this.calories_topping;

            if (this.stuffing === Hamburger.STUFFING_CHEESE) {
                this.calories += 20;
            } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
                this.calories += 5;
            } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
                this.calories += 10;
            } else {
                return `Something went wrong...`;
            }
        } else {
            return `Something went wrong...`;
        }
        return this.calories;
    }
}

let burger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
burger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(`Price of hamburger (size small, stuffing cheese and topping sauce): ${burger.calculatePrice()}`);
console.log(`Calories of hamburger (size small, stuffing cheese and topping sauce): ${burger.calculate()}`);
burger.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Price of hamburger (size small, stuffing cheese, topping sauce and topping mayo): ${burger.calculatePrice()}`);
console.log(`Calories of hamburger (size small, stuffing cheese, topping sauce and topping mayo): ${burger.calculate()}`);