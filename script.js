// Like Button Toggle
document.querySelectorAll('button[id^="likeBtn"]').forEach(button => {
    button.addEventListener("click", function(){
      if(this.innerHTML.trim() === "Like") {
        this.innerHTML = "Liked ❤️";
      } else {
        this.innerHTML = "Like";
      }
    });
  });
  
  // Comment Button Toggle
  document.querySelectorAll('button[id^="commentBtn"]').forEach(btn => {
    btn.addEventListener("click", function(){
      // Inga, comment button oda next sibling is the comment box div.
      let commentBox = this.nextElementSibling;
      if(commentBox.style.display === "none" || commentBox.style.display === ""){
        commentBox.style.display = "block";
      } else {
        commentBox.style.display = "none";
      }
    });
  });
