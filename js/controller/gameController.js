const grid = document.querySelector('.grid')
let player = document.querySelector('.player')
let timer = document.querySelector('.timer')
const characters = [
'character01',
'character02',
'character03',
'character04',
'character05',
'character06',
'character07',
'character08',
'character09',
]

function createElement(tag, cla){
    var element = document.createElement(tag)
    element.className = cla
    return element
}

function createCard(character){
    var card = createElement('div', 'card')
    var front = createElement('div', 'face front')
    var back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../../image/characters/${character}.png'`

    card.appendChild(front)
    card.appendChild(back)
    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)
    return card
}

function loadGame(){
    const duplicateCharacters = [...characters, ...characters]
    var shuffledArray = []
    duplicateCharacters.forEach(
        (character)=>{ 
            const card = createCard(character)
            shuffledArray.push(card)

        }
    )
    var shuffledArray = shuffledArray.sort(()=> Math.random()-0.5)
    shuffledArray.forEach(
        (character)=>{ 
            grid.appendChild(character)
        }
    )
}

let firstCard=''
let secondCard=''

const revealCard = ({target}) =>{
    if(target.parentNode.className.includes('reveal-card')){
        return
    }
    if(firstCard===''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    }else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode
        checkCards()
    }

}


const checkCards = ()=>{
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')
    if(firstCharacter===secondCharacter){
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        firstCard = ''
        secondCard = ''
        endGame()
    }else{
        setTimeout(()=>{
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
            firstCard = ''
            secondCard = ''
        },800)

        
    }
}

const endGame = () =>{
    const disabledCads = document.querySelectorAll('.disabled-card')
    if(disabledCads.length === 18){
        window.location.href = '../../pages/fimDeJogo.html'
    }
}

const startTimer = ()=>{
    setInterval(() => {
        let currentTime =Number(timer.innerHTML) 
        timer.innerHTML= currentTime + 1
    },1000)
}

window.onload = () =>{
    let playGame = localStorage.getItem('player')
    player.innerHTML = playGame
    startTimer()
    loadGame()
}
