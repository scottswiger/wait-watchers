const todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();
let formattedDate = `${month}-${day}-${year}`;
const dateElement = document.getElementById('date')

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




