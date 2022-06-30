function salvar(){

    let nome = $("#nome").val();
    let unidade = $("#unidade").val();
    let quantidade = $("#quantidade").val();
    let preco = $("#preco").val();
    let perecivel = $('input[name="radioPerecivel"]:checked').val();
    let dataValidade = new Date($("#validade").val());
    let dataFabricacao = new Date($("#fabricacao").val());
    let produtoValido;

    let item ={
        nome: nome,
        unidade: unidade,
        quantidade: quantidade,
        preco: preco,
        perecivel: perecivel,
        dataValidade: dataValidade,
        dataFabricacao: dataFabricacao
    };

    produtoValido = validarEntradas(item)

    if(produtoValido){
        let itensTabela = buscarDeLocalStorage("itensTabela");
        itensTabela = transformaJsonEmObjeto(itensTabela);
        
        if (itensTabela == null){
            itensTabela = [];
        }

        itensTabela.push(item);
        itensTabela = transformarEmJson(itensTabela);
        salvarEmLocalStorage(itensTabela);
        alert("Item salvo com Sucesso!");
    }else{
        alert("Produto vencido!");
    }
}

function preparaModal(id){
    $("#idExcluir").val(id);
}

function excluirItem(){
    let id = $("#idExcluir").val();
    let itensTabela = buscarDeLocalStorage("itensTabela");
    itensTabela = transformaJsonEmObjeto(itensTabela);   
    itensTabela.splice(id, 1);
    itensTabela = transformarEmJson(itensTabela);
    salvarEmLocalStorage(itensTabela);
    atualizaPagina();
}