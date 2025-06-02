document.addEventListener("DOMContentLoaded", function () {
  // === HERO ROTATOR ===
  const heroSection = document.querySelector("#hero");
  const heroContents = document.querySelectorAll("#hero-content");
  let currentIndex = 0;
  const interval = 6000;

  function showNextHero() {
    heroContents[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % heroContents.length;
    const nextContent = heroContents[currentIndex];
    nextContent.classList.add("active");
    const bgImage = nextContent.getAttribute("data-bg");
    heroSection.style.backgroundImage = `url("${bgImage}")`;
  }

  if (heroContents.length > 0) {
    const initialBg = heroContents[0].getAttribute("data-bg");
    heroSection.style.backgroundImage = `url("${initialBg}")`;
    setInterval(showNextHero, interval);
  }

  // === HAMBURGER MENU TOGGLE ===
  const hamburger = document.getElementById("hamburger");
  const navWrapper = document.getElementById("navWrapper");

  hamburger.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
  });

  // === COLLAPSIBLE DROPDOWNS (toggle on second click) ===
  document.querySelectorAll(".dropdown > a").forEach(dropdownLink => {
    dropdownLink.addEventListener("click", (e) => {
      e.preventDefault();
      const parentLi = dropdownLink.parentElement;
      const isActive = parentLi.classList.contains("active");

      // If the clicked dropdown is already open, close it
      if (isActive) {
        parentLi.classList.remove("active");
      } else {
        // Close all others first
        document.querySelectorAll(".dropdown").forEach(el => el.classList.remove("active"));
        // Then open the clicked one
        parentLi.classList.add("active");
      }
    });
  });
});
