let selectedImg = null

function confirmDownload(img) {
  selectedImg = img
  document.getElementById("selected-image").src = img.src
  document.getElementById("confirmation-card").style.display = "flex"
}

function downloadImage() {
  if (selectedImg) {
    const url = selectedImg.src
    const link = document.createElement("a")
    link.href = url
    link.download = url.substring(url.lastIndexOf("/") + 1)
    link.click()
  }
  closeConfirmation()
}

function closeConfirmation() {
  document.getElementById("confirmation-card").style.display = "none"
}
