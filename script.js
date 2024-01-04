const burger = document.querySelector(".burger")
const navbar = document.querySelector("ul")
const bgSidebar = document.querySelector(".bg-sidebar")
const body = document.querySelector("body")
const slides = document.querySelector('.slides');
const cards = document.querySelectorAll('.card');
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

const toggleSidebar = () => {
  burger.classList.toggle("active")
  navbar.classList.toggle("active")
  bgSidebar.classList.toggle("active")
  body.classList.toggle("lock-scroll")
}

burger.addEventListener("click", toggleSidebar)
navbar.addEventListener("click", () => {
  setTimeout(toggleSidebar, 500)
})