function getDati1(){
	var datas1; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliNuoviPos",
		success: function(dati){	
		datas1 = dati;	
		return dati;
	}});

	return datas1;
}

function getDati2(){
	var datas2; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliDeceduti",
		success: function(dati){	
		datas2 = dati;	
		return dati;
	}});

	return datas2;
}

function getDati3(){
	var datas3; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliDimessi",
		success: function(dati){	
		datas3 = dati;	
		return dati;
	}});

	return datas3;
}


window.onload = function() {
	var datas1 = getDati1();

	console.log(datas1);

	var labels = datas1.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});

	//var labelsA = labels.replace("T00:00:00.000Z", "");
	
	var data = datas1.map(function(e){
		return e.NuoviPositivi;
	});

	var ctx1 = myChart1.getContext('2d');


window.boh = {


responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels,
	datasets:[{
	label:'Casi Giornalieri',
	data: data,
	backgroundColor:'rgba(170, 2, 2, 0.6)',
	borderColor: '#a80d0d',
	borderWidth:3.5,
	hoverBorderWidth:3,
	hoverBorderColor:'#b00909',
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
	text:'Casi giornalieri',
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


var datas2 = getDati2();

	console.log(datas2);
	
	var labels = datas2.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});
	
	var data = datas2.map(function(e){
		return e.Deceduti;
	});

	var ctx2 = myChart2.getContext('2d');


window.boh2 = {


responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels,
	datasets:[{
	label:'Morti Giornalieri',
	data: data,
	backgroundColor:'rgba(0, 0, 0, 0.6)',
	borderColor: '#000',
	borderWidth:3.5,
	hoverBorderWidth:3,
	hoverBorderColor:'#b00909',
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
	text:'Morti Giornalieri',
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

var chart2 = new Chart(ctx2, boh2)


var datas3 = getDati3();

	console.log(datas3);
	
	var labels = datas3.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});
	
	var data = datas3.map(function(e){
		return e.Dimessi;
	});

	var ctx3 = myChart3.getContext('2d');


window.boh3 = {


responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels,
	datasets:[{
	label:'Guariti Giornalieri',
	data: data,
	backgroundColor:'rgba(24, 163, 11, 0.6)',
	borderColor: '#18a30b',
	borderWidth:3.5,
	hoverBorderWidth:3,
	hoverBorderColor:'#18a30b',
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
	text:'Guariti Giornalieri',
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

var chart3 = new Chart(ctx3, boh3)

var datas1 = getDati1();
var datas2 = getDati2();
var datas3 = getDati3();


var labels = datas1.map(function(e){
	return e.Data;
});

var data1 = datas1.map(function(e){
	return e.NuoviPositivi;
});

var data2 = datas2.map(function(e){
	return e.Deceduti;
});

var data3 = datas3.map(function(e){
	return e.Dimessi;
});


var ctx4 = myChart4.getContext('2d');

var boh4 = {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels,
	datasets:[{
		label:'Casi Giornalieri',
		data:data1,
		backgroundColor:'rgba(170, 2, 2, 0.6)',
		borderColor: '#a80d0d',
		borderWidth:3.5,
		hoverBorderWidth:3,
		hoverBorderColor:'#b00909',
		fill: false,
		lineTension: 0,
	},
	{
		label:'Morti Giornalieri',
		data:data2,
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
		label:'Guariti Giornalieri',
		data:data3,
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
	text:'Tutte le informazioni',
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

var chart4 = new Chart(ctx4, boh4)

}