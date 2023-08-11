const controlerVariables = ()=>{
    let statusClick = localStorage.getItem('statusClick')
    let statusModeDaltonic =  localStorage.getItem('statusModeDaltonic')
    if(statusClick != false && statusModeDaltonic != false){
        return
    }else{
        localStorage.setItem('statusModeDaltonic', false)
        localStorage.setItem('statusClick', false)
    }
   
}

export function enableDaltonicMode(){
    var statusModeDaltonic = localStorage.getItem('statusModeDaltonic')
    var clickStatus = localStorage.getItem('statusClick')
    var buttonStatus = document.querySelector('.buttonStatus')
    console.log("Status do modo daltonico",statusModeDaltonic)
    console.log('Status do click', clickStatus)
    if(statusModeDaltonic === 'false'){
        console.log("Caiu no modo daltonico")
        buttonStatus.innerHTML = 'Desativar'
        colorEnable()
        statusModeDaltonic = localStorage.setItem('statusModeDaltonic', true)
    }else if(statusModeDaltonic == 'true'){
        console.log('caiu no desativar')
        buttonStatus.innerHTML = 'Ativar'
        colorDisable()
        statusModeDaltonic = localStorage.setItem('statusModeDaltonic', false)
    }
}

export function colorEnable(){
    var styleSheets = document.styleSheets[0]
    console.log(styleSheets)
    styleSheets.insertRule(':root {  --colorFontPrincipal: #fff;--colorFontSecundary: #8C8C8C;  --colorFontLigth: #c5c1c1;--backgroudColorPrincipal: #131313;--backgroudColorSecundary: #2e2e2e;--backgroudColorTerceary: #6d6d6d;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #585858;  --backgroudColorSextenary: #fff;--backgroudColorSectenary: #131313;}', styleSheets.cssRules.length)
}

export function colorDisable(){
    var styleSheets = document.styleSheets[0]
    styleSheets.insertRule(':root {  --colorFontPrincipal: #FF79C6;--colorFontSecundary: #fff;  --colorFontLigth: #8C8C8C;--backgroudColorPrincipal: #282942;--backgroudColorSecundary: #383A59;--backgroudColorTerceary: #FF79C6;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #b3548a; --backgroudColorSextenary: #fff;--backgroudColorSectenary: #1d1e30;}', styleSheets.cssRules.length)

}

function observer(){
    console.log("Caiu no observer")
    var statusClick = localStorage.getItem('statusClick')
    console.log(statusClick)
    if(statusClick == 'true'){
        localStorage.setItem('statusModeDaltonic', true)
        console.log("Caiu no ")
        colorEnable()
    }else if(statusClick == 'false'){
        localStorage.setItem('statusModeDaltonic', false)
        colorDisable()
    }
}


