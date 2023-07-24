document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("nextjs-app-container");

  if (container) {
    
    fetch('https://bluewyvern.vercel.app/')
      .then(response => response.text())
      .then(content => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        
        // Insert the main content
        document.getElementById("nextjs-app-container").innerHTML = content;

        // Dynamically load all script tags from the fetched content
        doc.querySelectorAll('script').forEach(scriptTag => {
          const script = document.createElement('script');
          
          if (scriptTag.src) {
            script.src = scriptTag.src;
          } else {
            script.textContent = scriptTag.textContent;
          }

          // Append to the head of the document
          document.head.appendChild(script);
        });
      })
      .catch(error => console.error("Error:", error));

  }
});
