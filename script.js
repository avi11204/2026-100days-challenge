// ================================
// 100 DAYS OF EXPLORATION
// VERSION 2.2
// ================================

import challenges from "./data/challenges.js";
import questions from "./data/questions.js";


// -------------------------------
// THEME TOGGLE
// -------------------------------

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeToggle.textContent =
        isDark ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});


// Load saved theme

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


// -------------------------------
// START BUTTON
// -------------------------------

const startBtn =
    document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document
        .getElementById("challenges")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// -------------------------------
// DAY SYSTEM
// -------------------------------

let currentDay =
    Number(
        localStorage.getItem("currentDay")
    ) || 1;


// -------------------------------
// ELEMENTS
// -------------------------------

const challengeDay =
    document.getElementById("challengeDay");

const challengeCategory =
    document.getElementById("challengeCategory");

const challengeDuration =
    document.getElementById("challengeDuration");

const challengeTitle =
    document.getElementById("challengeTitle");

const challengeDescription =
    document.getElementById("challengeDescription");

const challengeOutput =
    document.getElementById("challengeOutput");

const completeBtn =
    document.getElementById("completeBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");


// -------------------------------
// CATEGORY ICONS
// -------------------------------

const categoryIcons = {

    tech: "💻",

    create: "🎨",

    explore: "🌍",

    culture: "🎬",

    wildcard: "🧪",

    photography: "📸",

    writing: "✍️"

};


// -------------------------------
// GET CHALLENGE
// -------------------------------

function getChallenge(day) {

    return challenges.find(
        challenge =>
            challenge.day === day
    );

}

// -------------------------------
// UPDATE PAGE PROGRESS
// -------------------------------

function updatePageProgress() {

    const heroDayNumber =
        document.getElementById("heroDayNumber");

    const heroProgressText =
        document.getElementById("heroProgressText");

    const heroProgressFill =
        document.getElementById("heroProgressFill");

    const reflectionDay =
        document.getElementById("reflectionDay");


    // Hero day number

    heroDayNumber.textContent =
        String(currentDay).padStart(2, "0");


    // Progress text

    heroProgressText.textContent =
        `${currentDay} / 100`;


    // Progress bar

    const percentage =
        (currentDay / 100) * 100;

    heroProgressFill.style.width =
        `${percentage}%`;


    // Reflection heading

    reflectionDay.textContent =
        `DAY ${String(currentDay).padStart(2, "0")} REFLECTION`;

}
// -------------------------------
// DISPLAY CHALLENGE
// -------------------------------

function displayChallenge() {

    const challenge =
        getChallenge(currentDay);


    if (!challenge) {

        challengeTitle.textContent =
            "Challenge coming soon";

        challengeDescription.textContent =
            "This day has not been added yet.";

        challengeOutput.innerHTML =
            "<li>More exploration coming soon.</li>";

        completeBtn.disabled = true;

        return;

    }

// -------------------------------
// REFLECTION QUESTION
// -------------------------------

const reflectionQuestion =
    document.getElementById(
        "reflectionQuestion"
    );

reflectionQuestion.textContent =
    challenge.reflection;

    // Day

    challengeDay.textContent =
        `DAY ${String(currentDay).padStart(2, "0")}`;


    // Category

    const icon =
        categoryIcons[
            challenge.category
        ] || "🧪";


    challengeCategory.textContent =
        `${icon} ${challenge.category.toUpperCase()}`;


    // Duration

    challengeDuration.textContent =
        `⏱ ${challenge.duration}`;


    // Title

    challengeTitle.textContent =
        challenge.title;


    // Description

    challengeDescription.textContent =
        challenge.description;


    // Output

    challengeOutput.innerHTML = `
        <li>✓ ${challenge.output}</li>
    `;


    // Completion

    updateCompletionButton();


    // Navigation buttons

    previousBtn.disabled =
        currentDay === 1;


    nextBtn.disabled =
        currentDay === 100;


    // Save current day

    localStorage.setItem(
        "currentDay",
        currentDay
    );
 updatePageProgress();

    console.log(
        "Displaying Day:",
        currentDay,
        challenge
    );

}


