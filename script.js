window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const loadingText = document.querySelector(".loading-text");
  
    // Step 2: Show loading text under welcome
    setTimeout(() => {
      loadingText.style.opacity = "1";
    }, 1500);
  
    // Step 3: Hide the loader and show site
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 3000);
  });
  