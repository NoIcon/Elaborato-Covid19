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


    var labels = ritorno.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});
	
	var data = ritorno.map(function(e){
		return e.Dosi;
	});
    
	var ctx1 = myChart1.getContext('2d');

    var boh = {
        responsive: true,
        type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels:labels.reverse(),
            datasets:[{
            label:'Vaccini giornalieri',
            data:data.reverse(),
            backgroundColor:'rgba(65, 105, 255, 0.6)',
            borderColor: '#4169e1',
            borderWidth:3.5,
            hoverBorderWidth:3,
            hoverBorderColor:'#4169e1',
            fill: false,
            lineTension: 0,
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero: true
                    }
                    
                }]
            },
            title:{
            display:true,
            text:'Vaccini giornalieri',
            fontSize:30,
            },
            legend:{
            borderWidth:1,
            display:true,
            position:'bottom',
            labels:{
                fontColor:'#000'
            }
            },
            layout:{
            padding:{
                left:50,
                right:50,
                bottom:10,
                top:10
            }
            },
            tooltips:{
            enabled:true
            },
            
        }
        };
        var chart1 = new Chart(ctx1, boh)

        document.getElementById("myChart1").style=""

        ctx1.clearRect(0, 0, myChart1.width, myChart1.height);
}

