function getDati1(){
	var datas1; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliVaccini",
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
		url: "https://api.elaborato-covid19.com/primaDose",
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
		url: "https://api.elaborato-covid19.com/secondaDose",
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
		return e.Somministrazioni;
	});

	var ctx1 = myChart1.getContext('2d');

window.boh = {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels.reverse(),
	datasets:[{
	label:'Vaccini giornalieri',
	data:data.reverse(),
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


var datas2 = getDati2();
var datas3 = getDati3();

	console.log(datas2);
	console.log(datas3);
	
	var labels = datas2.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});
	
	var data2 = datas2.map(function(e){
		return e.PrimaDose;
	});

	var data3 = datas3.map(function(e){
		return e.SecondaDose;
	});

	var ctx2 = myChart2.getContext('2d');



var boh2 = {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:labels.reverse(),
	datasets:[{
	label:'Vaccini prima dose',
	data:data2.reverse(),
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
		label:'Vaccini secoonda dose',
		data:data3.reverse(),
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
	text:'Vaccini prima e seconda dose',
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

// var myChart3 = document.getElementById('myChart3').getContext('2d');

// // Global Options
// // Chart.defaults.global.defaultFontFamily = 'Times New Roman';
// // Chart.defaults.global.defaultFontSize = 15;
// // Chart.defaults.global.defaultFontColor = '#777';

// var boh3 = new Chart(myChart3, {
// responsive: true,
// type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
// data:{
// 	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
// 	datasets:[{
// 	label:'Vaccini secoonda dose',
// 	data:[
// 		90700,
// 		61900,
// 		105100,
// 		18400,
// 		16500,
// 		15600
// 	],
// 	backgroundColor:'rgba(24, 163, 11, 0.6)',
// 	borderWidth:3.5,
// 	borderColor:'#18a30b',
// 	hoverBorderWidth:3,
// 	hoverBorderColor:'#18a30b',
// 	fill: false,
// 	lineTension: 0,
// 	}]
// },
// options:{
// 	scales:{
// 		yAxes:[{
// 			ticks:{
// 				beginAtZero: true
// 			}
			
// 		}]
// 	},
// 	title:{
// 	display:true,
// 	text:'Vaccini secoonda dose',
// 	fontSize:30,
// 	},
// 	legend:{
// 	borderWidth:1,
// 	display:true,
// 	position:'bottom',
// 	labels:{
// 		fontColor:'#000'
// 	}
// 	},
// 	layout:{
// 	padding:{
// 		left:50,
// 		right:50,
// 		bottom:10,
// 		top:10
// 	}
// 	},
// 	tooltips:{
// 	enabled:true
// 	}
// }
// }); 

}