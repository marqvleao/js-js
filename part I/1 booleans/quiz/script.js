const appContainerElem = document.querySelector('.app')
const quizContainerElem = document.querySelector('.quiz') 
const questTitleElem = document.querySelector('.title')

let userAnswers = []

const quest = [{
    title: 'Qual é o retorno da expressão: Boolean(123)',
    questions: [{asnwer: 'True', isCorrect: 1122}, {asnwer: 'False', isCorrect: 1223}, {asnwer: 'Undefined', isCorrect: 1678}],
    correct: 1122
},{
    title: 'Qual será o valor booleano da seguinte variável: \nlet minhaVariavel',
    questions: [{asnwer: 'True', isCorrect: 112332}, {asnwer: 'False', isCorrect: 3222}, {asnwer: 'Undefined', isCorrect: 1122}],
    correct: 1122
},{
    title: 'Qual será o valor de Boolean(!false)',
    questions: [{asnwer: 'True', isCorrect: 1122}, {asnwer: 'False', isCorrect: 1423}],
    correct: 1122
},{
    title: 'Selecione a responta com o valor booleano de: NaN',
    questions: [{asnwer: 'True', isCorrect: 112332}, {asnwer: 'False', isCorrect: 1122}, {asnwer: 'Undefined', isCorrect: 4546}],
    correct: 1122
},{
    title: 'Selecione a responta com o valor booleano de:\n let string = \'texto\'',
    questions: [{asnwer: 'True', isCorrect: 1122}, {asnwer: 'False', isCorrect: 5566}, {asnwer: 'Undefined', isCorrect: 4546}],
    correct: 1122
},]

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