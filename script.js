// Modal functionality
const modal = document.getElementById("bookingModal");
const bookNowButton = document.getElementById("book-now");
const closeButton = document.querySelector(".close");

if (bookNowButton) {
  bookNowButton.addEventListener("click", () => {
    modal.style.display = "block";
  });
}

if (closeButton) {
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Booking form submission
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const checkinDate = document.getElementById("checkin-date").value;
    const checkoutDate = document.getElementById("checkout-date").value;

    if (!name || !email || !checkinDate || !checkoutDate) {
      alert("Please fill out all fields.");
      return;
    }

    if (new Date(checkinDate) >= new Date(checkoutDate)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    alert(`Booking successful for ${name} from ${checkinDate} to ${checkoutDate}`);
    modal.style.display = "none"; // Closes modal after submission
  });
}

// About Us Audio
const aboutAudioButton = document.getElementById("play-about-audio");
const aboutAudio = document.getElementById("about-audio");

if (aboutAudioButton && aboutAudio) {
  aboutAudioButton.addEventListener("click", () => {
    if (aboutAudio.paused) {
      aboutAudio.play();
      aboutAudioButton.textContent = "Pause About Us Audio";
    } else {
      aboutAudio.pause();
      aboutAudioButton.textContent = "Play About Us Audio";
    }
  });
}

// Facility Audio
const facilityButtons = document.querySelectorAll(".play-facility-audio");
facilityButtons.forEach((button) => {
  const audio = button.nextElementSibling;
  button.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      button.textContent = "Pause Audio";
    } else {
      audio.pause();
      button.textContent = "Play Audio";
    }
  });
});

// Mobile Navigation Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navMenu.classList.contains("active")) {
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  });
}

// Smooth Scrolling with Animation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    }
  });
});

// Function to handle fade-in effect
const fadeInElements = document.querySelectorAll(".fade-in");

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

// Observe each fade-in element
fadeInElements.forEach((element) => {
  observer.observe(element);
});

// Sign-Up Form Handling
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(`Welcome, ${fullName}! Your account has been created.`);
    window.location.href = "index.html"; // Redirect to home page after sign-up
  });
}

// Login Form Handling
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    alert("Welcome back! You are now logged in.");
    window.location.href = "index.html"; // Redirect to home page after login
  });
}
