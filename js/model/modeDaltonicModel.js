export class ModeDalonicModel{
    statusClick
    statusModeDaltonic
    nameButton
    styleSheets
    img
    classImg
    button

    constructor(){
        this.statusClick = localStorage.getItem('statusClick')
        this.statusModeDaltonic = localStorage.getItem('statusModeDaltonic')
        this.styleSheets = document.styleSheets[0]
        this.img = document.querySelectorAll('img')
        this.classImg = document.querySelectorAll('.back')
        this.nameButton = localStorage.getItem('nameButton')
        this.button = document.querySelector('.buttonStatus')
    }

    
    colorEnable(){
        console.log('Ativando as cores')
        this.styleSheets.insertRule(':root {  --colorFontPrincipal: #fff;--colorFontSecundary: #8C8C8C;  --colorFontLigth: #c5c1c1;--backgroudColorPrincipal: #131313;--backgroudColorSecundary: #2e2e2e;--backgroudColorTerceary: #6d6d6d;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #585858;  --backgroudColorSextenary: #fff;--backgroudColorSectenary: #131313;}', this.styleSheets.cssRules.length)
        this.img.forEach(image =>{
            image.style.filter = 'grayscale(100%)'
        })

        this.classImg.forEach(image => {
            image.style.filter = 'grayscale(100%)'
        })
    }

    colorDisable(){
        console.log('Desativando as cores')
        this.styleSheets.insertRule(':root {  --colorFontPrincipal: #FF79C6;--colorFontSecundary: #fff;  --colorFontLigth: #8C8C8C;--backgroudColorPrincipal: #282942;--backgroudColorSecundary: #383A59;--backgroudColorTerceary: #FF79C6;  --backgroudColorQuartenary: #8C8C8C; --backgroudColorQuitenary: #b3548a; --backgroudColorSextenary: #fff;--backgroudColorSectenary: #1d1e30;}', this.styleSheets.cssRules.length)
        this.img.forEach(image =>{
            image.style.filter = 'none'
        })
    }


    load(){
        if(this.statusClick == null || this.nameButton == null || this.statusModeDaltonic == null){
            window.localStorage.setItem('statusClick', 'desativado')
            window.localStorage.setItem('nameButton', 'Ativar')
            window.localStorage.setItem('statusModeDaltonic', 'desativado')
        }else if(this.statusClick == 'ativado' && this.nameButton == 'Desativar' && this.statusModeDaltonic == 'ativado'){
            this.colorEnable()
            if(this.button){
                this.button.innerHTML = 'Desativar'
            }
        }
    }
    
}