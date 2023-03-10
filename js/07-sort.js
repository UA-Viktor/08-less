const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('numbers', numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);


const descSortNumbers = [...numbers].sort((a, b) => b - a);
const ascSortNumbers = [...numbers].sort((a, b) => a - b);

console.log('numbers', numbers);
console.log('descSortNumbers', descSortNumbers);
console.log('ascSortNumbers', ascSortNumbers);






const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];


const sortByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
    return nextPlayer.timePlayed - prevPlayer.timePlayed;
});

console.table(sortByBestPlayers);

console.log('abc'.charCodeAt());;