const modal    = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = modal.querySelector(".close");

document.querySelectorAll(".gallery .thumb").forEach((thumb) =>
  thumb.addEventListener("click", () => openModal(thumb.src))
);

function openModal(imgSrc) {
  modal.style.display = "flex";
  modalImg.src = imgSrc;
}

closeBtn.addEventListener("click", () => (modal.style.display = "none"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#navbar a");
  const current  = window.location.hash.replace("#", "") || "home";
  navLinks.forEach((link) =>
    (link.style.display =
      link.getAttribute("href").replace("#", "") === current ? "none" : "block")
  );
});
