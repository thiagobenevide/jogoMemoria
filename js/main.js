import { indexController } from "./controller/indexController.js"
import { Game } from "./controller/gameController.js"


let index = new indexController()
index.controller()
let gameController = new Game()
gameController.controller()




