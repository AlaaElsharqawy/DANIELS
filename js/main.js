var typed = new Typed("#element", {
  strings: ["Developer", "Designer", "Larry Daniels"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

const counters = document.querySelectorAll(".number");
counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 25;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

function changeBg() {
  var navbar = document.getElementById("navbar-example");
  var scrollValue = window.scrollY;
  // console.log(scrollValue);

  if (scrollValue < 650) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}
window.addEventListener("scroll", changeBg);
