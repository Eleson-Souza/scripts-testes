google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Dogs');
  data.addColumn('number', 'Cats');

  data.addRows([
    [0, 0, 0], 
    [1, 10, 5], 
    [2, 23, 15], 
    [3, 17, 9], 
    [4, 18, 10], 
    [5, 9, 5],
    [6, 11, 3], 
    [7, 27, 19], 
    [8, 33, 25]
  ]);

  var options = {
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Popularity'
    },
    series: {
      1: { curveType: 'function' }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}