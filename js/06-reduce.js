const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//     console.log('number', number);
//     console.log('acc', acc);

//     return acc + number;
// }, 0);
// console.log(total);




const salary = {
    mango: 100,
    poly: 50, 
    ajax: 150,
}

// console.log(Object.values(salary));

// const totalSalary = Object.values(salary).reduce((total, value) => {
//     return total += value;
// })

const totalSalary = Object.values(salary).reduce(
    (total, value) => total += value,
    0,
);

// console.log(totalSalary);








const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


const totalTitimePlayed = players.reduce(
    (totalTime, { timePlayed }) => totalTime + timePlayed,
    0,
);
// console.log(totalTitimePlayed);




// считаем общую сумму товаров в корзине

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];


const totalAmount = cart.reduce(
    // (total, item) => total + item.price * item.quantity, 0,);
    (total, {price, quantity}) => total + price * quantity, 0,);
console.log(totalAmount);