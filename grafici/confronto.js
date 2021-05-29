//dati PC casi
function getDatiP1(){
	var datas1; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliNuoviPos",
		success: function(dati){	
		datas1 = dati;

		datas1.pop();	
		
		return dati;
	}});

	return datas1;
}

//dati iss casi
function getDatiI1(){
	var datas2; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliCasiISS",
		success: function(dati){	
		datas2 = dati;

		for(var i=0;i<datas2.length-1;i++){	//per ogni elemento faccio la differenza, eccetto l'ultimo (che non verrà visualizzato)
			datas2[i].NuoviPositivi  = datas2[i].NuoviPositivi-datas2[i+1].NuoviPositivi;	//differenza
		}
		datas2.pop();

		return dati;
	}});

	return datas2;
}

//dati PC morti
function getDatiP2(){
	var datas3; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliDeceduti",
		success: function(dati){	
		datas3 = dati;
		
		for(var i=0;i<datas3.length-1;i++){	//per ogni elemento faccio la differenza, eccetto l'ultimo (che non verrà visualizzato)
			datas3[i].Deceduti  = datas3[i].Deceduti-datas3[i+1].Deceduti;	//differenza
		}
		datas3.pop();

		return dati;
	}});

	return datas3;
}

//dati iss morti
function getDatiI2(){
	var datas4; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliMortiISS",
		success: function(dati){	
		datas4 = dati;	

		for(var i=0;i<datas4.length-1;i++){	//per ogni elemento faccio la differenza, eccetto l'ultimo (che non verrà visualizzato)
			datas4[i].Deceduti  = datas4[i].Deceduti-datas4[i+1].Deceduti;	//differenza
		}
		datas4.pop();

		return dati;
	}});

	return datas4;
}

window.onload = function(){

	var datas1 = getDatiP1();
	var datas2 = getDatiI1();

	var labels = datas1.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});

	var dataP1 = datas1.map(function(e){
		return e.NuoviPositivi;
	});

	var dataI1 = datas2.map(function(e){
		return e.NuoviPositivi;
	});

	var ctx1 = myChart1.getContext('2d');

	window.boh1 = {
		responsive: true,
		type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data:{
			labels:labels.reverse(),
			datasets:[{
				label:'Dati Casi ISS',
				data:dataI1.reverse(),
				//backgroundColor:'green',
				backgroundColor:'rgba(0, 0, 0, 0.6)',

				borderWidth:3.5,
				borderColor:'#000',
				hoverBorderWidth:3,
				hoverBorderColor:'#b00909',
				fill: false,
				lineTension: 0,
			},
			{
				label:'Dati Casi Protezione civile',
				data:dataP1.reverse(),
				backgroundColor:'rgba(24, 163, 11, 0.6)',
				borderWidth:3.5,
				borderColor:'#18a30b',
				hoverBorderWidth:3,
				hoverBorderColor:'#18a30b',
				fill: false,
				lineTension: 0,
			}
			]
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
			text:'Confronto dati tra I.S.S. e Protezione Civile: Casi',
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
			}
			
	}
};


var chart1 = new Chart(ctx1, boh1)

var datas3 = getDatiP2();
var datas4 = getDatiI2();

var labels = datas3.map(function(e){
	return e.Data.replace("T00:00:00.000Z", "");
});

var dataP2 = datas3.map(function(e){
	return e.Deceduti;
});

var dataI2 = datas4.map(function(e){
	return e.Deceduti;
});

var ctx2 = myChart2.getContext('2d');

var boh2 = {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels.reverse(),
	datasets:[{
		label:'Dati Morti ISS',
		data:dataI2.reverse(),
		backgroundColor:'rgba(0, 0, 0, 0.6)',

		borderWidth:3.5,
		borderColor:'#000',
		hoverBorderWidth:3,
		hoverBorderColor:'#b00909',
		fill: false,
		lineTension: 0,
	},
	{
		label:'Dati Morti Protezione civile',
		data:dataP2.reverse(),
		backgroundColor:'rgba(24, 163, 11, 0.6)',
		borderWidth:3.5,
		borderColor:'#18a30b',
		hoverBorderWidth:3,
		hoverBorderColor:'#18a30b',
		fill: false,
		lineTension: 0,
	}
	]
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
	text:'Confronto dati tra I.S.S. e Protezione Civile: Morti',
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
	}
	
}
};

var chart2 = new Chart(ctx2, boh2)

}