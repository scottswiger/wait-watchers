import Chart from 'chart.js/auto'

const ctx = document.getElementById('myChart');
                  
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'Macro Breakdown',
      data: [4, 11, 3, 5, 2, 6, 5],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
