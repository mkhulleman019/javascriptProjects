function myFunction() { //function name//
var str = "This is some text!" ;//main text//
var result = str.fontcolor("pink");//var color on click//
document.getElementById("pink_Text").innerHTML = result ; //execute function//
}

function myFunction2() { //second function//
    var sentence = "I am learning"; // text//
    sentence += " JavaScript in this course."; //this concatenates the sentence//
    document.getElementById("concatenate").innerHTML = sentence; //executes function when clicked in HTML//
}