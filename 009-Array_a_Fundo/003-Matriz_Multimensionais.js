const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
];

console.table(array)
console.log(array[2][1]);
console.log(array[3][1][2]);