function salvar(edicao = false){

    let nome = $("#nome").val();
    let unidade = $("#unidade").val();
    let quantidade = $("#quantidade").val();
    let preco = $("#preco").val();
    let perecivel = $('input[name="radioPerecivel"]:checked').val();
    let dataValidade = new Date($("#validade").val());
    let dataFabricacao = new Date($("#fabricacao").val());
    let itensTabela = buscarDeLocalStorage("itensTabela");
        itensTabela = transformaJsonEmObjeto(itensTabela);
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

    if (edicao != false && item.perecivel == "false"){
        item.dataValidade = null;
    }

    debugger;
    produtoValido = validarEntradas(item);
    item.quantidade = verificaQuantidadeVazia(item.quantidade);

    if(produtoValido){
        
        if (itensTabela == null){
            itensTabela = [];
        }

        if (edicao == false){
            itensTabela.push(item);
            modal("#itemSalvo");

        }else{
            let id = $("#itemEditado").val();
            itensTabela[id] = item;
            atualizaPagina();
        }

        itensTabela = transformarEmJson(itensTabela);
        salvarEmLocalStorage(itensTabela);

    }else{
        modal("#itemVencido");
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
    modal("#avisoExcluido");
}

function editaItem(id){
    let itens = buscarDeLocalStorage();
    itens = transformaJsonEmObjeto(itens);
    $("#itemEditado").val(id);
    $("#nome").val(itens[id].nome);
    $("#unidade").val(itens[id].unidade);
    $("#quantidade").val(itens[id].quantidade);
    $("#preco").val(itens[id].preco);
    $("#fabricacao").val(converteDataParaISO(itens[id].dataFabricacao));
    $(`input[name=radioPerecivel][value=${itens[id].perecivel}]`).prop("checked", true);

    if (itens[id].dataValidade != null){
        $("#validade").val(converteDataParaISO(itens[id].dataValidade));
    }

    if (itens[id].perecivel == "true"){
        $("#validade").prop("disabled", false);
    }
}