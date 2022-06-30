function salvar(){

    let nome = $("#nome").val();
    let unidade = $("#unidade").val();
    let quantidade = $("#quantidade").val();
    let preco = $("#preco").val();
    let perecivel = $('input[name="radioPerecivel"]:checked').val();
    let dataValidade = new Date($("#validade").val());
    let dataFabricacao = new Date($("#fabricacao").val());

    let item ={
        nome: nome,
        unidade: unidade,
        quantidade: quantidade,
        preco: preco,
        perecivel: perecivel,
        dataFabricacao: dataFabricacao
    };

    let itensTabela = buscarDeLocalStorage("itensTabela");
    itensTabela = transformaJsonEmObjeto(itensTabela);
    
    if (itensTabela == null){
        itensTabela = [];
    }

    itensTabela.push(item);
    itensTabela = transformarEmJson(itensTabela);
    salvarEmLocalStorage(itensTabela);
}