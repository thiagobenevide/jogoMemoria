export class DataBaseModel{
    dbName
    dbVersion
    request
    db
    objectStore

    constructor(name, version){
        this.dbName = name
        this.dbVersion = version
    }

    openDB(){
        if(db.transation(['tbl_IMG'], 'readonly')){
            console.log("banco já existe")
        }else{
            this.request = indexedDB.open(this.dbVersion, this.dbVersion)
            this.request.onerror = (event) => {
                console.error('Erro ao abrir o banco de dados', event.target.error)
            }
        }
    }

    createRegister(event){
        this.db = event.target.result
        this.objectStore = db.createObjectStore("tbl_IMG", {keyPath: 'id', autoIncrement: true})
    }

    addImage(image){
        let transation = this.db.transation(['tbl_IMG'], 'readwrite')
        let imageStore = transation.objectStore('tbl_IMG')
        let img = {data: image}
        let request = imageStore.add(img)

        request.onsucess = () =>{
            console.log("Imagem adicionada com sucesso")
        }

        request.onerror = () => {
            console.log("Houve um erro ao adicionar a imagem")
        }

    }

    getImage(id){
        let transation = db.transation(['tbl_IMG'], 'readonly')
        let imageStore = transation.objectStore('tbl_IMG')
        let request =  imageStore.get(id)
        
        request.onsucess = () =>{
            let image = request.result
            if(image){
                let blobUrl = URL.createObjectURL(image.data)
                return blobUrl
            }
        }

        request.onerror = (event) =>{
            console.error('Erro ao exibir imagem', event.target.error)
        }
    }

    setImage(id, image){
        let transation = db.transation(['tbl_IMG'], 'readwrite')
        let imageStore = transation.objectStore('tbl_IMG')
        let request =  imageStore.put(image, id)
        
        request.onsucess = () =>{
            console.log("Alteração realizada com sucesso")
        }

        request.onerror = (event) =>{
            console.log("Erro ao realizar a alteração", event.target.error)
        }
    }





}