const todayDate = new Date();
const calories = document.getElementById('calorie-display');
const subBreakfastCalButton = document.getElementById('submit-calorie-button');
const subLunchCalButton = document.getElementById('submit-calorie-button-lunch');
const subDinnerCalButton = document.getElementById('submit-calorie-button-dinner');
const subSnackCalButton = document.getElementById('submit-calorie-button-snack');
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();
let formattedDate = `${month}-${day}-${year}`;
const dateElement = document.getElementById('date')

// tcc stands for total calorie count
let tcc = localStorage.getItem('calories');
calories.innerHTML = tcc;

function refreshCalorieCounter() {
  tcc = localStorage.getItem('calories');
}

subBreakfastCalButton.addEventListener('click', function(event) {
  event.preventDefault();
  let calSub = Number(document.getElementById('breakfast-calories').value);
  let count = calSub;
  calSub.innerHTML = "";
  console.log(count);
  let currentCal = Number(localStorage.getItem('calories'));
  count += currentCal;
  console.log(`This accrued calories: ${count}`);
  localStorage.setItem('calories', count);
  refreshCalorieCounter();
})

subLunchCalButton.addEventListener('click', function(event) {
  event.preventDefault();
  let calSub = Number(document.getElementById('lunch-calories').value);
  let count = calSub;
  calSub.innerHTML = "";
  console.log(count);
  let currentCal = Number(localStorage.getItem('calories'));
  count += currentCal;
  console.log(`This accrued calories: ${count}`);
  localStorage.setItem('calories', count);
  refreshCalorieCounter();
})

subDinnerCalButton.addEventListener('click', function(event) {
  event.preventDefault();
  let calSub = Number(document.getElementById('dinner-calories').value);
  let count = calSub;
  calSub.innerHTML = "";
  console.log(count);
  let currentCal = Number(localStorage.getItem('calories'));
  count += currentCal;
  console.log(`This accrued calories: ${count}`);
  localStorage.setItem('calories', count);
  refreshCalorieCounter();
})

subSnackCalButton.addEventListener('click', function(event) {
  event.preventDefault();
  let calSub = Number(document.getElementById('snack-calories').value);
  let count = calSub;
  calSub.innerHTML = "";
  console.log(count);
  let currentCal = Number(localStorage.getItem('calories'));
  count += currentCal;
  console.log(`This accrued calories: ${count}`);
  localStorage.setItem('calories', count);
  refreshCalorieCounter();
})






const bModal = document.getElementById('breakfast-modal');
const breakfastButton = document.getElementById('add-breakfast');
let bspan = document.getElementById("bclose");

const lModal = document.getElementById('lunch-modal');
const lunchButton = document.getElementById('add-lunch');
let lspan = document.getElementById("lclose");

const dModal = document.getElementById('dinner-modal');
const dinnerButton = document.getElementById('add-dinner');
let dspan = document.getElementById("dclose");

const sModal = document.getElementById('snack-modal');
const snackButton = document.getElementById('add-snack');
let sspan = document.getElementById("sclose");





dateElement.innerHTML = formattedDate;


breakfastButton.onclick = function() {
  bModal.style.display = "block";
}
bspan.onclick = function() {
  bModal.style.display = "none";
}

lunchButton.onclick = function() {
  lModal.style.display = "block";
}
lspan.onclick = function() {
  lModal.style.display = "none";
}

dinnerButton.onclick = function() {
  dModal.style.display = "block";
}
dspan.onclick = function() {
  dModal.style.display = "none";
}

snackButton.onclick = function() {
  sModal.style.display = "block";
}
sspan.onclick = function() {
  sModal.style.display = "none";
}




