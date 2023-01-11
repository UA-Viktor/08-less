
// Цепочки вызовов

const numbers = [1, 5, 2, 4, 3];

const greateThenTwo = numbers.filter(num => num > 2);
console.log(greateThenTwo);

const multiByThree = greateThenTwo.map(num => num * 3);
console.log(multiByThree);

const sorted = multiByThree.sort((a, b) => a - b);
console.log(sorted);

// Можно так записать
const sortedShot = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
console.log(sortedShot);



// Chaining в библеотеке jquerry
const element = {
    class: '',
    hoverd: false,
    changeClass(cls) {
        this.class = cls;
        return this;
    },
    toggleHovered() {
        this.hoverd = !this.hoverd;
        return this;
    }
};

element.toggleHovered().changeClass('open');
console.log(element);