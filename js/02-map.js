// const numbers = [5, 10, 15, 20, 25];

// const doudble = numbers.map(function (number) {
//     console.log(number);
//     return number += 10;
// });




const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.table(players);

// const playersName = players.map(player => {
//     return player.name;
//  });
// console.log('playersName', playersName);



// const updatePlayers = players.map(player => {
//     return {
//         ...player,
//         points: player.points * 1.1,
//     };
// });
// console.table(updatePlayers);
                // OR
// const updatePlayers = players.map(player => ({
//         ...player,
//         points: player.points * 1.1,
//     }));
// console.table(updatePlayers);

 
const playerIdToUpdate = 'player-3';

// const updatePlayers = players.map(player => {
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         };
//     }
//     return player;
// });
                // OR
// const updatePlayers = players.map(player => {
//     return playerIdToUpdate === player.id
//         ? {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         } : player
// });
                // OR
const updatePlayers = players.map(player =>
    playerIdToUpdate === player.id
        ? { ...player, timePlayed: player.timePlayed + 100, }
        : player,
);

console.table(updatePlayers);