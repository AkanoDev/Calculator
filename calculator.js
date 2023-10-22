 //when the page is loaded, get the calculation using .getItem
 let calculation = localStorage.getItem("calculation") || "";
 //default value if a calculation doesn't exist in localstorage
 function updateCalculation(value) {
   calculation += value;
   displayCalculation();
   localStorage.setItem("calculation", calculation);
 }

 function saveCalculation() {
   localStorage.setItem("calculation", calculation);
 }

 function displayCalculation() {
   document.querySelector(".showCalculation").innerHTML = calculation;
 }