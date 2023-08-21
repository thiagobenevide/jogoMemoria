let input = document.querySelector('.input')
let main = document.querySelector('main')



input.addEventListener('click', ()=>{
    let status = localStorage.getItem('statusWindow')
    console.log(status)
    if(status == null){
        localStorage.setItem('statusWindow','disable')
        openWindow()
    }
    if(status == 'disable'){
        openWindow()
    }
    if(status == 'active'){
        localStorage.setItem('statusWindow','disable')
    }
})


function openWindow(){

    localStorage.setItem('statusWindow', 'active')
    let div1 = elementCreate('div', 'window')
    let div2 = elementCreate('div')
    let div3 = elementCreate('div')
    let input = elementCreate('input', 'inputImage','', 'file' )
    let button = elementCreate('button', 'save', 'Salvar' )
    let button2 = elementCreate('button', 'set', 'Editar')

    div2.appendChild(input)
    div3.appendChild(button)
    div3.appendChild(button2)
    div1.appendChild(div2)
    div1.appendChild(div3)
    main.appendChild(div1)
}

function elementCreate(element, className='null', contentText='', typeElem=''){
    /*
        element: Elemento HTML
        className: Classe do Elemento
        contextTex: Conteúdo do Elemento em forma de Texto
        typeElem: Tipo de elemento HTML
    */
    let elem = document.createElement(`${element}`)
    elem.classList.add(`${className}`)
    elem.textContent = `${contentText}`
    elem.type = `${typeElem}` 
    return elem
}