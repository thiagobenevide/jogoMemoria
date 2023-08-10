import { indexController } from "./controller/indexController.js"


let index = new indexController()
index.controller()

const styleSheets = document.styleSheets[0]



















const buttonStatus = document.querySelector('.buttonStatus')
let statusModeDaltonic = false


function enableDaltonicMode(){
    if(statusModeDaltonic == false){
        buttonStatus.innerHTML = 'Desativar'
        colorEnable()
        statusModeDaltonic = true
    }else if(statusModeDaltonic == true){
        buttonStatus.innerHTML = 'Ativar'
        colorDisable()
        statusModeDaltonic = false
    }
}

function colorEnable(){
    styleSheets.insertRule(':root {  --colorFontPrincipal: #fff;--colorFontSecundary: #8C8C8C;  --colorFontLigth: #c5c1c1;--backgroudColorPrincipal: #131313;--backgroudColorSecundary: #2e2e2e;--backgroudColorTerceary: #6d6d6d;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #585858;  --backgroudColorSextenary: #fff;--backgroudColorSectenary: #131313;}', styleSheets.cssRules.length)
}

function colorDisable(){
    styleSheets.insertRule(':root {  --colorFontPrincipal: #FF79C6;--colorFontSecundary: #fff;  --colorFontLigth: #8C8C8C;--backgroudColorPrincipal: #282942;--backgroudColorSecundary: #383A59;--backgroudColorTerceary: #FF79C6;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #b3548a; --backgroudColorSextenary: #fff;--backgroudColorSectenary: #1d1e30;}', styleSheets.cssRules.length)

}


window.onload = ()=>{
    buttonStatus.addEventListener('click', ()=>{
        enableDaltonicMode()
    })
}