// Countdown Timer

const eventDate = new Date("July 27, 2026 10:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance < 0){

        timer.innerHTML="<h2>Now Open!</h2>";

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    timer.innerHTML=`
        <div><span>${days}</span><small>Days</small></div>
        <div><span>${hours}</span><small>Hours</small></div>
        <div><span>${minutes}</span><small>Minutes</small></div>
        <div><span>${seconds}</span><small>Seconds</small></div>
    `;

}

setInterval(updateCountdown,1000);

updateCountdown();


// Navigation Animation

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    header.classList.toggle("scrolled",window.scrollY>50);

});// Hero Slider

const slides=document.querySelectorAll(".slide");

let currentSlide=0;

function nextSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

slides[currentSlide].classList.add("active");

}

setInterval(nextSlide,5000);