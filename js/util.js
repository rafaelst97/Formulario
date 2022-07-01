function atualizaPagina(){
    location.reload();
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