// Vanguard Veterans Consulting - main.js

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navbar = document.querySelector(".navbar");

  // Smooth scroll with sticky navbar offset
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();

        const navHeight = navbar ? navbar.offsetHeight : 0;

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.scrollY -
          navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Optional: Add subtle navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
});
