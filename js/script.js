// Get the element where to insert the year
let yearElement = document.getElementById("anno");

// Get the current year
let yearCurrent = new Date().getFullYear();

// Enter the year in the footer
yearElement.textContent = yearCurrent;