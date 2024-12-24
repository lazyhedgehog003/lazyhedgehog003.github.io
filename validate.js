const validEmail = "soodsahu@gmail.com";
  const validPassword = "986793";

  // Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error");

    // Check credentials
    if (email === validEmail && password === validPassword) {
      errorMessage.style.display = "none";
      window.location.href = "homepage.html"; // Redirect to the home page
    } else {
      errorMessage.style.display = "block"; // Show error message
    }
  });

  // Toggle password visibility
  function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }