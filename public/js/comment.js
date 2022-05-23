// Comment JS handler
async function commentFormHandler(e) {
  // Prevent default action from happening
  // Note: Prevents redirect until login is replace
  e.preventDefault();
  console.log("COMMENT HAS BTN HAS BEEN CLICKED");

  // Get Login information
  const comment_text = document.querySelector("#book-comment").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Checks if comment is filled
  if (comment_text) {
    // Get response from comment info
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment_text, post_id }),
      headers: { "Content-Type": "application/json" },
    });

    // If response is valid, it'll refresh the screen
    if (response.ok) {
      document.location.reload();
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
