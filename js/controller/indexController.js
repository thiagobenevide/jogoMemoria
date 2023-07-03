export class indexController{
    _menuComConteudo
    _menuSemConteudo

    constructor(){
        this._menuComConteudo = document.querySelector(".menu-with-content")
        this._menuSemConteudo = document.querySelector(".menu-which-content")
    }

    ativarMenu(){
        this._menuSemConteudo.style = 'display: none'
        this._menuComConteudo.style = 'display: grid'
        
    }

    desativarMenu(){
        this._menuComConteudo.style = 'display: none'
        this._menuSemConteudo.style = 'display: block'

    }

}