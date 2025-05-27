if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

// Get modal elements
const modal = document.getElementById('contact-modal');
const contactButton = document.getElementById('contact-button');
const closeButton = document.querySelector('.close-modal');

// Open modal when clicking contact button
contactButton.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Close modal when clicking the X button
closeButton.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});