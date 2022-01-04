//RIDE FUNCTION//
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}

//VOTE FUNCTION//
function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("vote").innerHTML = canVote +" to vote.";
}

// VEHICLE OBJECT CONSTRUCTOR FUNCTION //
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model= model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jack = new vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML =
    "Erik drives a " + Erik.vehicle_color +"-colored " + Erik.vehicle_model +
    " manufactured in " + Erik.vehicle_year;
}

//COMPUTER OBJECT CONSTRUCTOR FUNCTION//
function computer(brand, model, color) {
    this.computer_brand = brand;
    this.computer_model = model;
    this.computer_color = color;
}
var Brad = new computer("Dell","Inpiron","Black");
var Olivia = new computer ("Lenovo", "ThinkPad", "Silver");
var MaKayla = new computer("MacBook","Air", "Rose Gold");
function natFunction(){
    document.getElementById("newAndThis").innerHTML=
    "MaKayla has a " + MaKayla.computer_brand + MaKayla.computer_model
    + " that is " + MaKayla.computer_color;
}

//RESERVED WORDS OBJECT CONSTRUCTOR FUNCTION
//function movie(title, mainCharacter, year) {//
    //this.movie_title = title;//
    //this.movie_mainCharacter = mainCharacter;//
    //this.movie_year = year;//
//}
//var Tangled = ("Tangled","Rapunzel", 2010);//
//var Encanto = ("Encanto", "Mirabel", 2021);//
//var BigHero6 = ("Big Hero 6", "Hiro Hamada", 2014);//
//function finally(){// //"Finally" is a reserved word in JS, using this as a function name causes none of the JS to work//
   // document.getElementById("resWord").innerHTML=//
   // Encanto.movie_title + " is a Disney Movie released in " //
  //  + Encanto.movie_year + ". The main character's name is " //
   // + Encanto.movie_mainCharacter + ".";//
//}//

//NESTED FUNCTIONS//
function countingNumbers() {
    document.getElementById("nestedFunction").innerHTML = count();
    function count() {
        var startingPoint = 9;
        function plusOne() {startingPoint += 1;}
        plusOne();
        return startingPoint;
    }
}