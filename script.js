document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("colorBox");
    const rgbInput = document.getElementById("rgbInput");
    const hslInput = document.getElementById("hslInput");
    const hexInput = document.getElementById("hexInput");
    const generateBtn = document.getElementById("generateBtn");
  
    function generateColor() {
      let color;
      if (hexInput.value) {
        color = hexInput.value;
      } else if (rgbInput.value) {
        color = `rgb(${rgbInput.value})`;
      } else if (hslInput.value) {
        color = `hsl(${hslInput.value})`;
      } else {
        color = '#000000'; // Default to black if no valid input provided
      }
      return color;
    }
  
    function animateColorChange(newColor) {
      colorBox.style.transition = "background-color 0.5s ease";
      colorBox.style.backgroundColor = newColor;
      setTimeout(() => {
        colorBox.style.transition = ""; // Remove transition after animation
      }, 500);
    }
  
    generateBtn.addEventListener("click", function() {
      const generatedColor = generateColor();
      animateColorChange(generatedColor);
      colorBox.textContent = generatedColor;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("colorBox");
    const rgbInput = document.getElementById("rgbInput");
    const hslInput = document.getElementById("hslInput");
    const hexInput = document.getElementById("hexInput");
    const generateBtn = document.getElementById("generateBtn");
    const colorCode = document.getElementById("colorCode");
  
    function generateColor() {
      let color;
      if (hexInput.value) {
        color = hexInput.value;
      } else if (rgbInput.value) {
        color = `rgb(${rgbInput.value})`;
      } else if (hslInput.value) {
        color = `hsl(${hslInput.value})`;
      } else {
        color = '#000000'; // Default to black if no valid input provided
      }
      return color;
    }
  
    function animateColorChange(newColor) {
      colorBox.style.backgroundColor = newColor;
    }
  
    generateBtn.addEventListener("click", function() {
      const generatedColor = generateColor();
      animateColorChange(generatedColor);
      colorCode.textContent = "Color Code: " + generatedColor;
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const colorBox = document.getElementById("colorBox");
    const rgbInput = document.getElementById("rgbInput");
    const hslInput = document.getElementById("hslInput");
    const hexInput = document.getElementById("hexInput");
    const generateBtn = document.getElementById("generateBtn");
    const colorCode = document.getElementById("colorCode");
  
    function generateRandomColor() {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      return randomColor.toUpperCase(); // Convert to uppercase for HEX format
    }
  
    function animateColorChange(newColor) {
      colorBox.style.backgroundColor = newColor;
      colorBox.style.animation = "pulse 0.5s ease"; // Add pulse animation effect
      setTimeout(() => {
        colorBox.style.animation = ""; // Remove animation after completion
      }, 500);
    }
  
    generateBtn.addEventListener("click", function() {
      const generatedColor = generateRandomColor();
      animateColorChange(generatedColor);
      colorCode.textContent = "Color Code: " + generatedColor;
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const sliderLoader = document.getElementById("sliderLoader");
  
    function startSliderLoader() {
      sliderLoader.style.transition = "width 5s linear"; // Set the transition duration
      sliderLoader.style.width = "100%"; // Move the slider loader to the end
    }
  
    function stopSliderLoader() {
      sliderLoader.style.transition = "none"; // Disable transition
      sliderLoader.style.width = "0"; // Reset the slider loader width
    }
  
    // Start the slider loader animation
    startSliderLoader();
  
    // Stop the slider loader animation after 5 seconds
    setTimeout(stopSliderLoader, 5000); // 5000 milliseconds = 5 seconds
  });
  