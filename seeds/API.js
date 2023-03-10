const APIkey ="f5ad261067af42d4cf62cf2c5fc0bcfc"

var searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", nutriton);
searchBtn.addEventListener("keypress", nutriton);

var inputBox = document.getElementById("Search");
var foods = "";

var nutriton =
  "https://trackapi.nutritionix.com/v2/" +
  foods +APIkey;

function nutriton() {
    foods = inputBox.value;}

function fectchData(APIkey) {

}


