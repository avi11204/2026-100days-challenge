// ================================
// 100 DAYS OF EXPLORATION
// DAY 1
// ================================


// -------------------------------
// THEME TOGGLE
// -------------------------------

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


// -------------------------------
// START DAY BUTTON
// -------------------------------

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.getElementById("challenges").scrollIntoView({
        behavior: "smooth"
    });

});


// -------------------------------
// DAY 1 COMPLETION
// -------------------------------

const completeBtn = document.getElementById("completeBtn");

completeBtn.addEventListener("click", () => {

    localStorage.setItem("day1Completed", "true");

    document.getElementById("daysCompleted").textContent = "1";
    document.getElementById("thingsCreated").textContent = "1";

    completeBtn.textContent = "✓ Day 1 Completed";
    completeBtn.disabled = true;

    alert("Day 1 completed! Your 100-day journey has officially begun 🌱");

});


// Load completion status

if (localStorage.getItem("day1Completed") === "true") {

    document.getElementById("daysCompleted").textContent = "1";
    document.getElementById("thingsCreated").textContent = "1";

    completeBtn.textContent = "✓ Day 1 Completed";
    completeBtn.disabled = true;

}


// -------------------------------
// RATING
// -------------------------------

const ratingButtons = document.querySelectorAll(".rating button");

let selectedRating = 0;

ratingButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedRating = Number(button.dataset.rating);

        ratingButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        localStorage.setItem(
            "day1Rating",
            selectedRating
        );

    });

});


// Load saved rating

const savedRating = localStorage.getItem("day1Rating");

if (savedRating) {

    selectedRating = Number(savedRating);

    ratingButtons.forEach(button => {

        if (Number(button.dataset.rating) === selectedRating) {
            button.classList.add("selected");
        }

    });

}


// -------------------------------
// REFLECTION
// -------------------------------

const reflection = document.getElementById("reflection");

const saveReflection =
    document.getElementById("saveReflection");


const savedReflection =
    localStorage.getItem("day1Reflection");


if (savedReflection) {
    reflection.value = savedReflection;
}


saveReflection.addEventListener("click", () => {

    const text = reflection.value.trim();

    if (!text) {

        alert("Write something before saving your reflection.");

        return;
    }

    localStorage.setItem(
        "day1Reflection",
        text
    );

    alert("Reflection saved ✨");

});