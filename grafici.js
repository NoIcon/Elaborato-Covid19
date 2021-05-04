let myChart2 = document.getElementById('myChart2').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Times New Roman';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart2, {
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
