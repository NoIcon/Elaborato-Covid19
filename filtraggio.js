function richiamaFiltri(dati){
	var datas1; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/filtriVaccini",
        data: dati,
		success: function(dati){	
		datas1 = dati;	
		return dati;
	}});

	return datas1;
}

function filtra(){

    var tipo = document.getElementById("tipo").value;
    var sesso = document.getElementById("sesso").value;
    var eta = document.getElementById("eta").value;
    var data = {};


    if(tipo != "Tutti i vaccini")  
        data['tipo'] = tipo;
    
    if(eta != "Tutte le età")
        data['eta'] = eta;
    
    if(sesso != "Entrambi")
        data['sesso'] = sesso;
    
    console.log(data);
    var ritorno = richiamaFiltri(data);
    console.log(ritorno);


}

