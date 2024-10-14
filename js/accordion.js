const NodeListDeAccordion = document.querySelectorAll(".accordion")
const arrayDeAccordion = Array.from(NodeListDeAccordion)

function toggleAccordion(event) {
  // Captura o elemento accordion__content correspondente ao accordion clicado
  const accordionContent = event.currentTarget.querySelector(
    ".accordion__content"
  )
  console.log(accordionContent) // Para verificar qual conteúdo está sendo manipulado

  // Alterna a visibilidade do conteúdo
  accordionContent.classList.toggle("hidden")
}

// Adiciona o evento de clique a cada accordion
arrayDeAccordion.forEach((accordion) => {
  accordion.addEventListener("click", toggleAccordion)
})
