let nome = document.querySelector('#nome')
let alimentacao = document.querySelector('#alimentacao')

function cadastrar(){
    let listaAnimais = localStorage.getItem('listaAnimais')
    
    let linha = `<tr>`
        linha  += `<td>${titulo.value}</td>`
        linha += `<td>${data.value}</td>`
        linha += `<td>${comentarios.value}</td>`
     

        linha += `</tr>`

    if(listaAnimais == null){
         listaAnimais = linha
    }else{
        listaAnimais += linha
    }

    localStorage.setItem(`listaAnimais`,listaAnimais)
msgSucesso.innerHTML = '<strong>Cadastrado com Sucesso....</strong>'
setTimeout(() => {
    document.location.reload(true)

}, 2000);}
