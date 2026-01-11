function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  mobileMenu.classList.toggle("hidden");

  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}
