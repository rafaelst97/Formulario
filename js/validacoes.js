function validarEntradas(entrada) {

    if (entrada.nome == ""){
        $("#semNome").addClass("d-inline-flex")
    }else{
        $("#semNome").removeClass("d-inline-flex")
    }
    
}