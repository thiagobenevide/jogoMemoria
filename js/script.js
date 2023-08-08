const grid = document.querySelector('.grid')
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

    //front.style.backgroundImage = `url('../../image/${character}.png'`

    card.appendChild(front)
    card.appendChild(back)
    return card
}

function loadGame(){
    const duplicateCharacters = [...characters, ...characters]
    const shuffledArray = duplicateCharacters.sort(()=> Math.random()-0.5)
    shuffledArray.forEach(
        (character)=>{ 
            grid.appendChild(createCard(character))
        }
    )
}

loadGame()