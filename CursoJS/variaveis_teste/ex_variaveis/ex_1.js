// Exercicio 1 

/*
   Calculo IMC basico + a data de nascimento da pessoa.
*/ 

const nome = 'Raul Mascarenhas';
const sobrenome = 'Souza';
const idade = 19;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

// 3 maneiras de fazer, a segunda é a melhor e mais moderna. 
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(nome, "nasceu em", anoNascimento);