import { ModeDaltonicController } from "../controller/modeDaltonicController.js"

export class IndexModel{
    menuWithContent
    menuWhichContent
    statuspoppup
    background
    buttonStatus
    statusModeDaltonic
    openModeDaltonic 
    closeModeDaltonic 
    buttonPlay
    html
    input
    statusClick
    nameButton
    ModelDaltonic

    constructor(){
        this.menuWithContent = document.querySelector(".menu-with-content")
        this.menuWhichContent = document.querySelector(".menu-which-content")
        this.background = document.querySelector(".background")
        this.buttonStatus = document.querySelector('.buttonStatus')
        this.statuspoppup = false
        this.openModeDaltonic = document.querySelector('.lineThree')
        this.closeModeDaltonic = document.querySelector('.x')
        this.buttonPlay = document.querySelector('.button-play')
        this.input = document.querySelector('.input-name')
        this.html = document.querySelector('body')  
        this.ModelDaltonic = new ModeDaltonicController()
    }

    activeMenu(){
        console.log("Ativar menu")
        this.menuWhichContent.style = 'display: none'
        this.menuWithContent.style = 'display: grid'
    }

    disableMenu(){
        console.log("Desativar Menu")
        this.menuWithContent.style = 'display: none'
        this.menuWhichContent.style = 'display: block'
    }

    modeDaltonic(){
        if(this.statuspoppup == false){
            this.background.style = 'display:flex'
            this.statuspoppup = true
        }else{
            this.background.style = 'display:none'
            this.statuspoppup = false
        }
    }

    validadeInput(){
        let text = this.input.value.trim()
        if(text.length > 2){
            this.buttonPlay.removeAttribute('disabled')
            this.buttonPlay.style = 'background-color: var(--backgroudColorTerceary)'    
            return
        }
        this.buttonPlay.setAttribute('disabled','')
        this.buttonPlay.style = 'background-color: var(--backgroudColorQuartenary)'
    }

    setPlayer(event){
        event.preventDefault()
        localStorage.setItem('player', this.input.value)
        window.location.href = '../../pages/game.html'

    }

    update(){
        this.statusClick = localStorage.getItem('statusClick')
        this.nameButton = localStorage.getItem('nameButton')
        this.button = document.querySelector('.buttonStatus')
        this.statusModeDaltonic = localStorage.getItem('statusModeDaltonic')
    }

    validadeDaltonic(){
        this.update()
        if(this.statusClick == null || this.nameButton == null || this.statusModeDaltonic == null){
            window.localStorage.setItem('statusClick', 'desativado')
            window.localStorage.setItem('nameButton', 'Ativar')
            window.localStorage.setItem('statusModeDaltonic', 'desativado')
        }else if(this.statusClick == 'desativado' && this.nameButton == 'Ativar' && this.statusModeDaltonic == 'desativado'){
            this.ModelDaltonic.modeDaltonicModel.colorEnable()
            window.localStorage.setItem('statusClick', 'ativado')
            window.localStorage.setItem('nameButton', 'Desativar')
            window.localStorage.setItem('statusModeDaltonic', 'ativado')
            this.button.innerHTML = 'Desativar'
        }else if(this.statusClick == 'ativado' && this.nameButton == 'Desativar' && this.statusModeDaltonic == 'ativado'){
            this.ModelDaltonic.modeDaltonicModel.colorDisable()
            window.localStorage.setItem('statusClick', 'desativado')
            window.localStorage.setItem('nameButton', 'Ativar')
            window.localStorage.setItem('statusModeDaltonic', 'desativado')
            this.button.innerHTML = 'Ativar'
        }
    }

    load(){
        this.update()
        if(this.statusClick == null || this.nameButton == null || this.statusModeDaltonic == null){
            localStorage.setItem('statusClick', 'desativado')
            localStorage.setItem('nameButton', 'Ativar')
            localStorage.setItem('statusModeDaltonic', 'desativado')
        }else if(this.statusClick == 'ativado' && this.nameButton == 'Desativar' && this.statusModeDaltonic == 'ativado'){
            this.ModelDaltonic.modeDaltonicModel.colorEnable()
            if(this.button){
                this.button.innerHTML = 'Desativar'
            }
        }
    }
    
}

