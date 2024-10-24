function script(text) {
    console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
  }
  function loadScript(src, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }
  
  function loadCSS(href, callback) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    var supportsOnLoad = "onload" in link;
    if (supportsOnLoad) {
      link.onload = callback;
    } else {
      setTimeout(function () {
        callback();
      }, 1000);
    }
    document.head.appendChild(link);
  }
  
  loadCSS('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css', function() {
    script('Bootstrap icons Loaded');
  });
  
  
  // ! BREAKS EVERYTHING 
  // loadCSS('https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css', function() {
  //   script('[✔️] Font Awesome Pro');
  // });
  
  // loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', function() {
  //   script('Font Awesome Free CDN Loaded');
  // });
  
  
    script("Page Loaded");
      function clock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
      
        if (hours > 12) {
          hours -= 12;
        }
        if (hours === 0) {
          hours = 12;
        }
      
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById("realtime").textContent = timeString;
      }
      
      clock();
      setInterval(clock, 1000);
      
      const options = [
        "'TypeError: Failed to fetch' means our server is blocked",
        "'TypeError: Failed to fetch' means our server is blocked",
        "'TypeError: Failed to fetch' means our server is blocked",
        "'TypeError: Failed to fetch' means our server is blocked",
        "'TypeError: Failed to fetch' means our server is blocked",
      ];
      
      function getRandomOption() {
        const randomNumber = Math.floor(Math.random() * options.length);
        return options[randomNumber];
      }
      
      function setRandomPlaceholder() {
        const placeholder = document.getElementById("placeholderText");
        placeholder.textContent = getRandomOption();
      }
      
      setRandomPlaceholder();
      
      var proxybar = document.querySelector(".proxybar");
      var search = document.getElementById("search");
      proxybar.addEventListener("focus", () => {
        search.style.marginLeft = "-367px";
      });
      
      proxybar.addEventListener("blur", () => {
        search.style.marginLeft = "-150px";
      });
  
  // window.addEventListener("load", function () {
  //   // loadScript("/worker.js");
  //   if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
  //     if (window.innerWidth < 676) {
  //       location.href = "/mobile.html";
  //     }
  //   }
  //   if (window.location.pathname === '/loading.html') {
  //     if (window.innerWidth < 676) {
  //       var rm = document.querySelector('.themesExcluded');
  //       rm.style.display = 'none';
  //     }
  //   }
  // });