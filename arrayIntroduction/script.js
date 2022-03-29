function getPageContent(page) {
  const targetDiv = document.getElementById(page)
  const container = document.querySelector('.container')
  const containerChildren = Array.from(container.children)
  containerChildren.forEach(checkForBlock)

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
}

function checkForBlock(element) {
  if (element.style.display === 'block') {
    element.style.display = 'none'
  }
}