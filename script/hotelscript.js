window.onload = function () {
    alert("Welcome to Humura Resorts!");
};

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Thank you for choosing Humura Resorts.\nYour booking request has been received.");
    });
});

const fadeElements = document.querySelectorAll(
    ".amenity-grid div,.testimonial,.cta"
);

function reveal() {
    fadeElements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            element.classList.add("show");
        }
    });
}

fadeElements.forEach(element => {
    element.classList.add("fade");
});

window.addEventListener("scroll", reveal);
reveal();

const year = new Date().getFullYear();
const copyright = document.querySelector(".copyright");
if (copyright) {
    copyright.innerHTML = "© " + year + " Humura Resorts. All Rights Reserved.";
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const checkin = new Date(document.getElementById("checkin").value);
        const checkout = new Date(document.getElementById("checkout").value);

        if (checkout <= checkin) {
            alert("Check-out date must be after the check-in date.");
            return;
        }

        alert(
            "Thank you for choosing Humura Resorts!\n\n" +
            "Your booking request has been received successfully.\n" +
            "Our reservations team will contact you shortly."
        );

        bookingForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    if (toggle && navbar) {
        toggle.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    }
});