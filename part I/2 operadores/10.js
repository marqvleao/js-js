// Operador AND ->  &&

// Sabendo que o operador '&&' compara dois valores
// 'Em casos de comparação' retorna TRUE, desde que todos os valores sejem verdadeiros
// 'Em caso de atribuição' retorna o último valor verdadeiro, se os dois valores forem verdadeiros
// responda as perguntas abaixo antes de executar o código

let num = 0
let n = 1
let minhaVariavel
let arr = {}
let nome = 'Bill'
let sobrenome ='Gates'
let str = ''

if(false && minhaVariavel) n++
console.log(n)
// o valor de N será incrementado?
// R:

if(arr && nome) n++
console.log(n)
// o valor de N será incrementado?
// R:

if(nome && sobrenome) nome = nome + sobrenome
console.log(nome)
// Qual será o valor de nome 
// R:

minhaVariavel = arr && nome
console.log(minhaVariavel)
// Qual será o valor de minhaVariavel
// R: