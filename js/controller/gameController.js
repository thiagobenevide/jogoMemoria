const grid = document.querySelector('.grid')
const targetDate = new Date()
targetDate.setMinutes(targetDate.getMinutes() + 1)
let player = document.querySelector('.player')
let timer = document.querySelector('.timer')
let exitButton = document.querySelector('.exit')
let playGame = localStorage.getItem('player')


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

//Carrega os elementos na página
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


//Validação das cartas
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
        window.location.href = '../../pages/youWin.html'
    }
}

const exit = ()=>{
    exitButton.addEventListener('click',()=>{
        window.location.href = '../../index.html'
    })
}

//Define o tempo do jogo
const startTimer = ()=>{
    //    setInterval(() => {
    //        let currentTime =Number(timer.innerHTML) 
    //        timer.innerHTML= currentTime + 1
    //    },1000)
        const now  = new Date()
        const timeDiference = targetDate - now
        
        if(timeDiference > 0){
            const minutes = Math.floor(timeDiference/(1000*60))
            const seconds = Math.floor((timeDiference % (1000*60))/1000)
            timer.innerHTML = `${minutes}:${seconds}` 
        }else if(timeDiference < 1){
            window.location.href = '/pages/youLoser.html'
        }
    }


window.onload = () =>{
    player.innerHTML = playGame
    //startTimer()
    loadGame()
    exit()
    startTimer()
    const interval = setInterval(startTimer, 1000)
}
