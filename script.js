function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
  document.querySelector("ul").classList.toggle("yh");
}

var typed = new Typed('#element', {
      strings: ['Seo-Writer', 'Blog-writer', 'Social Media Manager'],
      typeSpeed: 150,  
backSpeed: 100,  
backDelay: 1000,  
startDelay: 100,  
loop: true
    });

ScrollReveal().reveal(".gg", {
  delay: 50,
  origin: "left",
  distance: "100px",
});
