var myChart1 = document.getElementById('myChart1').getContext('2d');

var boh1 = new Chart(myChart1																																																																																	, {
responsive: true,
type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
data:{
	labels:['01/05', '02/05', '03/05', '04/05', '05/05', '06/05'],
	datasets:[{
		label:'Vaccinati totali',
		data:[
			6194,
			1845,
			1560,
			16519,
			10516,
			9072
		],
		backgroundColor:'rgba(13, 155, 168, 0.6)',
		borderColor: '#0d9ba8',
		borderWidth:3.5,
		hoverBorderWidth:3,
		hoverBorderColor:'#0d9ba8',
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
	text:'Vaccinati',
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
