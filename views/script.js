const todayDate = new Date();
let day = todayDate.getDate();
let month = todayDate.getMonth() + 1;
let year = todayDate.getFullYear();
let formattedDate = `${month}-${day}-${year}`;
const dateElement = document.getElementById('date')

dateElement.innerHTML = formattedDate;


