function visibilidade(idElem, idBtn){
    let elementList = document.getElementById(idElem).style.display
   

    if(elementList == "block"){
        document.getElementById(idElem).style.display = "none"
        document.getElementById(idBtn).value = "Mostrar"

    }
    else {
        document.getElementById(idElem).style.display = "block"
        document.getElementById(idBtn).value =  "Esconder"
    }
}