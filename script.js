// Ottawa Summer Food & Cultural Fair (Demo)
// Countdown Timer

const countdown = document.getElementById("countdown");

// Festival date (July 10, 2026 at 9:00 AM)
const eventDate = new Date("July 10, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "🎉 The Festival Has Started!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);