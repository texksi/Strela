document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(
    ".iconCounter-box span[data-count]"
  );
  const containerCounter = document.querySelector(".iconCounter-box");
  let activated = false;

  window.addEventListener("scroll", function () {
    if (
      window.scrollY + window.innerHeight >= containerCounter.offsetTop &&
      !activated
    ) {
      counters.forEach((counter) => {
        counter.innerText = "0";
        const target = parseInt(counter.dataset.count);
        const duration = 1500; // ukupno trajanje animacije u ms
        const frameRate = 60; // broj frejmova u sekundi
        const totalSteps = Math.round((duration / 1000) * frameRate);
        const increment = Math.ceil(target / totalSteps);
        let current = 0;

        function updateCounter() {
          current += increment;
          if (current >= target) {
            counter.innerText = target;
          } else {
            counter.innerText = current;
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
      });

      activated = true;
    }
  });
});


const hamburgerEl = document.getElementById("hamburger-el");
const navHamburger = document.getElementsByClassName("proba")[0];
const cancelHamburger = document.getElementById("cancel-hamburger");

let lastTouchTime = 0;

function toggleMenu(event) {
  const now = Date.now();

  if (event.type === "click" && now - lastTouchTime < 500) {
    return;
  }

  if (event.type === "touchstart") {
    lastTouchTime = now;
  }

  navHamburger.classList.toggle("active");
}

// Close the menu on window resize (e.g., when moving from mobile to desktop)
function handleResize() {
  if (window.innerWidth > 768) {
    // Adjust this threshold as needed
    navHamburger.classList.remove("active");
  }
}

window.addEventListener("resize", handleResize);

hamburgerEl.addEventListener("touchstart", toggleMenu);
hamburgerEl.addEventListener("click", toggleMenu);

cancelHamburger.addEventListener("touchstart", toggleMenu);
cancelHamburger.addEventListener("click", toggleMenu);

// Define the base Swiper config
document.addEventListener("DOMContentLoaded", function () {
  const swiperOptions = {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  };

  const swiper = new Swiper(".swiper", swiperOptions);
});

let textMission = document.getElementById("textOurMission1024");
let addText = document.getElementsByClassName("p-text")[1];
if (window.matchMedia("(min-width: 1024px)").matches) {
  textMission.textContent += addText.textContent;
}
