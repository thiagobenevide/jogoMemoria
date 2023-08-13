import { EndGameModel } from "../model/endGameModel.js"

export class EndGameController{
    endGameModel

    constructor(){
        this.endGameModel = new EndGameModel()
        this.controller()
    }

    controller(){
        this.endGameModel.playerGame()
        this.endGameModel.menu()
        this.endGameModel.tryAgain()
    }
}
