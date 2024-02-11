function toggleDropdown() {
  dropdownMenu.classList.toggle("show");
}

// Add click event listener to user info container
document.getElementById("user-info").addEventListener("click", toggleDropdown);

// Close the dropdown when clicking outside of it
window.addEventListener("click", function (event) {
  if (
    !event.target.matches(".user-info") &&
    !event.target.matches(".dropdown-icon")
  ) {
    dropdownMenu.classList.remove("show");
  }
});
dropdownIcon.classList.remove("hidden");

function toggleDropdown() {
  if (userInfo) {
    dropdownMenu.classList.toggle("show");
  }
}
