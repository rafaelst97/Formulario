function validarEntradas(entrada) {

    let validade = entrada.dataValidade.getTime();
    let fabricacao = entrada.dataFabricacao.getTime();
    let hoje = new Date();

    if (entrada.nome == "" || entrada.nome == null) {
        ativarAlerta("#semNome");
    }else{
        desativarAlerta("#semNome");
    }

    if (entrada.nome.length > 50){
        ativarAlerta("#maximoCaracteres");
    }else{
        desativarAlerta("#maximoCaracteres");
    }

    if (entrada.unidade == "" || entrada.unidade == null) {
        ativarAlerta("#semUnidade");
    }else{
        desativarAlerta("#semUnidade");
    }

    if (entrada.preco == 0 || entrada.preco == "" || entrada.preco == null) {
        ativarAlerta("#semPreco");
    }else{
        desativarAlerta("#semPreco");
    }

    if (entrada.perecivel != "true" && entrada.perecivel != "false" && entrada.perecivel == null) {
        ativarAlerta("#semPerecivel");
    }else{
        desativarAlerta("#semPerecivel");
    }
    if(entrada.perecivel == "true" && (entrada.dataValidade == "" || entrada.dataValidade == null || isNaN(entrada.dataValidade))){
        ativarAlerta("#semValidade");
    }else{
        desativarAlerta("#semValidade");
    }

    if(entrada.dataFabricacao == "" || entrada.dataFabricacao == null || isNaN(entrada.dataFabricacao)){
        ativarAlerta("#semFabricacao");
    }else{
        desativarAlerta("#semFabricacao");
    }

    debugger;
    if(validade < fabricacao || validade < hoje){
        return false;
    }

    return true;
}

$(document).on("change", "input[name='radioPerecivel']", function(){
    let valorRadio = $('input[name="radioPerecivel"]:checked').val();

    if(valorRadio == "true"){
        $("#validade").removeAttr("disabled");
    }else{
        $("#validade").attr("disabled", "disabled");
    }
})

function ativarAlerta(elemento){
    $(elemento).addClass("d-inline-flex");
}

function desativarAlerta(elemento){
    $(elemento).removeClass("d-inline-flex");
}