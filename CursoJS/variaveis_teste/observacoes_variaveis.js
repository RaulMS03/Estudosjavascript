// Essas observações servem para const e let.


// Observação 1

/* Não podemos criar variáveis com palavras reservadas.
*  Exemplo: 
   let let; let console; let if;
   O sistema reconhece como erro.
*/

// Observação 2

/* Variáveis devem ter nomes significativos e se possivel letras minúsculas.
*  Comparações: 
   sem significancia "let n = 'João'"
   com significancia "let nome = 'João'"
   Deixar o codigo mais significativo possivel.
*/

// Observação 3

/* Não se pode começar o nome de uma variável com um número
*  Exemplo:
   let 1nome; let 1;
   O sistema reconhece como erro.
*/

// Observação 4

/* Não pode conter espaços ou traços.
*  Exemplo:
   let nome-Cliente; let nome Cliente; (Não funciona.)
*  Se for necessario usar nomes compostos utilize camelCase:
   let nomeCliente; let nomeCompleto;
   Cada palavra apos a primeira deve iniciar em maiusculo.
*  Exemplo:
   let nomeCompletoDoCliente;
*/

// Observação 5

/* Case-sensetive, palavras minusculas e maiusculas fazem diferença.
*  Exemplo:
   let nomeCliente = 'Luiz';
   let nomecliente = 'Otávio'
   São variaveis diferentes por conta do Case-sensitive, mas as duas funcionam.
   Mesmo funcionando deve-se usar o camelCase.
*/

// Observação 6

/* Não podemos redeclarar variaveis com let
*  Exemplo:
   let nomeCliente;
   let nomeCliente; (não funciona)
   Caso queira repetir parametros do mesmo let, apenas passe em seguida do ultimo ja feito
*  Exemplo:
   let nomeCliente;
   nomeCliente = 'Luiz';
   console.log(nomeCliente);
   nomeCliente = 'Otávio';
   console.log(nomeCliente); (funciona)
*/

// Observação 7

/* NÃO UTILIZE VAR, UTILIZE LET OU CONST. */

// Observação 8

/* Não se pode alterar o valor de uma const.
*  Exemplo:
   const primeiroNumero = 10;
   const primeiroNumero = 2;
   Isso não funciona.
*/