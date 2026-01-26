console.log("JavaScript loaded");
// Select HTML elements
const heading = document.getElementById("title");
const btn = document.getElementById("btn");
const box = document.querySelector(".box");
// Modify text and styles dynamically
heading.textContent = "JavaScript";
heading.style.color = "grey";

// Handle button click events
btn.addEventListener("click", function () {
  console.log("Button clicked");
  box.classList.toggle("active"); // toggle box class on click
});

