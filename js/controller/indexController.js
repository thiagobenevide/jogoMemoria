import { IndexModel } from "../model/indexModel.js"
/*
window.onload = () =>{
    let statusClick = localStorage.getItem('statusClick')
    let nameButton = localStorage.getItem('nameButton')
    let statusModeDaltonic = localStorage.getItem('statusModeDaltonic')
    let button = document.querySelector('.buttonStatus')
    
    if(statusClick == null || nameButton == null || statusModeDaltonic == null){
        localStorage.setItem('statusClick', 'desativado')
        localStorage.setItem('nameButton', 'Ativar')
        localStorage.setItem('statusModeDaltonic', 'desativado')
    }else if(statusClick == 'ativado' && nameButton == 'Desativar' && statusModeDaltonic == 'ativado'){
        colorEnable()
        if(button){
            button.innerHTML = 'Desativar'
        }
    }
    load()
}
*/
/*
export class indexController{
    _menuWithContent
    _menuWhichContent
    _statuspoppup
    _background
    _buttonStatus
    _statusModeDaltonic
    _openModeDaltonic 
    _closeModeDaltonic 
    _buttonPlay
    _html
    _input

    constructor(){
        this._menuWithContent = document.querySelector(".menu-with-content")
        this._menuWhichContent = document.querySelector(".menu-which-content")
        this._background = document.querySelector(".background")
        this._buttonStatus = document.querySelector('.buttonStatus')
        this._statuspoppup = false
        this._statusModeDaltonic = false
        this._openModeDaltonic = document.querySelector('.lineThree')
        this._closeModeDaltonic = document.querySelector('.x')
        this._buttonPlay = document.querySelector('.button-play')
        this._input = document.querySelector('.input-name')
        this._html = document.querySelector('body')
    }

    controller(){
        this._menuWithContent.addEventListener('click', ()=>{
            this.disableMenu()
        })
        
        this._menuWhichContent.addEventListener('click', ()=>{
            this.activeMenu()
        })
        
        this._openModeDaltonic.addEventListener('click', () =>{
            this.modeDaltonic()
        })
        
        this._closeModeDaltonic.addEventListener('click', ()=>{
            this.modeDaltonic()
        } )

        this._input.addEventListener('input', ()=>{
            this.validadeInput()
        })

        this._buttonPlay.addEventListener('click', (event)=>{
            this.setPlayer(event)
        })

        this._buttonStatus.addEventListener('click', ()=>{
            this.validadeDaltonic()
        })

        this.validadeInput()


        
    }

    activeMenu(){
        console.log("Ativar menu")
        this._menuWhichContent.style = 'display: none'
        this._menuWithContent.style = 'display: grid'
    }

    disableMenu(){
        console.log("Desativar Menu")
        this._menuWithContent.style = 'display: none'
        this._menuWhichContent.style = 'display: block'
    }

    modeDaltonic(){
        if(this._statuspoppup == false){
            this._background.style = 'display:flex'
            this._statuspoppup = true
        }else{
            this._background.style = 'display:none'
            this._statuspoppup = false
        }
    }
    validadeInput(){
        let text = this._input.value.trim()
        if(text.length > 2){
            this._buttonPlay.removeAttribute('disabled')
            this._buttonPlay.style = 'background-color: var(--backgroudColorTerceary)'    
            return
        }
        this._buttonPlay.setAttribute('disabled','')
        this._buttonPlay.style = 'background-color: var(--backgroudColorQuartenary)'
    }

    setPlayer(event){
        event.preventDefault()
        localStorage.setItem('player', this._input.value)
        window.location.href = '../../pages/game.html'

    }

    validadeDaltonic(){
        let statusClick = localStorage.getItem('statusClick')
        let nameButton = localStorage.getItem('nameButton')
        let statusModeDaltonic = localStorage.getItem('statusModeDaltonic')
        let button = document.querySelector('.buttonStatus')
        let img = document.querySelector('.image')
        let imgDal = document.querySelector('.imgDaltonic')

        if(statusClick == null || nameButton == null || statusModeDaltonic == null){
            localStorage.setItem('statusClick', 'desativado')
            localStorage.setItem('nameButton', 'Ativar')
            localStorage.setItem('statusModeDaltonic', 'desativado')
        }else if(statusClick == 'desativado' && nameButton == 'Ativar' && statusModeDaltonic == 'desativado'){
            colorEnable()
          
            localStorage.setItem('statusClick', 'ativado')
            localStorage.setItem('nameButton', 'Desativar')
            localStorage.setItem('statusModeDaltonic', 'ativado')
            button.innerHTML = 'Desativar'
        }else if(statusClick == 'ativado' && nameButton == 'Desativar' && statusModeDaltonic == 'ativado'){
            colorDisable()
            
            localStorage.setItem('statusClick', 'desativado')
            localStorage.setItem('nameButton', 'Ativar')
            localStorage.setItem('statusModeDaltonic', 'desativado')
            button.innerHTML = 'Ativar'
        }
    }
    
}

*/

export class IndexController{
    indexModel

    constructor(){
        this.indexModel = new IndexModel()
        this.controller()
    }

    
    controller(){
        this.indexModel.menuWithContent.addEventListener('click', ()=>{
            this.indexModel.disableMenu()
        })
        
        this.indexModel.menuWhichContent.addEventListener('click', ()=>{
            this.indexModel.activeMenu()
        })
        
        this.indexModel.openModeDaltonic.addEventListener('click', () =>{
            this.indexModel.modeDaltonic()
        })
        
        this.indexModel.closeModeDaltonic.addEventListener('click', ()=>{
            this.indexModel.modeDaltonic()
        } )

        this.indexModel.input.addEventListener('input', ()=>{
            this.indexModel.validadeInput()
        })

        this.indexModel.buttonPlay.addEventListener('click', (event)=>{
            this.indexModel.setPlayer(event)
        })

        this.indexModel.buttonStatus.addEventListener('click', ()=>{
            console.log('Alterar status modo daltonico')
            this.indexModel.validadeDaltonic()
        })

        this.indexModel.validadeInput()  
    }
}
