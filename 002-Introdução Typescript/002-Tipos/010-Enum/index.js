var EMes;
(function (EMes) {
    EMes["JAN"] = "Janeiro";
    EMes["FEV"] = "Fevereiro";
    EMes["MAR"] = "Mar\u00E7o";
    EMes["AGO"] = "Agosto";
})(EMes || (EMes = {}));
;
console.log(EMes.FEV);
var pessoa = {
    nome: 'Henrique',
    mesAniversario: EMes.AGO
};
if (pessoa.mesAniversario === EMes.AGO) {
    console.log(pessoa);
}
