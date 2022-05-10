// Login JS handler
async function loginFormHandler(e) {
  e.preventDefault();

  // Get Login information
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Checks if email and password are filled
  if (email && password) {
    // Get response from login info
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  }

  // If response is valid, it'll load the home screen
  if (Response.ok) {
    document.location.replace("/");
  } else {
    // Let user know they failed to log in
    alert("Failed to log in.");
  }
}
