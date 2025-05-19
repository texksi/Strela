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

