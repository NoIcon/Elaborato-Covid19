
window.onload = function(){
var myChart1 = document.getElementById('myChart1').getContext('2d');

// Global Options
// Chart.defaults.global.defaultFontFamily = 'Times New Roman';
// Chart.defaults.global.defaultFontSize = 15;
// Chart.defaults.global.defaultFontColor = '#777';

window.boh1 = new Chart(myChart1, {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
	datasets:[{
	label:'Dati morti ISS',
	data:[
		619,
		184,
		156,
		165,
		1051,
		907
	],
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
		label:'Dati morti Protezione civile',
		data:[
			907,
			619,
			1050,
			184,
			165,
			156
		],
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
});

var myChart2 = document.getElementById('myChart2').getContext('2d');

// Global Options
// Chart.defaults.global.defaultFontFamily = 'Times New Roman';
// Chart.defaults.global.defaultFontSize = 15;
// Chart.defaults.global.defaultFontColor = '#777';

var boh2 = new Chart(myChart2, {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
	datasets:[{
	label:'Dati casi ISS',
	data:[
		619,
		184,
		156,
		165,
		1051,
		907
	],
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
		label:'Dati casi Protezione civile',
		data:[
			907,
			619,
			1050,
			184,
			165,
			156
		],
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
});
}