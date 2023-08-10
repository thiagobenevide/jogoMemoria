const styleSheets = document.styleSheets[0]

const buttonStatus = document.querySelector('.buttonStatus')
localStorage.setItem('statusModeDaltonic', false)
localStorage.setItem('statusClick', false)
let statusClick = localStorage.getItem('statusClick')
let statusModeDaltonic = localStorage.getItem('statusModeDaltonic')


export function enableDaltonicMode(){
    if(statusModeDaltonic == false){
        buttonStatus.innerHTML = 'Desativar'
        colorEnable()
        statusModeDaltonic = localStorage.setItem('statusModeDaltonic', true)
    }else if(statusModeDaltonic == true){
        buttonStatus.innerHTML = 'Ativar'
        colorDisable()
        statusModeDaltonic = localStorage.setItem('statusModeDaltonic', false)
    }
}

function colorEnable(){
    styleSheets.deleteRule(':root')
    styleSheets.insertRule(':root {  --colorFontPrincipal: #fff;--colorFontSecundary: #8C8C8C;  --colorFontLigth: #c5c1c1;--backgroudColorPrincipal: #131313;--backgroudColorSecundary: #2e2e2e;--backgroudColorTerceary: #6d6d6d;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #585858;  --backgroudColorSextenary: #fff;--backgroudColorSectenary: #131313;}', styleSheets.cssRules.length)
}

function colorDisable(){
    styleSheets.deleteRule(':root')
    styleSheets.insertRule(':root {  --colorFontPrincipal: #FF79C6;--colorFontSecundary: #fff;  --colorFontLigth: #8C8C8C;--backgroudColorPrincipal: #282942;--backgroudColorSecundary: #383A59;--backgroudColorTerceary: #FF79C6;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #b3548a; --backgroudColorSextenary: #fff;--backgroudColorSectenary: #1d1e30;}', styleSheets.cssRules.length)

}


window.onload = ()=>{
    buttonStatus.addEventListener('click', ()=>{
        if(statusClick == true){
            localStorage.setItem('statusClick', false)
            localStorage.setItem('statusModeDaltonic', true)
            enableDaltonicMode()
        }else if(statusClick == false){
            localStorage.setItem('statusClick', true)
            localStorage.setItem('statusModeDaltonic', false)
            enableDaltonicMode()
        }
        
    })
}