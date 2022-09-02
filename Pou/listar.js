function listar(){
    listrarNoticia = localStorage.getItem('listar')
    
    if(listarNoticia == null){
        msgError.innerHTML = 'Nenhuma notícia Cadastrada'
        return
    }
    
    const listardados = localStorage.getItem('listar')
    msgLista.innerHTML = listardados
    
    
    
    }