// -------------------------------
// COMPLETION
// -------------------------------

function isDayCompleted(day) {

    return (
        localStorage.getItem(
            `day${day}Completed`
        ) === "true"
    );

}


function updateCompletionButton() {

    if (isDayCompleted(currentDay)) {

        completeBtn.textContent =
            `✓ Day ${currentDay} Completed`;

        completeBtn.disabled = true;

    } else {

        completeBtn.textContent =
            `Mark Day ${currentDay} Complete`;

        completeBtn.disabled = false;

    }

}


// -------------------------------
// COMPLETE CURRENT DAY
// -------------------------------

completeBtn.addEventListener("click", () => {

    localStorage.setItem(
        `day${currentDay}Completed`,
        "true"
    );


    updateStats();


    updateCompletionButton();


    alert(
        `Day ${currentDay} completed! 🌱`
    );

});


// -------------------------------
// PREVIOUS DAY
// -------------------------------

previousBtn.addEventListener("click", () => {

    if (currentDay > 1) {

        currentDay--;

        displayChallenge();

        loadRating();

        loadReflection();

    }

});

// -------------------------------
// NEXT DAY
// -------------------------------

nextBtn.addEventListener("click", () => {

    if (currentDay < 100) {

        currentDay++;

        displayChallenge();

        loadRating();

        loadReflection();

    }

});


// -------------------------------
// STATS
// -------------------------------

function updateStats() {

    let completedDays = 0;

    let thingsCreated = 0;

    let thingsTried = 0;

    let techSessions = 0;


    for (let day = 1; day <= 100; day++) {

        if (
            isDayCompleted(day)
        ) {

            completedDays++;

            thingsTried++;


            const challenge =
                getChallenge(day);


            if (
                challenge?.category ===
                "tech"
            ) {

                techSessions++;

            }


            if (
                challenge?.category ===
                "create"
            ) {

                thingsCreated++;

            }

        }

    }


    document.getElementById(
        "daysCompleted"
    ).textContent =
        completedDays;


    document.getElementById(
        "thingsTried"
    ).textContent =
        thingsTried;


    document.getElementById(
        "thingsCreated"
    ).textContent =
        thingsCreated;


    document.getElementById(
        "techSessions"
    ).textContent =
        techSessions;

}


// -------------------------------
// RATING
// -------------------------------

const ratingButtons =
    document.querySelectorAll(
        ".rating button"
    );


function loadRating() {

    ratingButtons.forEach(button => {

        button.classList.remove(
            "selected"
        );

    });


    const savedRating =
        localStorage.getItem(
            `day${currentDay}Rating`
        );


    if (!savedRating) {
        return;
    }


    ratingButtons.forEach(button => {

        if (
            Number(
                button.dataset.rating
            ) === Number(savedRating)
        ) {

            button.classList.add(
                "selected"
            );

        }

    });

}


ratingButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const rating =
                Number(
                    button.dataset.rating
                );


            localStorage.setItem(
                `day${currentDay}Rating`,
                rating
            );


            loadRating();

        }
    );

});


// -------------------------------
// REFLECTION
// -------------------------------

const reflection =
    document.getElementById(
        "reflection"
    );

const saveReflection =
    document.getElementById(
        "saveReflection"
    );


function loadReflection() {

    const savedReflection =
        localStorage.getItem(
            `day${currentDay}Reflection`
        );


    reflection.value =
        savedReflection || "";

}


saveReflection.addEventListener(
    "click",
    () => {

        const text =
            reflection.value.trim();


        if (!text) {

            alert(
                "Write something before saving your reflection."
            );

            return;

        }


        localStorage.setItem(
            `day${currentDay}Reflection`,
            text
        );


        alert(
            `Day ${currentDay} reflection saved ✨`
        );

    }
);


// -------------------------------
// SELF-DISCOVERY QUESTIONS
// -------------------------------

console.log(
    "Self-discovery questions loaded:",
    questions.length
);


// -------------------------------
// INITIAL LOAD
// -------------------------------

displayChallenge();

updateStats();

loadRating();

loadReflection();