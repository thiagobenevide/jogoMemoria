export class EndGameModel{
    tryAgainButton    
    menuButton
    namePlayer
    player
    constructor(){
        this.tryAgainButton = document.querySelector('.tryAgain')
        this.menuButton = document.querySelector('.menu')
        this.namePlayer = localStorage.getItem('player')
        this.player = document.querySelector('.player')
    }


    tryAgain = () =>{
        this.tryAgainButton.addEventListener('click', ()=>{
            window.location.href = 'game.html'
    })}

    menu = () => {
        this.menuButton.addEventListener('click', ()=>{
            window.location.href = '../index.html'
    })}

    playerGame(){
        this.player.innerHTML = this.namePlayer
    }

}