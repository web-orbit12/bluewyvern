document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("nextjs-app-container");
  
    if (container) {
      fetch('https://bluewyvern.vercel.app/')
        .then(response => response.text())
        .then(content => {
          container.innerHTML = content;
        })
        .catch(error => {
          console.error("There was an error embedding the content:", error);
        });
    }
  });