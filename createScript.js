const fs = require('fs')

let i = 1
const qtd = 5

while(i<=qtd){
    fs.writeFile(__dirname+`/${i}.js`,'', err => {
        if(err) return console.error(err)
    })
    console.log('Arquivo Criado: ',i)
    i++
}