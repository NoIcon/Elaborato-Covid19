function getDati1(){
	var datas1; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/previsioniCasiGiornalieri",
		success: function(dati){	
		datas1 = dati;	
		return dati;
	}});

	for(var i=0;i<datas1.length;i++){
		if(datas1[i]['Valore'] < 0)
			datas1[i]['Valore'] = 0;
	}
	console.log("CIAO");
	console.log(datas1);
	return datas1;
}

function getDati2(){
	var datas2; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/previsioniCasi",
		success: function(dati){	
		datas2 = dati;
		return datas2;
	}});

	return datas2;
}

function getDati3(){
	var datas3; 
	$.ajax({
		async: false,
		url: "https://api.elaborato-covid19.com/previsioniMorti",
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
	
	var data1 = datas1.map(function(e){
		return e.Valore;
	});

	var data2 = datas1.map(function(e){
		return e.ValoreMin;
	});


	var data3 = datas1.map(function(e){
		return e.ValoreMax;
	});


	var ctx1 = myChart1.getContext('2d');

	window.boh = {
	  type: "bar",
	  data: {
		labels: labels,
		datasets: [
		  {
			label: "Line",
			type: "line",
			backgroundColor: "rgb(75, 192, 192, 0.5)",
			borderColor: "rgb(75, 192, 192)",
			hoverBorderColor: "rgb(175, 192, 192)",
			fill: false,
			tension: 0,
			data: data1,
			yAxisID: 'y',
			xAxisID: 'x'
		  },
		  {
			label: "BandTop",
			type: "line",
			backgroundColor: "rgb(75, 192, 255, 0.5)",
			borderColor: "transparent",
			pointRadius: 0,
			fill: 0,
			tension: 0,
			data: data3,
			yAxisID: 'y',
			xAxisID: 'x'
		  },
		  {
			label: "BandBottom",
			type: "line",
			backgroundColor: "rgb(75, 192, 255, 0.5)",
			borderColor: "transparent",
			pointRadius: 0,
			fill: 0,
			tension: 0,
			data: data2,
			yAxisID: 'y',
			xAxisID: 'x'
		  }
		  
		]
	  },
	  options: {
		scales: {
		  xAxes: [{
			id: 'x',
			type: 'category'
		  }],
		  yAxes: [{
			display: true,
			id: 'y',
			type: 'linear',
			position: "left",
			ticks: {
			  
			}
		  }]
		}
	  }
	};
	

var chart1 = new Chart(ctx1, boh)


var datas2 = getDati2();

	console.log(datas2);
	
	var data1 = datas2.map(function(e){
		return e.Valore;
	});

	var data2 = datas2.map(function(e){
		return e.ValoreMin;
	});


	var data3 = datas2.map(function(e){
		return e.ValoreMax;
	});


	var ctx2 = myChart2.getContext('2d');


	window.boh2 = {
		type: "bar",
	  data: {
		labels: labels,
		datasets: [
		  {
			label: "Line",
			type: "line",
			backgroundColor: "rgb(75, 192, 192, 0.5)",
			borderColor: "rgb(75, 192, 192)",
			hoverBorderColor: "rgb(175, 192, 192)",
			fill: false,
			tension: 0,
			data: data1,
			yAxisID: 'y',
			xAxisID: 'x'
		  },
		  {
			label: "BandTop",
			type: "line",
			backgroundColor: "rgb(75, 192, 255, 0.5)",
			borderColor: "transparent",
			pointRadius: 0,
			fill: 0,
			tension: 0,
			data: data3,
			yAxisID: 'y',
			xAxisID: 'x'
		  },
		  {
			label: "BandBottom",
			type: "line",
			backgroundColor: "rgb(75, 192, 255, 0.5)",
			borderColor: "transparent",
			pointRadius: 0,
			fill: 0,
			tension: 0,
			data: data2,
			yAxisID: 'y',
			xAxisID: 'x'
		  }
		  
		]
	  },
	  options: {
		scales: {
		  xAxes: [{
			id: 'x',
			type: 'category'
		  }],
		  yAxes: [{
			id: 'y',
			type: 'linear',
			position: "left",
			ticks: {
			}
		  }]
		}
	  }
	};

var chart2 = new Chart(ctx2, boh2)


var datas3 = getDati3();

	console.log(datas3);
	
	var data1 = datas3.map(function(e){
		return e.Valore;
	});

	var data2 = datas3.map(function(e){
		return e.ValoreMin;
	});


	var data3 = datas3.map(function(e){
		return e.ValoreMax;
	});
	var ctx3 = myChart3.getContext('2d');


	var boh3 = {
		type: "bar",
	  data: {
		labels: labels,
		datasets: [
		  {
			label: "Line",
			type: "line",
			backgroundColor: "rgb(75, 192, 192, 0.5)",
			borderColor: "rgb(75, 192, 192)",
			hoverBorderColor: "rgb(175, 192, 192)",
			fill: false,
			tension: 0,
			data: data1,
			yAxisID: 'y',
			xAxisID: 'x'
		  },
		  {
			label: "BandTop",
			type: "line",
			backgroundColor: "rgb(75, 192, 255, 0.5)",
			borderColor: "transparent",
			pointRadius: 0,
			fill: 0,
			tension: 0,
			data: data3,
			yAxisID: 'y',
			xAxisID: 'x'
		  },
		  {
			label: "BandBottom",
			type: "line",
			backgroundColor: "rgb(75, 192, 255, 0.5)",
			borderColor: "transparent",
			pointRadius: 0,
			fill: 0,
			tension: 0,
			data: data2,
			yAxisID: 'y',
			xAxisID: 'x'
		  }
		  
		]
	  },
	  options: {
		scales: {
		  xAxes: [{
			id: 'x',
			type: 'category'
		  }],
		  yAxes: [{
			id: 'y',
			type: 'linear',
			position: "left",
			ticks: {
			}
		  }]
		}
	  }
	};

var chart3 = new Chart(ctx3, boh3)

var datas1 = getDati1();

}