document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thanks for submitting your contact! We will reach out soon.");
    this.reset();
});