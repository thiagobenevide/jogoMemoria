import { EndGameController } from "./controller/endGameController.js"
import { GameController } from "./controller/gameController.js"
import { IndexController} from "./controller/indexController.js"

let url = window.location.pathname

switch (url){
    case '/index.html':
        new IndexController()
        break
    case '/pages/game.html':
        new GameController()
        break
    case '/pages/youLoser.html':
        new EndGameController()
        break
    case '/pages/youWin.html':
        new EndGameController()
        break
}