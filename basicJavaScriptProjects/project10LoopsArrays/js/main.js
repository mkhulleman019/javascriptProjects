//While Loop//
function callLoop() {
    var countDown = ""
    var x = 3;
    while (x>0){
    countDown += "<br>" + x;
    x--;    
    } 
    document.getElementById("loop").innerHTML = countDown; // this will print the value of x while it is greater than 0//  
} 

//String Length//
function strLength(){
    var text = "Marvel is better than DC";
    document.getElementById("string").innerHTML = text.length; //this will print the length of the string in var text//
}

//For Loop//
var characters = ["Iron Man", "Captain America", "Hulk", "Thor", "Black Widow", "Hawkeye"];
var content = "";
var x;
function marvelLoop() {
    for(x = 0; x <characters.length; x++){
    content += characters[x] + "<br>";
    }
    document.getElementById("marvel").innerHTML = content;
}

//Array//
function assignCharacter() {
    var Marvel = ["Iron Man", "Captain America", "Hulk", "Thor", "Black Widow", "Hawkeye"]; // List array this way rather than Marvel[1]= Iron Man, etc. in order to perform the math random operator. I wanted a randomized character rather than the same one every time.//
    document.getElementById("character").innerHTML = "You are " + Marvel[Math.floor(Math.random()*Marvel.length)] + "!"; //Marvel[Math.floor(Math.random()*Marvel.length)] is performing math random on the number of items(Marvel.length) to randomly choose index of Marvel[]//
}

//Constant//
function constantFunction() {
    const hero = {suitColor:"red and gold ", power:"intelligence ", fate:"sacrifices himself to defeat Thanos"}; //defining properites of the object hero//
    hero.name = "Iron Man "; //including name in object//
    document.getElementById("constant").innerHTML= hero.name + "uses his " + hero.power + "and " + hero.fate + "."; //This will produce a string that states the hero's name, that they used their power, and their fate// 
}

// Let Keyword //
function letKey(){
    var x = "Repeat ";
    document.getElementById("letKW").innerHTML = x;
    {
        let x= "Break "; //Only changing the value of x for this block of code//
        document.getElementById("letKW1").innerHTML = x; // updated p id to include numbers 1 and 2 to display all 3 lines, would only display last value before updating p ids//
    }
    document.getElementById("letKW2").innerHTML = x; // since let is only in the block above, it cannot be accessed by this line of code, it will display the var value for x// 
}

//Return Statement//
document.getElementById("ret1").innerHTML = myFunction("Starlord");
function myFunction(name) {
    return "Welcome, " + name + "!";
}

//Let Object//

let suit = {
    hero: "Iron Man",
    model: "Mark LXXXV",
    color: "red and gold",
    powerMethod: "arc reactor",
    description: function() {
        return this.hero + "'s suit is a " + this.color + " " + this.model +" powered by an " + this.powerMethod +".";
    }
};
document.getElementById("letObj").innerHTML = suit.description();

//Break and Continue Loop//
    //Break Loop//
let text = ""
for (let i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "The number is " + i + ".<br>";
    document.getElementById("brLoop").innerHTML = text;
};


    //Continue Loop//
let text1 = ""
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue; }
    text1 += "The number is " + i + ".<br>";
    document.getElementById("contLoop").innerHTML = text1;
};