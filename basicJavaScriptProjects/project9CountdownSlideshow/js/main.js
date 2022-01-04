//Countdown Timer//
function secondsTimer() {
    var seconds = document.getElementById("seconds").value; //pulls number entered by user to start countdown//

    function tick() {
        seconds = seconds -1; //Goes down 1 second at a time//
        secondCountdown.innerHTML = seconds;
        var time = setTimeout(tick, 1000);//pauses countdown 1000 milliseconds at a time or 1 second//
        if(seconds == -1) {
            alert("Time's Up!"); //Sets alert at 0//
            clearTimeout(time);
            secondCountdown.innerHTML = ""; //puts the countdown timer at p id="secondCountdown"//
        }
    }
    tick();
}




// ----------------- SLIDESHOW ------------------//
var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous Controls //
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Image Controls //
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
