// const { Chart } = require("chart.js")
// let water = require('./script',totalWaterOunces)
// console.log("this is water for total Water Ounces")

// let exercise = require(totalExercise)

// const ctx = document.getElementById('myChart');         
// new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//     datasets: [{
//       label: 'Macro Breakdown',
//       data: [2, 5, 8, 5, 7, 11, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });


//water Chart and function
const waterChart = document.getElementById('myChart2');         
new Chart(waterChart, {
  type: 'bar',
  data: {
    labels: ['Today',],
    datasets: [{
      label: 'Water Intake',
      data: [window.localStorage.getItem('water')],
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

// exercise Chart and function
const exChart = document.getElementById('myChart3'); 
new Chart(exChart, {
  type: 'bar',
  data: {
    labels: ['Today',],
    datasets: [{
      label: 'Calories Burned',
      data: [window.localStorage.getItem('exercise')],
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

const lbsChart = document.getElementById('myChart4'); 
new Chart(lbsChart, {
  type: 'line',
  data: {
    labels: ['Today','Tomorrow','Nextday','Days'],
    datasets: [{
      label: 'Lbs',
      data: [200,167,199,88],
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