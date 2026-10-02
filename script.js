// ========================================
// BIRTHDAY WEBSITE - MAIN JAVASCRIPT
// ========================================


// ========================================
// SURPRISE BUTTON
// ========================================

const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

if (surpriseBtn && message) {

    surpriseBtn.addEventListener("click", function () {

        message.classList.remove("hidden");

        surpriseBtn.textContent =
            "💖 Surprise Opened!";

        surpriseBtn.disabled = true;

        message.scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ========================================
// BIRTHDAY COUNTDOWN
// ========================================

function updateCountdown() {

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    // Make sure the countdown elements exist

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }


    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        9,
        6,
        0,
        0,
        0
    );


    // Move to next October 6 if this year's
    // birthday has already passed.

    if (now >= birthday) {

        birthday = new Date(
            now.getFullYear() + 1,
            9,
            6,
            0,
            0,
            0
        );

    }


    const difference =
        birthday.getTime() - now.getTime();


    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference /
            (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference /
            (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


// Start countdown

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


// ========================================
// FINAL SURPRISE + CONFETTI
// ========================================

const finalSurpriseBtn =
    document.getElementById(
        "finalSurpriseBtn"
    );

const finalMessage =
    document.getElementById(
        "finalMessage"
    );


function createConfetti() {

    const confettiCount = 80;

    const colors = [
        "#ff6f9f",
        "#5fc7eb",
        "#ffd166",
        "#c77dff",
        "#ff9f1c"
    ];


    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti"
        );


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";


        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(function () {

            confetti.remove();

        }, 4500);

    }

}


if (
    finalSurpriseBtn &&
    finalMessage
) {

    finalSurpriseBtn.addEventListener(
        "click",
        function () {

            finalMessage.classList.remove(
                "hidden"
            );


            finalSurpriseBtn.textContent =
                "💗 Surprise Revealed!";


            finalSurpriseBtn.disabled =
                true;


            createConfetti();


            finalMessage.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


// ========================================
// PHOTO LIGHTBOX
// ========================================

const galleryImages =
    document.querySelectorAll(
        ".photo-card img"
    );


if (galleryImages.length > 0) {

    const lightbox =
        document.createElement("div");

    lightbox.className =
        "lightbox";


    lightbox.innerHTML = `
        <button class="close-lightbox">
            ×
        </button>

        <img
            src=""
            alt="Birthday memory"
        >
    `;


    document.body.appendChild(
        lightbox
    );


    const lightboxImage =
    lightbox.querySelector("img");


    const closeLightbox =
        lightbox.querySelector(
            ".close-lightbox"
        );


    galleryImages.forEach(
        function (image) {

            image.addEventListener(
                "click",
                function () {

                    lightboxImage.src =
                        image.src;

                    lightboxImage.alt =
                        image.alt;

                    lightbox.classList.add(
                        "show"
                    );

                }
            );

        }
    );


    closeLightbox.addEventListener(
        "click",
        function () {

            lightbox.classList.remove(
                "show"
            );

        }
    );


    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                lightbox.classList.remove(
                    "show"
                );

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                lightbox.classList.remove(
                    "show"
                );

            }

        }
    );

}


// ========================================
// FLOATING BIRTHDAY SPARKLES
// ========================================

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className =
        "sparkle";


    const shapes = [
        "💗",
        "😍",
        "✨",
        "💕",
        "🌸"
    ];


    sparkle.textContent =
        shapes[
            Math.floor(
                Math.random() *
                shapes.length
            )
        ];


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.fontSize =
        (14 + Math.random() * 18) +
        "px";


    sparkle.style.animationDuration =
        (6 + Math.random() * 6) +
        "s";


    document.body.appendChild(
        sparkle
    );


    setTimeout(
        function () {

            sparkle.remove();

        },
        13000
    );

}


setInterval(
    createSparkle,
    700
);