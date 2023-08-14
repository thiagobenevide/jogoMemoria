import { IndexModel } from "../model/indexModel.js"

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
