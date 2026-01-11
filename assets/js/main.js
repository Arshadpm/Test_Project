function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  // Toggle menu visibility
  mobileMenu.classList.toggle("hidden");

  // Toggle icons
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}
