//Abre e fecha o menu
const nav = window.document.querySelector("#header nav")
const toggle = window.document.querySelectorAll("nav .toggle")

//para cada elemento com toggle
for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

//Quando clicar em um dos links do menu, esconde o menu
const links = window.document.querySelectorAll("nav ul li a")
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show")
  })
}

/*====== SCROLL ======= */
function moveScrollHeader() {
  const header = window.document.querySelector("#header")
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll")
  } else {
    //Menor que a altura do header
    header.classList.remove("scroll")
  }
}

function moveBackToTop() {
  const backToTopButton = window.document.querySelector('.back-to-top')
  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*invocation functions*/
window.addEventListener("scroll", function () {
  moveScrollHeader()
   moveBackToTop()
})