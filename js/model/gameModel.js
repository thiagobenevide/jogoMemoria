export class gameModel{
    _grid
    _characters
    _shuffledArray = []

    constructor(){
        this._grid = document.getElementsByClassName('grid')
        //var grid = document.querySelector('grid')
        this._characters = [
            'character01',
            'character02',
            'character03',
            'character04',
            'character05',
            'character06',
            'character07',
            'character08',
            'character09',
            'character10',
        ]
    }

    createElement(tag, cla){
        var element = document.createElement(tag)
        element.className = cla
        return element
    }

    createCard(character){
        var card = this.createElement('div', 'card')
        var front = this.createElement('div', 'face front')
        var back = this.createElement('div', 'face back')

        //front.style.backgroundImage = `url('../../image/${character}.png'`

        card.appendChild(front)
        card.appendChild(back)
        return card
    }

    loadGame(){
        var duplicateCharacters = [...this._characters, ...this._characters]
        this._shuffledArray = duplicateCharacters.sort(()=> Math.random()-0.5)
        this._shuffledArray.forEach(
            (character)=>{
                var card = this.createCard(character)
                this._grid.item.toString
                

                
                
            }
        )
    }



}