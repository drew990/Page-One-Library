// Login JS handler
async function loginFormHandler(e) {
  // Prevent default action from happening
  // Note: Prevents redirect until login is replace
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

    // If response is valid, it'll load the home screen
    if (response.ok) {
      document.location.replace("/");
    } else {
      // Let user know they failed to log in
      alert("Failed to log in.");
    }
  }
}

async function signupFormHandler(event) {
  // Prevent default action from happening
  // Note: Prevents redirect until sign up is confirm
  event.preventDefault();

  // Get Sign up info
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Checks if info is filled
  if (username && email && password) {
    // Get response from login info
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("RESPONSE: ", response);

    if (response.ok) {
      console.log("submitted");
      console.log("fetch sent");
      document.location.replace("/");
    } else {
      console.log(response)
      alert("Failed to sign up.");
      alert(response.statusText);
    }
  }
}

// Listens for the login click
document
  .getElementById("login-btn")
  .addEventListener("click", loginFormHandler);

// listens for sign up click
document
  .getElementById("signup-btn")
  .addEventListener("click", signupFormHandler);
