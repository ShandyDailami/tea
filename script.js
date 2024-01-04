const burger = document.querySelector(".burger")
const navbar = document.querySelector("ul")
const bgSidebar = document.querySelector(".bg-sidebar")
const body = document.querySelector("body")

const toggleSidebar = () => {
  burger.classList.toggle("active")
  navbar.classList.toggle("active")
  bgSidebar.classList.toggle("active")
  body.classList.toggle("lock-scroll")
}

const backToggleSidebar = () => {
  burger.classList.toggle("active")
  navbar.classList.toggle("active")
  bgSidebar.classList.toggle("active")
  setTimeout(() => {
    body.classList.remove("lock-scroll");
  }, 500);
}

burger.addEventListener("click", toggleSidebar)
navbar.addEventListener("click", backToggleSidebar)