//GLOBAL VARIABLE//
var x = 12 //Variable is outside of the function//
function addOne() {
    document.write (x + 1 + "<br>");
}
function addTwo(){
    document.write (x + 2+ "<br>");
}
addOne();
addTwo();


//LOCAL VARIABLE//
function localAdd() {
    var y= 14; //Variable is inside the function//
    document.write(y + 1 +"<br>");
}
localAdd();


//CONSOLE LOG ERROR//
function logAdd(){
    var z= 16; //local variable, can only be access by this function//
    console.log(z + 1);
}
function logError(){
    console.log(z +1);//Variable is local, cannot be accessed by logError(), will return error "z is undefined" in console log.// 
}
logAdd();
logError();

//IF STATEMENTS//
function getDate(){
    if (new Date().getHours() < 12) { //hours are in military time so this is noon//
        document.getElementById("greeting").innerHTML = "Good Morning!";
    }
}
//My Own IF Statement Challenge//
function getYear(){
    if (new Date().getFullYear()== 2022){
        document.getElementById("newYear").innerHTML= "Welcome to 2022!"
    }
}


//IF ELSE STATEMENT//
function freezingFunction(){
    temp = document.getElementById("temp").value 
    if (temp >= 32) {
        above = "Awesome! It is above freezing.";
    }
    else{
        above = "Too bad! It is freezing.";
    }
    document.getElementById("tempFreeze").innerHTML= above;
}


//Else If Statement//
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0){
        reply = "Good Morning!";
    }
    else if (time >= 12 == time <= 18) {
        reply = "Good Afternoon!";
    }
    else {
        reply = "Good Evening!";
    }
    document.getElementById("timeOfDay").innerHTML = reply; 
}