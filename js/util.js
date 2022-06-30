function transformarEmJson(objeto){
    let retorno = JSON.stringify(objeto);

    return retorno;
}

function salvarEmLocalStorage(json){
    localStorage.setItem("itensTabela", json);
}

function buscarDeLocalStorage(){
    let retorno = localStorage.getItem("itensTabela");

    return retorno;
}

function transformaJsonEmObjeto(json){
    let retorno = JSON.parse(json);

    return retorno;
}

function atualizaPagina(){
    location.reload();
}

function mascaraReal(elemento){
	let valor = elemento.value.replace(/\D/g,'');
	valor = (valor/100).toFixed(2) + '';
	valor = valor.replace(".", ",");
	valor = valor.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	valor = valor.replace(/(\d)(\d{3}),/g, "$1.$2,");
	elemento.value = 'R$' +  valor;
}

function mascaraQuantidade(elemento){
	let unidade = $('#unidade').val()
    let quantidade = $('#quantidade').val();
    quantidade = quantidade.replace(/\D/g, "");

	switch(unidade){
		case 'Litro':
            $("#quantidade").val(quantidade + " Lt.");
			$("#quantidade").attr("placeholder", "0 Lt.");
			break
		case 'Quilograma':
			$("#quantidade").val(quantidade + " Kg.");
			$("#quantidade").attr("placeholder", "0 Kg.");
			break
		case 'Unidade':
			$("#quantidade").val(quantidade + " Un.");
			$("#quantidade").attr("placeholder", "0 Un.");
			break
	}
}

function converteDataParaString(data){

	let dataRetorno = new Date(data);
	dataRetorno = dataRetorno.getDate() + "/" + (dataRetorno.getMonth() + 1) + "/" + dataRetorno.getFullYear();

	return dataRetorno;
}

function converteDataParaISO(data){

	let dataRetorno = new Date(data);
	dataRetorno = dataRetorno.toISOString().substring(0, 10);

	return dataRetorno;
}