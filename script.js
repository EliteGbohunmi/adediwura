function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
  document.querySelector("ul").classList.toggle("yh");
}
ScrollReveal().reveal(".gg", {
  delay: 50,
  origin: "left",
  distance: "100px",
});
