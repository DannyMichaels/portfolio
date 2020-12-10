  let toTopButton = document.getElementById("toTopButton")
  let blueBurger = document.getElementById("burger-bg")
  // toTopButton.style.display = "none";

  export function scrollFunction() {
    if (
      document.body.scrollTop >= 1000 ||
      document.documentElement.scrollTop >= 1000
    ) {
      toTopButton.style.display = "block";
      toTopButton.style.position = "fixed";
      blueBurger.style.background = "#0633BD"
    } else {
      blueBurger.style.background = "#fff"
      toTopButton.style.display = "none";
    }
  }