// == compração implicita

const numero = 5;
const texto = "5";

console.log(numero === texto)
// == só compara o valor
// === compara o valor e o tipo de dado

//typeof = mostra o tipo do valor armazenado no dado
console.log(typeof numero)
console.log(typeof texto)


// conversão explicita
Number()
String()

/*
A lista de operadores é extensa e há muitas formas de utilizá-las. Além
das operações matemáticas básicas, do = para atribuição de valor em uma variável e das comparações com == e ===,
utilizamos operadores para diversas outras tarefas de códgios, por exemplos:

||: Operador "ou", retorna true caso uma condiçção seja válida.
&&: Operador "e", retorna true somente se todas as condições forem válidas.
!= e !==: Operadores "não igual"e "estritamente não igual", utilizados para comparação, da mesma forma que == e === retornam
true ou false.
*/