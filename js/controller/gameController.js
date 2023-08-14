import { GameModel } from "../model/gameModel.js"

export class GameController{
    gameModel

    constructor(){
        this.gameModel = new GameModel()
        this.controller()
    }
    
    controller(){
       this.gameModel.load()
    }

}