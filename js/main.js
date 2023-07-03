import { indexController } from "./controller/indexController.js"

let index = new indexController()
let menuComConteudo = document.querySelector('.menu-with-content')
let menuSemConteudo = document.querySelector('.menu-which-content')

menuComConteudo.addEventListener('click', function(){
    console.log("Estou desativando o conteúdo")
    index.desativarMenu()

})

menuSemConteudo.addEventListener('click', function(){
    console.log('Estou desativando o conteúdo')
    index.ativarMenu()
} )