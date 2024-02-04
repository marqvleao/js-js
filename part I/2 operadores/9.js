// Operador OR ->  ||

// Sabendo que o operador '||' compara dois valores
// 'Em casos de comparação' retorna TRUE, desde que pelo menos um dos valores seje verdadeiro
// 'Em caso de atribuição' retorna o primeiro valor verdadeiro
// responda as perguntas abaixo antes de executar o código

let teste
let save
let arr = [1]
let obj = {}
let n = 5


teste = false || teste
console.log(teste)
// Qual será o valor atribuído a variável 'teste'
// R:

teste = false || {}
console.log(teste)
// Qual será o valor atribuído a variável 'teste'
// R:

teste = n || false
console.log(teste)
// Qual será o valor atribuído a variável 'teste'
// R:

teste = n || true
console.log(teste)
// Qual será o valor atribuído a variável 'teste'
// R:

if(false || n) n++
console.log(n)
// O valor de N será incrementado?
// R:

if(false || save) n++
console.log(n)
// O valor de N será incrementado?
// R:

