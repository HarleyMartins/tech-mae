// Função para adicionar zero antes de números menores que 10
function addLeadingZero(number) {
  return number < 10 ? "0" + number : number
}

// Data de destino para a contagem regressiva
const countdownDate = new Date("Oct 18, 2024 23:59:59").getTime()

// Atualiza o contador a cada segundo
const countdownFunction = setInterval(() => {
  const now = new Date().getTime()
  const distance = countdownDate - now

  // Calcula o tempo restante
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  // Exibe os valores no HTML com zeros antes dos números, se necessário
  document.getElementById("days").textContent = addLeadingZero(days)
  document.getElementById("hours").textContent = addLeadingZero(hours)
  document.getElementById("minutes").textContent = addLeadingZero(minutes)
  document.getElementById("seconds").textContent = addLeadingZero(seconds)

  // Quando a contagem terminar
  if (distance < 0) {
    clearInterval(countdownFunction)
    document.querySelector(".countdown").textContent = "Tempo esgotado!"
  }
}, 1000)
