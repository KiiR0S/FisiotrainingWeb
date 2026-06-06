const modal = document.getElementById("modal");
const openButtons = document.querySelectorAll(".openModal");
const closeModal = document.getElementById("closeModal");

openButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});