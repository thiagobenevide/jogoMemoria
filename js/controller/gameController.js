import { gameModel } from "../model/gameModel.js"

export class Game{
    _windowGame

    constructor(){
        this._windowGame = new gameModel()
    }

    controller(){
        console.log("Chamei o controler do game")
        this._windowGame.loadGame()
    }

}