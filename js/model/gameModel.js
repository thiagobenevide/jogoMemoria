export class GameModel{
    grid
    targetDate
    player
    exitButton
    playGame
    characters
    time
    firstCard
    secondCard
    constructor(){
        this.grid =  document.querySelector('.grid')
        this.targetDate = new Date()
        this.targetDate.setMinutes(this.targetDate.getMinutes() + 3)
        
        this.player = document.querySelector('.player')
        this.timer = document.querySelector('.timer')
        this.exitButton = document.querySelector('.exit')
        this.playGame = localStorage.getItem('player')
        this.time = document.querySelector('.timer')
        this.characters = [
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

        this.firstCard = ''
        this.secondCard = ''
        

            
    }

    createElement(tag, cla){
        var element = document.createElement(tag)
        element.className = cla
        element.classList.add('img')
        return element
    }

    createCard(character){
        var card = this.createElement('div', 'card')
        var front = this.createElement('div', 'face front')
        var back = this.createElement('div', 'face back')

        front.style.backgroundImage = `url('../../image/characters/${character}.png'`

        card.appendChild(front)
        card.appendChild(back)
        card.addEventListener('click', this.revealCard)
        card.setAttribute('data-character', character)
        return card
    }

//Carrega os elementos na página
    loadGame(){
        const duplicateCharacters = [...this.characters, ...this.characters]
        var shuffledArray = []
        duplicateCharacters.forEach(
            (character)=>{ 
                const card = this.createCard(character)
                shuffledArray.push(card)

            }
        )
        var shuffledArray = shuffledArray.sort(()=> Math.random()-0.5)
        shuffledArray.forEach(
            (character)=>{ 
                this.grid.appendChild(character)
            }
        )
}


//Validação das cartas


    revealCard = ({target}) =>{
        if(target.parentNode.className.includes('reveal-card')){
            return
        }
        if(this.firstCard===''){
            target.parentNode.classList.add('reveal-card')
            this.firstCard = target.parentNode
        }else if(this.secondCard === ''){
            target.parentNode.classList.add('reveal-card')
            this.secondCard = target.parentNode
            this.checkCards()
        }

    }


    checkCards = ()=>{
        const firstCharacter = this.firstCard.getAttribute('data-character')
        const secondCharacter = this.secondCard.getAttribute('data-character')

        if(firstCharacter===secondCharacter){
            this.firstCard.firstChild.classList.add('disabled-card')
            this.secondCard.firstChild.classList.add('disabled-card')

            this.firstCard = ''
            this.secondCard = ''
            this.endGame()
        }else{
            setTimeout(()=>{
                this.firstCard.classList.remove('reveal-card')
                this.secondCard.classList.remove('reveal-card')
                this.firstCard = ''
                this.secondCard = ''
            },800)

        }
    }

    endGame = () =>{
        const disabledCads = document.querySelectorAll('.disabled-card')
        if(disabledCads.length === 18){
            window.location.href = '../../pages/youWin.html'
        }
    }

    exit = ()=>{
        this.exitButton.addEventListener('click',()=>{
            window.location.href = '../../index.html'
        })
    }


    startTimer = ()=>{
        const now  = new Date()
        const timeDiference = this.targetDate - now
        
        if(timeDiference > 0){
            const minutes = Math.floor(timeDiference/(1000*60))
            const seconds = Math.floor((timeDiference % (1000*60))/1000)
            this.timer.innerHTML = `${minutes}:${seconds}` 
        }else if(timeDiference < 1){
            window.location.href = '/pages/youLoser.html'
        }
    }

    load(){
        this.player.innerHTML = this.playGame
        //startTimer()
        this.loadGame()
        this.exit()
        this.startTimer()
        const interval = setInterval(this.startTimer, 1000)

    }

}