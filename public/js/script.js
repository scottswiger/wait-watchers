const todayDate = new Date();
const calories = document.getElementById('calorie-display');
const water = document.getElementById('total-water');
const exercise = document.getElementById('total-exercise');
const subBreakfastCalButton = document.getElementById('submit-calorie-button');
const subLunchCalButton = document.getElementById('submit-calorie-button-lunch');
const subDinnerCalButton = document.getElementById('submit-calorie-button-dinner');
const subSnackCalButton = document.getElementById('submit-calorie-button-snack');
const subWaterButton = document.getElementById('submit-water');
const subExerciseButton = document.getElementById('submit-calorie-button-exercise');
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();
let formattedDate = `${month}-${day}-${year}`;
const dateElement = document.getElementById('date')

// tcc stands for total calorie count
let tcc = localStorage.getItem('calories');
calories.innerHTML = tcc;

let totalWaterOunces = localStorage.getItem('water');
water.innerHTML = totalWaterOunces;

let totalExercise = localStorage.getItem('exercise');
exercise.innerHTML = totalExercise;



function refreshCalorieCounter() {
  tcc = localStorage.getItem('calories');
  location.reload();
}

function refreshWater() {
  totalWaterOunces = localStorage.getItem('water');
  location.reload();
}

function refreshExercise() {
  totalExercise = localStorage.getItem('exercise');
  location.reload();
}
// add food and calories buttons

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

subWaterButton.addEventListener('click', function(event) {
  event.preventDefault();
  let h20sub = Number(document.getElementById('water-ounces').value);
  let ounces = h20sub;
  console.log(ounces);
  let currentH20 = Number(localStorage.getItem('water'));
  ounces += currentH20;
  console.log(`You have accrued this amount of water: ${ounces}`);
  localStorage.setItem('water', ounces);
  refreshWater();
})

subExerciseButton.addEventListener('click', function(event) {
  event.preventDefault();
  let exerciseCal = Number(document.getElementById('exercise-calories').value);
  let burn = exerciseCal;
  console.log(burn);
  let currentExercise = Number(localStorage.getItem('exercise'));
  burn += currentExercise;
  console.log(`You have burned: ${burn}`);
  localStorage.setItem('exercise', burn);
  refreshExercise();
})



// setting up modals

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

const wModal = document.getElementById('water-modal');
const waterButton = document.getElementById('add-water');
let wspan = document.getElementById("wclose");

const eModal = document.getElementById('exercise-modal');
const exerciseButton = document.getElementById('add-exercise-button');
let espan = document.getElementById("eclose");





dateElement.innerHTML = formattedDate;

// firing modals

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

waterButton.onclick = function() {
  wModal.style.display = "block";
}
wspan.onclick = function() {
  wModal.style.display = "none";
}

exerciseButton.onclick = function() {
  eModal.style.display = "block";
}
espan.onclick = function() {
  eModal.style.display = "none";
}




