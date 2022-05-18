
const getScore = () => {
    const elements = document.getElementsByClassName("radiobtn")
    for (i =0; i < elements.length; i++) {
        if(elements[i].checked) {
            return elements[i].value
        }
    }
}
console.log("this is a test to see if js is connected!")

const applauseSound = new Howl({
    src: "../sfx/applause.wav"
})


// new report handle
async function newReporthandler(event) {
    // Prevent default action from happening
    // Note: Prevents redirect until login is replace
    event.preventDefault();
    applauseSound.play();
    // Get Login information
    const title = document.querySelector("#book-title").value.trim();
    const author = document.querySelector("#author").value.trim();
    const content = document.querySelector("#report-content").value.trim();
    const url = "fake.com"
    const score = getScore();

 
    
    // Checks if title and author are filled
    if (title && author) {
      // Get response from login info
      console.log(title, author, content, url,)
      const response = await fetch("/api/reports", {
        method: "POST",
        body: JSON.stringify({ title, author, content, url, score,}),
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
async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(comment_text, post_id);
  }
  
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
  

document
  .getElementById("submit-report-btn")
  .addEventListener("click", newReporthandler);

//   const oneStar = getElementByid("1")
//   const twoStar = getElementByid("2")
//   const threeStar = getElementByid("3")
//   const fourStar = getElementByid("4")
//   const fiveStar = getElementByid("5")