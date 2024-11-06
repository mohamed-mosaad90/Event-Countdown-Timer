let eventDate = new Date("2024-12-31T23:59:59").getTime(); // Default event date
let interval; // Variable to store the countdown interval

function countdown() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;
    if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        document.getElementById("countdown").innerHTML = "<h2>Event Started!</h2>";
        clearInterval(interval);
    }
}
function startCountdown() {
    clearInterval(interval);
    interval = setInterval(countdown, 1000);
}
document.getElementById("edit-button").addEventListener("click", () => {
    document.getElementById("edit-section").classList.toggle("hidden");
});
document.getElementById("start-button").addEventListener("click", () => {
    const userDate = document.getElementById("new-event-time").value;
    if (userDate) {
        eventDate = new Date(userDate).getTime();
        startCountdown();
        document.getElementById("edit-section").classList.add("hidden");
    } else {
        alert("Please select a date and time for the event.");
    }
});

startCountdown();
