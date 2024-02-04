let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let list = document.querySelector('.list')

loadApp()

function loadApp(){
    btn.addEventListener('click', addButton)
    input.addEventListener('keydown', addButton2)
}

function addButton(){
    let inputValue = input.value
    let div = document.createElement('div')
    let p = document.createElement('p')
    let removeBtn = document.createElement('button')
        
    if(!inputValue) return alert('item não informado')
    
    input.value = ''
    input.placeholder = ''

    div.classList.add('list-item-container')
    div.dataset.string = inputValue

    removeBtn.addEventListener('click', removeItemButton.bind(null, inputValue))
    
    removeBtn.innerText = 'X'
    p.innerText = inputValue

    div.append(p)
    div.append(removeBtn)
    list.append(div)
    console.log(inputValue)
}


function removeItemButton(data){
    let listItems = document.querySelectorAll('.list-item-container')
    listItems.forEach(listItem => {
        if(listItem.dataset.string === data) listItem.remove()
    })
}

