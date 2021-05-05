window.onload = function() {
	var myChart1 = document.getElementById('myChart1').getContext('2d');

// Global Options
// Chart.defaults.global.defaultFontFamily = 'Times New Roman';
// Chart.defaults.global.defaultFontSize = 15;
// Chart.defaults.global.defaultFontColor = '#777';

window.boh = new Chart(myChart1, {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
	datasets:[{
	label:'Casi Giornalieri',
	data:[
		6194,
		1845,
		1560,
		16519,
		10516,
		9072
	],
	//backgroundColor:'green',
	backgroundColor:[
		'rgba(179, 2, 2, 0.6)',
	],
	borderWidth:1,
	borderColor:'#777',
	hoverBorderWidth:3,
	hoverBorderColor:'#b00909'
	}]
},
options:{
	title:{
	display:true,
	text:'Casi giornalieri',
	fontSize:30,
	},
	legend:{
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

window.boh2 = new Chart(myChart2, {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
	datasets:[{
	label:'Morti Giornalieri',
	data:[
		619,
		184,
		156,
		165,
		1051,
		907
	],
	//backgroundColor:'green',
	backgroundColor:[
		'rgba(0, 0, 0, 0.6)',
	],
	borderWidth:1,
	borderColor:'#777',
	hoverBorderWidth:3,
	hoverBorderColor:'#b00909'
	}]
},
options:{
	title:{
	display:true,
	text:'Morti giornalieri',
	fontSize:30,
	},
	legend:{
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

var myChart3 = document.getElementById('myChart3').getContext('2d');

// Global Options
// Chart.defaults.global.defaultFontFamily = 'Times New Roman';
// Chart.defaults.global.defaultFontSize = 15;
// Chart.defaults.global.defaultFontColor = '#777';

var bo3 = new Chart(myChart3, {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
	datasets:[{
	label:'Guariti Giornalieri',
	data:[
		90700,
		61900,
		105100,
		18400,
		16500,
		15600
	],
	backgroundColor:[
		'rgba(15, 176, 0, 0.6)',
	],
	borderWidth:1,
	borderColor:'#777',
	hoverBorderWidth:3,
	hoverBorderColor:'#b00909'
	}]
},
options:{
	title:{
	display:true,
	text:'Guariti giornalieri',
	fontSize:30,
	},
	legend:{
	display:true,
	position:'bottom',
	labels:{
		fontColor:'#0fb000'
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