export class Game{
    _grid
    _spanPlayer
    _timer

    constructor(){
        this._grid = document.querySelector('.grid');
        this._spanPlayer = document.querySelector('.player');
        this._timer = document.querySelector('.timer');
    }
}