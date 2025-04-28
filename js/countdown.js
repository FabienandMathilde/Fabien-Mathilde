// countdown.js

const targetDate = new Date('2026-05-11T00:00:00').getTime();
const countdown = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        countdown.innerHTML = "C'est le grand jour ! 🎉";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
