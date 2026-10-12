
const screens = document.querySelectorAll(".screen");
const envelope = document.getElementById("abrir");
const letterButton = document.getElementById("botonCarta");

function showScreen(id) {
  screens.forEach(screen => {
    screen.classList.toggle("active", screen.id === id);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

function openLetter() {
  envelope.classList.add("open");

  letterButton.textContent = "Abriendo tu carta... 💜";
  letterButton.disabled = true;

  window.setTimeout(() => {
    showScreen("carta");
    letterButton.textContent = "Abrir mi carta 💌";
    letterButton.disabled = false;
  }, 650);
}

envelope.addEventListener("click", openLetter);
letterButton.addEventListener("click", openLetter);
