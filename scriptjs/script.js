
//guarda elementos ativos no momento
let btnAtivado = []

function visibilidade(idElem, idBtn){
    let elementIdStyle = document.getElementById(idElem).style.display
    
    if (btnAtivado.length != 0){
        document.getElementById(btnAtivado[0]).style.display = "none"
        document.getElementById(btnAtivado[1]).value = "Mostrar"
        btnAtivado.splice(0,2)
    }

    if(elementIdStyle == "block"){
        document.getElementById(idElem).style.display = "none"
        document.getElementById(idBtn).value = "Mostrar"
    } 

    //caso nenhum botão ativado 
    else{

        document.getElementById(idElem).style.display = "block"
        document.getElementById(idBtn).value =  "Esconder"
        
        //listar iframe ativo
        btnAtivado.push(idElem,idBtn)
    } 
}