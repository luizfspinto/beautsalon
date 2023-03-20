//Abre e fecha o menu no mobile
const nav = window.document.querySelector("#header nav")
const toggle = window.document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show")
  })
}

//Quando clicar em um dos links do menu, esconde o menu, no mobile
const links = window.document.querySelectorAll("nav ul li a")
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show")
  })
}

/*====== efeito no cabeçalho ao rolar a página ======= */
const header = window.document.querySelector("#header")
const navHeight = header.offsetHeight
function moveScrollHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll")
  } else {
    header.classList.remove("scroll")
  }
}

/*efeito de aparecer o botão ao rolar a página*/
const backToTopButton = window.document.querySelector(".back-to-top")
function moveBackToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show")
  } else {
    backToTopButton.classList.remove("show")
  }
}

/*efeito de aparecer link e divisor no botão de menu, ao rolar a página*/
const sections = window.document.querySelectorAll("main section[id]")
function activeMenuSection() {
  var checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop //topo da seção
    const sectionHeight = section.offsetHeight //altura da seção
    const sectionId = section.getAttribute("id") //identificador

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active")
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active")
    }
  }
}

/*invocações das funções*/
window.addEventListener("scroll", function () {
  moveScrollHeader()
  moveBackToTop()
  activeMenuSection()
})
