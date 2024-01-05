const burger = document.querySelector(".burger")
const navbar = document.querySelector("ul")
const bgSidebar = document.querySelector(".bg-sidebar")
const body = document.querySelector("body")
const btn = document.getElementById("dark-mode")
const label = document.querySelector("label")
const img = document.getElementById("main-img")
const logo = document.getElementById("logo")
const list = document.querySelectorAll("#list")
const h1 = document.querySelectorAll("h1")
const p = document.querySelectorAll("p")
const button = document.querySelectorAll("button")
const header = document.getElementById("header")
const card = document.querySelectorAll(".card")
const section = document.getElementById("section")
const about = document.getElementById("about")
const footer = document.getElementById("footer")
const h2 = document.querySelectorAll("h2")
const garis = document.querySelector(".garis")
const h3 = document.querySelector("h3")
const sosmed = document.querySelectorAll("i")

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
  }, 1000);
}

const changeList = () => {
  list.forEach(item => {
    item.classList.toggle("active")
  })
}

const changeH1 = () => {
  h1.forEach(item => {
    item.classList.toggle("active")
  })
}

const changeP = () => {
  p.forEach(item => {
    item.classList.toggle("active")
  })
}

const changeCard = () => {
  card.forEach(item => {
    item.classList.toggle("active")
  })
}

const changeH2 = () => {
  h2.forEach(item => {
    item.classList.toggle("active")
  })
}

const changeI = () => {
  sosmed.forEach(item => {
    item.classList.toggle("active")
  })
}

const changeBtn = () => {
  button.forEach(item => {
    item.classList.toggle("active")
  })
}

burger.addEventListener("click", toggleSidebar)
navbar.addEventListener("click", backToggleSidebar)

btn.addEventListener("click", () => {
  label.classList.toggle("active")
  logo.classList.toggle("active")
  changeList()
  changeH1()
  changeP()
  changeBtn()
  header.classList.toggle("active")
  changeCard()
  section.classList.toggle("active")
  about.classList.toggle("active")
  footer.classList.toggle("active")
  changeH2()
  garis.classList.toggle("active")
  h3.classList.toggle("active")
  changeI()
})