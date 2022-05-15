// new report handler
async function newReporthandler(e) {
    // Prevent default action from happening
    // Note: Prevents redirect until login is replace
    e.preventDefault();
  
    // Get Login information
    const title = document.querySelector("#title-login").value.trim();
    const author = document.querySelector("#author-login").value.trim();
    const score = document.querySelector("#score").value;
    const content = document.querySelector("#report-content").value.trim();
    const url = "fake.com"
  
    // Checks if title and author are filled
    if (title && author) {
      // Get response from login info
      const response = await fetch("/api/users/api/report", {
        method: "POST",
        body: JSON.stringify({ title, author }),
        headers: { "Content-Type": "application/json" },
      });
  
      // If response is valid, it'll load the home screen
      if (response.ok) {
        document.location.replace("/");
      } else {
        // Let user know they failed to log in
        alert("failed to make a new report");
      }
    }
}


document
  .getElementById("submit-report-btn")
  .addEventListener("submit", newReporthandler);

