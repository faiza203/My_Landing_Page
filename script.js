const threeLines = document.getElementById("threeLines");
const close = document.getElementById("close");
const signupbutton = document.getElementById("signup-button");
const modal = document.getElementById("modal");
threeLines.addEventListener("click", () =>
  document.body.classList.add("show-nav")
);
signupbutton.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
