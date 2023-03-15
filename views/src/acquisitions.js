// const { Chart } = require("chart.js")

const ctx = document.getElementById('myChart');         
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'Macro Breakdown',
      data: [2, 5, 8, 5, 7, 11, 3],
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