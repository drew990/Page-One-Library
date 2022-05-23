// Comment JS handler

console.log("Comment JS is being read!");

async function commentFormHandler(e) {
  // Prevent default action from happening
  // Note: Prevents redirect until login is replace
  e.preventDefault();
  console.log("COMMENT HAS BTN HAS BEEN CLICKED");

  // Get Login information
  const comment = document.querySelector("#book-comment").value.trim();

  // Checks if comment is filled
  if (comment) {
    console.log("Comment", comment);

    // Get response from comment info
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });

    // If response is valid, it'll refresh the screen
    if (response.ok) {
      document.location.replace("/report/{{id}}");
    } else {
      // Let user know they failed to comment
      alert("Failed to submit comment.");
    }
  }
}

// listens for sign up click
document
  .getElementById("comment-btn")
  .addEventListener("click", commentFormHandler);
