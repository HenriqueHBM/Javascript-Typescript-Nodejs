const val = 7;

for (let index = 0; index <= 10; index++) {
    console.log(val + " x " + index + " = " + (val * index));
    // template literals `${}` puxar variavel dentro de uma string
    console.log(`${val} x ${index} = ${val * index}`);
}