const titles = document.querySelectorAll(".section-content p");

function handleResize() {
  titles.forEach((title) => {
    if (window.innerWidth < 770) {
      title.classList.add("show");
    } else {
      title.classList.remove("show");
    }
  });
}

function init() {
  handleResize();
}

window.addEventListener("resize", handleResize);

init();
