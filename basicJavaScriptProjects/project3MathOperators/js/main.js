//ADDITION//
function addition() {
    var add = 31+34; //addition math operation//
    document.getElementById("math").innerHTML = add; // will print result of var = - did not include eqaution as it is in the HTML//
}
//SUBTRACTION//
function subtract() { 
    var sub = 12-4; //subtraction math operation//
    document.getElementById("mathSub").innerHTML= "12 - 4 = " + sub; // will print math operation plus result when p id="math" is clicked//
}
//MULTIPLICATION//
function multiplication() { 
    var multiply= 14*132; //multiplication math operation//
    document.getElementById("mathMult").innerHTML = "14 x 132 = " + multiply;  // will change button id="mathMult" text to math operation onclick//
}

//DIVISION//
function division() {
    var divide = 12/4; //division math operation//
    document.getElementById("mathDiv").innerHTML = divide; //will display result in p id="mathDiv" onmouseover , p already features equation//
}

//MULTIPART EQUATION//
function equation() {
    var math = (17+43) *16/3-26; //multipart equation, first part in parentheses to ensure it is calculated correctly. otherwise follows order of operations and would perform addition after the multiplication and division.//
    document.getElementById("longMath").innerHTML= "17 plus 43, times 16, divided by 3, minus 26 =" + math; //written problem and result, displayed in HTML onclick p id="mathLong"//
}

//MODULUS OR REMAINDER//
function modulus() {
    var rem= 1928%42;
    document.getElementById("remainder").innerHTML= rem;
}

//NEGATION//
function negation() {
    var neg = 62;
    document.getElementById("negative").innerHTML = -neg;
}

//INCREMENT//
function increment() {
var inc= 5;
inc++;
document.getElementById("plusOne").innerHTML= inc;
}

//DECREMENT//
function decrement(){
var dec= 10.15;
dec--;
document.getElementById("minusOne").innerHTML=dec;
}

// RANDOM NUMBER ALERT//
window.alert(Math.random());
window.alert(Math.random()*52);

//MATH OBJECTS - STATIC OPTIONS - THESE NUMBERS DO NOT CHANGE IE. Math.PI - displays PI, etc.//
function mathObject(){
    var mathLog= Math.LOG10E; // returns base 10 logarithm of E//
    document.getElementById("object").innerHTML= mathLog; // returns base 10 logarithm of E//
}

//RANDOM NUMBER MULTIPLICATION//
function randomMath(){
    var rand= Math.floor(Math.random()*101); //Math.floor with Math.random returns a round number, put 101 because it does not include the number listed- this offers a random number between 0-100;
    document.getElementById("random").innerHTML = rand; //returns round random number when button id="random" is clicked //
}