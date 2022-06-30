$(document).ready(function(){
    listar();
});

function listar(){

    let itensTabela = buscarDeLocalStorage("itensTabela");
    itensTabela = transformaJsonEmObjeto(itensTabela);
    itensTabela.forEach(inserirLinha);
    
}

function inserirLinha(item, index){

    let dataFabricacao = new Date(item.dataFabricacao);
    let dataValidade = new Date(item.dataValidade);
    dataFabricacao = dataFabricacao.getDate() + "/" + (dataFabricacao.getMonth() + 1) + "/" + dataFabricacao.getFullYear();
    dataValidade = dataValidade.getDate() + "/" + (dataValidade.getMonth() + 1) + "/" + dataValidade.getFullYear();

    let html = `<tr>
    <td></td>
    <td>${index}</td>
    <td>${item.nome}</td>
    <td>${item.quantidade}</td>
    <td>${item.preco}</td>
    <td>${dataFabricacao}</td>
    <td>${dataValidade}</td>
    </tr>`;

    $("#tbody").append(html);
}