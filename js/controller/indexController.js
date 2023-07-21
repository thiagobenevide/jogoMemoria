export class indexController{
    _menuComConteudo
    _menuSemConteudo
    _statuspoppup
    _background
    _buttonStatus
    _buttonContent

    constructor(){
        this._menuComConteudo = document.querySelector(".menu-with-content")
        this._menuSemConteudo = document.querySelector(".menu-which-content")
        this._background = document.querySelector(".background")
        this._buttonContent = document.querySelector('.buttonStatus')
        this._statuspoppup = false    
        this.buttonStatus = false
    }

    ativarMenu(){
        this._menuSemConteudo.style = 'display: none'
        this._menuComConteudo.style = 'display: grid'
        
    }
    desativarMenu(){
        this._menuComConteudo.style = 'display: none'
        this._menuSemConteudo.style = 'display: block'

    }
    modoDaltonico(){
        if(this._statuspoppup == false){
            this._background.style = 'display:flex'
            this._statuspoppup = true
        }else{
            this._background.style = 'display:none'
            this._statuspoppup = false
        }
    }

    statusModoDaltonico(){
        if(this._buttonStatus == false){            
            this.buttonStatus = true
        }else{
            this.buttonStatus = false
        }
    }

}