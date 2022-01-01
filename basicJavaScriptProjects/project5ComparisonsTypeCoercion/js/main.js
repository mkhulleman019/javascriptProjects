//TYPE OF OPERATOR//
document.write("TYPES OF OPERATORS");//SECTION TITLE//
    document.write("<br><br>");//line breaks//
document.write(typeof "WORD"); //typeof operator for 'string'//
    document.write ("<br><br>")//line breaks//
document.write(typeof 15); //typeof operator for string//
    document.write("<br><br>")//line breaks//
document.write(typeof true);//typeof operator boolean//
    document.write("<br><br>")//line breaks//
    document.write("<br><br>")//line breaks//



//TYPE COERCION//
document.write("TYPES OF COERCION");//SECTION TITLE//
    document.write("<br><br>");//line breaks//
document.write("40" + 15); //45 is written as a string value and will add 15 to then end of the string//
    document.write("<br><br>");//line breaks//
document.write("Olivia" + 5);// another string value with a number, will display Olivia5//
    document.write("<br><br>");//line breaks//
    document.write("<br><br>")//line breaks//



//NaN TESTS -DISPLAYED VIA P ONCLICK IN HTML//
function nanTest(){
    document.getElementById("nan").innerHTML= 0/0; //returns NaN//
    document.getElementById("trueNAN").innerHTML= isNaN("WORDS!"); //returns true//
    document.getElementById("falseNAN").innerHTML= isNaN("12345");//returns false//
}



//INFINITY & -INFINITY//
document.write("INFINITY AND -INFINITY");//SECTION TITLE//
    document.write("<br><br>");//line breaks//
document.write(3E1027);//INFINITY//
    document.write("<br><br>");//line breaks//
document.write(-2E18472);//-INFINITY//
    document.write("<br><br>");//line breaks//
    document.write("<br><br>")//line breaks//


//BOOLEANS//
document.write("BOOLEANS");//SECTION TITLE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10>=9); //DISPLAYS TRUE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10>=11); //DISPLAYS FALSE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10==10); //DISPLAYS TRUE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10==11); //DISPLAYS FALSE//
    document.write("<br><br>"); //LINE BREAKS//
    document.write("<br><br>")//line breaks//


//COMPARING DATA TYPES AND VALUES//
document.write("COMPARING DATA TYPES AND VALUES");//SECTION TITLE//
    document.write("<br><br>"); //LINE BREAKS//

var a= "Hello"; //Return true by ensuring to match the data type and value//
var b="Hello";
document.write(a===b);
    document.write("<br><br>"); //LINE BREAKS//]

var c= 10;//Return false by writing a different data type and different value.//
var d= "Ten";
document.write(c===d);
    document.write("<br><br>"); //LINE BREAKS//

var e= 10;//Return false by writing a different data type but the same value for both.//
var f= "10";
document.write(e===f);
    document.write("<br><br>"); //LINE BREAKS//

var g=10; //Return false by writing the same data type but a different value for both.//
var h=11;
document.write(g===h);
    document.write("<br><br>"); //LINE BREAKS//
    document.write("<br><br>")//line breaks//

// AND OR COMPARISONS //
document.write("AND OR COMPARISONS");//SECTION TITLE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10>2 && 5>1); //AND COMPARISON - TRUE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10>3 && 3>10); //AND COMPARISON - FALSE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(10>1 || 1>10); // OR COMPARISON - TRUE//
    document.write("<br><br>"); //LINE BREAKS//
document.write(1>2 || 4<3); //OR COMAPRISON - FALSE//
    document.write("<br><br>"); //LINE BREAKS//
    document.write("<br><br>")//line breaks//

//NOT COMPARISONS - DIPLAYED VIA ONCLICK P IN HTML//
function notComp() { //TRUE//
    document.getElementById("not").innerHTML = !(20>30); //Returns true (20 is NOT greater than 30)//
}

function notNot() { //FALSE//
    document.getElementById("false").innerHTML = !(20<30); //Returns false (20 IS greater than 30)//
}



//CONSOLE LOGS//
console.log(2+2);
console.log(1>2); //BOOLEAN CONSOLE LOG - FALSE//
