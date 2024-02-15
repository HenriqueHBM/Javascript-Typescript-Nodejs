let Tenis = {
    tamanho: 45,
    estoque: true,
};

//Delete
delete Tenis.estoque;
console.log(Tenis);

// Create 
Tenis.estoque = true;
console.log(Tenis);