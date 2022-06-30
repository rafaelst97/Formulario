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

function mascaraReal(i){
	let v = i.value.replace(/\D/g,'');
	v = (v/100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = 'R$' +  v;
}

function mascaraQuantidade(elemento){
	let unidade = $('#unidade').val()
    let quantidade = $('#quantidade').val();
    quantidade = quantidade.replace(/\D/g, "");

	switch(unidade){
		case 'Litro':
            $("#quantidade").val(quantidade + " Lt.");
			break
		case 'Quilograma':
			$("#quantidade").val(quantidade + " Kg.");
			break
		case 'Unidade':
			$("#quantidade").val(quantidade + " Un.");
			break
	}
}