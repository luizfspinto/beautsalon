//Abre e fecha o menu 
const nav = window.document.querySelector('#header nav')
const toggle = window.document.querySelectorAll('nav .toggle')


//para cada elemento com toggle
for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

//Quando clicar em um dos links do menu, esconde o menu
const links = window.document.querySelectorAll('nav ul li a')
for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}