// Teste

// Constantes devem ser declaradas e inicializadas direto.
const nome = 'João';
console.log(nome);

/* Não se pode fazer atribuição a constantes. Exemplo:
   const nome;
   nome = 'João'; (Não funciona).
*/

// Teste 2

// importante evoluir o valor da variavel ao inves de redeclarar.
// String = Text | Number = numero.
const primeiroNumero = 5; // Const 1.
const segundoNumero = 10; // Const 2.
const resultado = primeiroNumero * segundoNumero; // Multiplicação da const 1 com const 2
const resultadoDuplicado = resultado * 2; // Multiplicação por 2 do resultado acima. 
// É possivel usar const e let junto.
let resultadoTriplicado = resultado * 3; // resultado da const passando pelo let e multiplicando por 3.
resultadoTriplicado = resultadoTriplicado + 5; // resultadoTriplicado somado com 5.
console.log(resultadoTriplicado); // teste para ver se deu tudo certo.

console.log(typeof primeiroNumero); // mostra no console o tipo da variavel(no caso essa é um number).
console.log(typeof nome); // mostra no console o tipo da variavel(no caso essa é uma String).