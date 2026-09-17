const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navButton && nav) {
  navButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      nav.classList.remove("is-open");
      navButton.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});
