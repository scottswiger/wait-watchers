const todayDate = new Date();
const calories = document.getElementById('calorie-display');
const water = document.getElementById('total-water');
const exercise = document.getElementById('total-exercise');
const budget = document.getElementById('calorie-budget');
const subBreakfastCalButton = document.getElementById('submit-calorie-button');
const subLunchCalButton = document.getElementById('submit-calorie-button-lunch');
const subDinnerCalButton = document.getElementById('submit-calorie-button-dinner');
const subSnackCalButton = document.getElementById('submit-calorie-button-snack');
const subWaterButton = document.getElementById('submit-water');
const subExerciseButton = document.getElementById('submit-calorie-button-exercise');
const calculator = document.getElementById('calc-cal-budget');
const remainder = document.getElementById('cal-remain');
const calPerc = document.getElementById('cal-percentage');
const root = document.querySelector(':root');
const saveButton = document.getElementById('save-button');



//date shit
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();
let formattedDate = `${month}-${day}-${year}`;
const dateElement = document.getElementById('date')
dateElement.innerHTML = formattedDate;

// tcc stands for total calorie count
// setting up displays for data from local storage
let tcc = localStorage.getItem('calories');
calories.innerHTML = tcc;

let totalWaterOunces = localStorage.getItem('water');
water.innerHTML = totalWaterOunces;

let totalExercise = localStorage.getItem('exercise');
exercise.innerHTML = totalExercise;

let calorieBudget = localStorage.getItem('calorie-budget');
budget.innerHTML = calorieBudget;

let CalorieRemainingBudget = Number(calorieBudget) - Number(tcc) + Number(totalExercise);
remainder.innerHTML = CalorieRemainingBudget;

let caloriePercentage = (Number(tcc)/Number(CalorieRemainingBudget)) *100;
console.log(caloriePercentage);
let roundedCalPercentage = caloriePercentage.toFixed();
calPerc.innerHTML = roundedCalPercentage;

function snagRoot() {
  let currentProp = getComputedStyle(root);
  let currentPropValue = currentProp.getPropertyValue('--width');
  console.log(currentPropValue);
}
snagRoot();

function changeRoot() {
  let updateProp = roundedCalPercentage + '%';
  root.style.setProperty('--width', updateProp)
  let newProp = getComputedStyle(root);
  let newPropValue = newProp.getPropertyValue('--width');
  console.log(`New prop: ${newPropValue}`);
}

changeRoot();

//refreshing displays
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

function refreshBudget() {
  calorieBudget = localStorage.getItem('calorie-budget');
  location.reload();
}


// submit user data buttions

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
  changeRoot();
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
  changeRoot();
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
  changeRoot();
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
  changeRoot();
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
  changeRoot();
})

calculator.addEventListener('click', function(event){
  event.preventDefault();
  let heightInInches = Number(document.getElementById('height-inches').value);
  console.log(`Height: ${heightInInches}`);
  let ageInYears = Number(document.getElementById('age-years').value);
  console.log(`Age: ${ageInYears}`);
  let weightInPounds =  Number(document.getElementById('weight-pounds').value);
  console.log(`Weight: ${weightInPounds}`);
  let BMR = 66.47 + (6.24*weightInPounds) + (12.7*heightInInches) - (6.75*ageInYears);
  console.log(`BMR: ${BMR}`);
  let roundBMR = BMR.toFixed();
  localStorage.setItem('calorie-budget', roundBMR);
  refreshBudget();
})

saveButton.addEventListener('click', function(event) {
  const response = fetch("/profile", {
    method: 'POST',
    body: JSON.stringify({
       tcc,
       totalWaterOunces,
       totalExercise
    })
  })
  .then((response) => response.json())
  .then((data) => console.log(data));

  if (response.ok) {
    console.log("Get lost fatass")
  } else {
    alert('Winner');
  }

  

  //Make the method POST the data to the backend
  //Stringy the value from the form and send it to the backend

});



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

const budgetmodal = document.getElementById('budget-modal');
const calBudgetButton = document.getElementById('calculate-calories');
let budgetspan = document.getElementById("budget-close");

const weightModal = document.getElementById('weight-modal');
const weightButton = document.getElementById('calculate-calories');



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

calBudgetButton.onclick = function() {
  budgetmodal.style.display = "block";
}
budgetspan.onclick = function() {
  budgetmodal.style.display = "none";
}




