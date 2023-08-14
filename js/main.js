import { EndGameController } from "./controller/endGameController.js"
import { GameController } from "./controller/gameController.js"
import { IndexController} from "./controller/indexController.js"
import { ModeDaltonicController } from "./controller/modeDaltonicController.js"

let url = window.location.pathname
let modeDaltonic = new ModeDaltonicController()

switch (url){
    case '/index.html':
        let index = new IndexController()
        window.onload = () => {
            index.indexModel.load()
        }
        break
    case '/pages/game.html':
        new GameController()
        window.onload = () =>{
            modeDaltonic.modeDaltonicModel.loadDaltonic()
        }
        break
    case '/pages/youLoser.html':
        new EndGameController()
        window.onload = () =>{
            modeDaltonic.modeDaltonicModel.loadDaltonic()
        }
        break
    case '/pages/youWin.html':
        new EndGameController()
        window.onload = () =>{
            modeDaltonic.modeDaltonicModel.loadDaltonic()
        }
        break
}