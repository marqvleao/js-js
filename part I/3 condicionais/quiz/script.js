const appContainerElem = document.querySelector('.app')
const quizContainerElem = document.querySelector('.quiz') 
const questTitleElem = document.querySelector('.title')

let userAnswers = []

const quest = [{
    title: 'O  método \'console.log\' será executado?\n let n=5\nif(!n) console.log(n)',
    questions: [{asnwer: 'Sim', isCorrect: 3344}, {asnwer: 'Não', isCorrect: 1122}],
    correct: 1122
},{
    title: 'O valor de \'i\' será incrementado?\nlet i=1\nif(i) i++',
    questions: [{asnwer: 'Sim', isCorrect: 1122}, {asnwer: 'Não', isCorrect: 4343}],
    correct: 1122
},{
    title: 'O  método \'console.log\' será executado?\n let nome=\'Reacher\'\nif(nome) console.log(nome)',
    questions: [{asnwer: 'Sim', isCorrect: 1122}, {asnwer: 'Não', isCorrect: 4343}],
    correct: 1122
},{
    title: '\'No trecho a seguir, Else será executado?\nlet i=5\nif(i || 5) {console.log(i)\n}Else i++',
    questions: [{asnwer: 'Sim', isCorrect: 3535}, {asnwer: 'Não', isCorrect: 1122}],
    correct: 1122
},{
    title: 'Qual será o valor atribuído a variável \'test\':\nlet nome = \'Arlindo\'\nlet test = (nome) ? \'ui\' : \'ai\'',
    questions: [{asnwer: 'ui', isCorrect: 1122}, {asnwer: 'ai', isCorrect: 3234}, {asnwer: 'ocorrerá um erro', isCorrect: 6789}],
    correct: 1122
},{
    title: 'Qual será o valor atribuído a variável \'idoso\':\nlet idade = 59\nlet idoso = (idade>60) ? \'idoso\' : \'jovem\'',
    questions: [{asnwer: 'idoso', isCorrect: 3456}, {asnwer: 'jovem', isCorrect: 1122}, {asnwer: 'ocorrerá um erro', isCorrect: 6789}],
    correct: 1122
}]

runApp()

function runApp(){
    let fase = 0

    genQuestion(fase)
    nextQuestion(fase)
}

function genQuestion(fase){
    let list = []

    questTitleElem.innerText = quest[fase].title
    
    quest[fase].questions.forEach((questions, i) => {
        let LineContainerElem = document.createElement('div')
        let labelIndexElem =  document.createElement('div')
        let labelElem = document.createElement('div')
        
        LineContainerElem.classList.add('line')
        labelIndexElem.classList.add('labelIndex')
        labelElem.classList.add('label')

        labelIndexElem.innerText = i+1
        labelElem.innerText = questions.asnwer
        
        LineContainerElem.dataset.data = questions.isCorrect
        
        LineContainerElem.append(labelIndexElem)
        LineContainerElem.append(labelElem)

        list.push(LineContainerElem)
    })
    
    list.forEach(item => quizContainerElem.append(item))

    selectAnswer()
}

function selectAnswer(){
    const line = document.querySelectorAll('.line')
    
    const removeSelected = () => line.forEach(line => line.classList.remove('label-selected'))

    line.forEach((line, i) => line.addEventListener('click', () => {
        removeSelected()
        line.classList.add('label-selected')
    }))

}

function nextQuestion(fase){
    const btn = document.querySelector('.btn')

    btn.addEventListener('click', () => {
        if(fase === quest.length -1 && checkAnswer()){
            clearQuiz()
            checkFinalResult()
        }else if(checkAnswer(fase)){
            clearQuiz()
            fase++
            genQuestion(fase)
        }else return alert('Answer not selected')

    })
}

function clearQuiz(){
    const line = document.querySelectorAll('.line')
    line.forEach(line => line.remove())
}

function checkAnswer(){
    const line = document.querySelectorAll('.line')
    const lineSelected = document.querySelector('.label-selected')

    if(lineSelected && lineSelected.dataset.data == '1122') {
        console.log('acertou')
    }else console.log('errou')

    if(lineSelected) {
        userAnswers.push(lineSelected.dataset.data)
        return true
    }
    return false
}

function checkFinalResult(){
    let result

    for(i in quest){
        if(quest[i].correct == userAnswers[i]){ 
            result = true 
        }else{ 
            result = false
            return genResult(result)
         }  
    }
    return genResult(result)
}

function genResult(result){
    let app = document.querySelector('.app')
    let title = document.querySelector('.title')
    let quiz = document.querySelector('.quiz')
    let btn = document.querySelector('.btn')

    let btnReload = document.createElement('btn')
    let p = document.createElement('p')
    
    title.innerText = 'Quiz Finalizado'
    app.style.alignItems = 'center'
    app.style.justifyContent = 'center'
    btn.remove()
    
    btnReload.classList.add('btn-reload')
    btnReload.addEventListener('click', () => location.reload())
    btnReload.innerText = 'Tente Novamente'
    p.classList.add('p') 
    
    btn.addEventListener('click', () => location.reload())
    if(result){
        p.innerText = 'Parabéns, você passou!'
        quiz.append(p)
    }else{
        quiz.remove()
        p.innerText = 'Você falhou, que peninha.'
        app.append(p)
        app.append(btnReload)
    }
}