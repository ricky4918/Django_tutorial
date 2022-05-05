// for conditions
var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height? ")
var petName = prompt("What is your pet name? ")
alert("Thank you so much for the information!")




var nameCond = null;
var ageCond = null;
var heightCond = null;
var petnameCond = null;


if (firstName[0] === lastName[0]){
  nameCond = true;
}
else {
  nameCond = false;
}



if(age>20&&age<30){
  ageCond = true;
}
else {
  ageCond = false;
}

if(height>=170){
  heightCond = true;
}
else {
  heightCond = false;
}

if(petName[petName.length-1] === "y"){
  petnameCond = true;
}
else {
  petnameCond = false;
}


if (nameCond && ageCond && heightCond && petnameCond) {
  console.log("WELCOME SPY!");
}
else {
  console.log("Nothing to see here");
}
