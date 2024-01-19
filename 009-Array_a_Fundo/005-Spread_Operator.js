const num = [1, 2, 3, 4, 5, 6];

console.log((num));
//deixa de ser um array
console.log(...num);

//utilidade em calculos
console.log(Math.max(...num)); //6
console.log(Math.max(num)); //NaN