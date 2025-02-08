document.addEventListener("DOMContentLoaded", function () {
    // Update Year in Footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Update Last Modified Date
    document.getElementById("lastModified").textContent = document.lastModified;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
        } else {
            return "N/A";
        }
    }

    // Static Weather Data
    const temperature = parseFloat(document.getElementById("temp").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

    // Display Wind Chill
    document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed) + "°C";
});

// Get the current year and set it in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and set it in the footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
