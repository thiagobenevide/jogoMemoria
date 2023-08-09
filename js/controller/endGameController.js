let tryAgainButton = document.querySelector('.tryAgain')
let menuButton = document.querySelector('.menu')

const tryAgain = () =>{
    tryAgainButton.addEventListener('click', ()=>{
        window.location.href = 'game.html'
    })
}
const menu = () => {
    menuButton.addEventListener('click', ()=>{
        window.location.href = '../index.html'
    })
}


window.onload = ()=>{
    let namePlayer = localStorage.getItem('player')
    const player = document.querySelector('.player')
    console.log(namePlayer)
    console.log(player)
    player.innerHTML = namePlayer
    tryAgain()
    menu()
}

