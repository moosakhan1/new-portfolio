// Add this function for smooth scrolling
function smoothScroll(target, duration) {
  var targetElement = document.querySelector(target);
  var targetPosition = targetElement.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Add event listeners for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute("href"), 1000);
  });
});

// Existing code
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
      document.getElementById("form-status").textContent =
        "Your message has been sent!";
      document.getElementById("form-status").style.color = "green";

      document.getElementById("contact-form").reset();
    } else {
      document.getElementById("form-status").textContent =
        "Please fill out all fields!";
      document.getElementById("form-status").style.color = "red";
    }
  });

var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function () {
  this.classList.toggle("click");
  nav.classList.toggle("open");
});

var typed = new Typed(".input", {
  strings: ["Frontend Developer", "UX Designer", "Web Developer"],
  typedSpeed: 70,
  backSpeed: 55,
  loop: true,
});

// Add this function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Add this function to handle scroll animations
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".animate-fadeIn, .animate-slideIn"
  );

  animatedElements.forEach((el) => {
    if (isInViewport(el)) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

// Add event listener for scroll
window.addEventListener("scroll", handleScrollAnimations);

// Call handleScrollAnimations on page load
window.addEventListener("load", handleScrollAnimations);

// This function will be called when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Set the background color
  document.body.style.backgroundColor = "#f0f0f0"; // Light gray color

  // Make sure the background is fixed and covers the entire viewport
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";

  console.log("Background color set to #f0f0f0 and fixed to the viewport.");
});

// Simulate the DOM content loaded event for demonstration
console.log("Simulating DOMContentLoaded event...");
const event = new Event("DOMContentLoaded");
document.dispatchEvent(event);
