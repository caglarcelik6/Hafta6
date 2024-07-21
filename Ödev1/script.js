// Function to show the current time and date
function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.toLocaleString('tr-TR', { weekday: 'long' });
    let dateString = date.toLocaleDateString('tr-TR');

    // Pad single digit minutes and seconds with a leading zero
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("myClock").innerText = day + ", " + dateString + " - " + time;
    document.getElementById("myClock").textContent = day + ", " + dateString + " - " + time;

    setTimeout(showTime, 1000);
}

// Prompt user for their name and display it
function askName() {
    let userName = prompt("Lütfen isminizi giriniz:");
    if (userName) {
        document.getElementById("myName").innerText = userName;
        document.getElementById("myName").textContent = userName;
    } else {
        askName();
    }
}

// Run the functions when the page loads
window.onload = function() {
    askName();
    showTime();
}
