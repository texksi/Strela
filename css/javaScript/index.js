document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".iconCounter-box span[data-count]");
  const containerCounter = document.querySelector(".iconCounter-box");
  let activated = false;

  window.addEventListener("scroll", function () {
    // Trigger when counter section is visible in viewport
    if (
      window.scrollY + window.innerHeight >= containerCounter.offsetTop &&
      !activated
    ) {
      counters.forEach((counter) => {
        counter.innerText = "0";
        let count = 0;
        const target = parseInt(counter.dataset.count);
        function updateCount() {
          if (count < target) {
            count += 3;
            counter.innerText = count;
            setTimeout(updateCount, 4);
          } else {
            counter.innerText = target;
          }
        }
        updateCount();
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

  // If this event is too close to the last touch, ignore it
  if (event.type === "click" && now - lastTouchTime < 500) {
    return;
  }

  if (event.type === "touchstart") {
    lastTouchTime = now;
  }

  navHamburger.classList.toggle("active");
}

// Attach both events safely
hamburgerEl.addEventListener("touchstart", toggleMenu);
hamburgerEl.addEventListener("click", toggleMenu);

cancelHamburger.addEventListener("touchstart", toggleMenu);
cancelHamburger.addEventListener("click", toggleMenu);




   

