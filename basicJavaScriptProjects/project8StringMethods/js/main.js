//Concatenate Strings//
function writeSentence() {
    var part1= "Let's put these ";
    var part2= "words together ";
    var part3= "to form a ";
    var part4=  "a full sentence.";
    var fullSentence = part1.concat(part2, part3, part4); //This concatenates parts 1-4//
    document.getElementById("concatenate").innerHTML= fullSentence; //prints all parts 1-4 concatenated in the order listed in var fullSentence()//
}

//Slice Strings//
function sliceSentence(){
    var sentence = "Fawkes is a very good boy!";
    var partial = sentence.slice(0,6);
    document.getElementById("slice").innerHTML = partial;// returns Fawkes - characters 0-5//
}

//To Upper Case//
function upperFunction() {
    var text1 = document.getElementById("convertUpper").innerHTML;
    document.getElementById("convertUpper").innerHTML=
    text1.toUpperCase(); //Converts text to upper case//
}

//Search Method//
function searchFunction() {
    var text = document.getElementById("locateText").innerHTML;
    document.getElementById("locateText").innerHTML = text.search("Iron Man"); //returns placement value of Iron Man. Since it starts at character 18, this is what will be displayed//
}

//Numbers to String//
function convertToString() {
    var n = 182;
    document.getElementById("numbersToString").innerHTML = n.toString();
}

//To Precision//
function preciseMath() {
    document.getElementById("eightPi").innerHTML = Math.PI.toPrecision(8); //returns the first 8 digits of Pi//
}

//To Fixed//
function piFixed() {
    document.getElementById("fixedPi").innerHTML= Math.PI.toFixed(); //returns Pi with no decimal places, to change number of decimal places enter number in parentheses after toFixed()//
}

//Value Of//
function piValue() {
    document.getElementById("valuePi").innerHTML = Math.PI.valueOf();//returns value pf Pi//
}