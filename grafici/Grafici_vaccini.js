function getDati1(){
	var datas1; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/datiNazionaliVaccini15gg",
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

function getDati4(){
	var datas4; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/vacciniFascia",
		success: function(dati){	
		datas4 = dati;
		return dati;
	}});

	return datas4;
}

window.onload = function() {
	var datas1 = getDati1();

	console.log(datas1);

	var labels = datas1.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});

	//var labelsA = labels.replace("T00:00:00.000Z", "");
	
	var data = datas1.map(function(e){
		return e.vaccini;
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
	
	var labels = datas1.map(function(e){
		return e.Data.replace("T00:00:00.000Z", "");
	});
	
	var data2 = datas2.map(function(e){
		return e.PrimaDose;
	});

	var data3 = datas3.map(function(e){
		return e.SecondaDose;
	});

	var ctx2 = myChart2.getContext('2d');



window.boh2 = {
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

var datas4 = getDati4();

	console.log(datas4);

	//var labelsA = labels.replace("T00:00:00.000Z", "");
	var labels = datas4.map(function(e){
		return e.Fascia
	})

	var data1 = datas4.map(function(e){
		return e.Dosi;
	});

var ctx3 = myChart3.getContext('2d');

var boh3 = {
	responsive: true,
	type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data:{
		labels: labels,
		datasets:[{
			label:'Vaccini fascie di età',
			data: data1,
			//backgroundColor:'green',
			backgroundColor:[
			'rgba(255, 99, 132, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 205, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(201, 203, 207, 0.2)',
			'rgba(127, 255, 0, 0.2)',
			'rgba(255, 218, 185, 0.2)'
			],
			borderColor: [
				'rgb(255, 99, 132)',
				'rgb(255, 159, 64)',
				'rgb(255, 205, 86)',
				'rgb(75, 192, 192)',
				'rgb(54, 162, 235)',
				'rgb(153, 102, 255)',
				'rgb(201, 203, 207)',
				'rgba(127, 255, 0)',
				'rgba(255, 218, 185)'
			],
			borderWidth: 1
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
			text:'Vaccini fascie di età',
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
			
		}
		
	}
	
	};
	var chart3 = new Chart(ctx3, boh3)

}