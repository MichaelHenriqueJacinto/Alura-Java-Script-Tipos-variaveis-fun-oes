// declaração de função

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param")

//expressão de função

// const soma = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(soma(1, 1))

// diferença principal: HOISTING
/*
HOISTING = permite que você execute funções antes das suas declarações. 
Na prática, inicialmente as declarações de funções são colocadas na memória durante
a fase de compilação e, mesmo assim, permanecem no mesmo lugar que estão digitadas.
*/
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar())
function apresentar() {
    return "olá"
}

console.log(soma(1, 1))
const soma = function(num1, num2) {
    return num1 + num2;
}