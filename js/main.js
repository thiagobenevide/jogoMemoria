import { indexController } from "./controller/indexController.js"

let index = new indexController()
let menuComConteudo = document.querySelector('.menu-with-content')
let menuSemConteudo = document.querySelector('.menu-which-content')
let abrirModoDaltonico = document.querySelector('.lineThree')
let fecharModoDaltonico = document.querySelector('.x')


menuComConteudo.addEventListener('click', ()=>{
    index.desativarMenu()
})

menuSemConteudo.addEventListener('click', ()=>{
    index.ativarMenu()
})

abrirModoDaltonico.addEventListener('click', () =>{
    index.modoDaltonico()
})

fecharModoDaltonico.addEventListener('click', ()=>{
    index.modoDaltonico()
} )




