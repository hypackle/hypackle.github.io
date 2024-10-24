// Hello there!
//
// If you want to add my games to your site, please reach out at my email: contact@hypackel.com, or discord: hypackel

console.warn(
    "%cNote!",
    "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
    "If you want to add my games to your site, please reach out at my email: contact@hypackel.com\nPlease do not just add them without asking me first! Thank you!"
  );
  
  function script(text) {
    console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
  }
  
  // ====================================
  // SCRIPT INJECTION
  // ====================================
  
  
  var gaenabled = window.localStorage.getItem("ga");
  if (gaenabled == "false") {
    script("Skipped GA injection because it is disabled by the user.");
  } else {
    const gascript = document.createElement("script");
    gascript.setAttribute("async", "");
    gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-VX9S84S494");
    const inlinegascript = document.createElement("script");
    inlinegascript.innerHTML = ` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-VX9S84S494');`;
    document.head.append(gascript, inlinegascript);
    script("Injected script 1/3");
  }
  
  
  
  const tabCloak = document.createElement("div");
  tabCloak.innerHTML = (`<style>
  select option,
  .select2 {
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
  }
  </style>
  <div id="tab">
  <b style="color: #fff;">Tab cloak:</b>
  <select id="tabCloak" class="select2">
    <option>Default</option>
    <option>Schoology</option>
    <option>Google Docs</option>
    <option>Desmos</option>
    <option>Desmos graphing</option>
    <option>Google classroom</option>
    <option>NoRedInk</option>
    <option>Lexia Core5</option>
    <option>Lexia PowerUp</option>
    <option>Mathspace</option>
    <option>Kahoot</option>
    <option>Google Sheets</option>
    <option>Google Slides</option>
    <option>Google Sites</option>
    <option>Google Forms</option>
  <option>Google Drive</option>
  </select>
  </div>`);
  const loader = document.createElement("script");
  loader.setAttribute("src", "/assets/js/vobs.js");
  document.head.append(tabCloak, loader);
  script("Injected script 2/3");
  // const tabCloak = document.createElement("script");
  // tabCloak.setAttribute("src", "/js/tab_cloak.js");
  // document.head.append(tabCloak);
  // script("Injected script 2/3");
  
  //const notify = document.createElement("script");
  //notify.setAttribute("src", "/js/notify.js");
  //document.head.append(notify);
  // script("Injected script 3/3");
  
  
  
  // const blankSwitch = document.getElementById("open_blank");
  
  // if (blankSwitch) {
  //   blankSwitch.addEventListener("change", function () {
  //     if (blankSwitch.checked) {
  //       openBlank();
  //     }
  //   });
  // }
  
  // function openBlank() {
  //   var win = window.open();
  //   var url = window.origin;
  //   var iframe = win.document.createElement("iframe");
  //   win.document.body.style.margin = "0";
  //   win.document.body.style.padding = "0";
  //   iframe.style.width = "100%";
  //   iframe.style.height = "100%";
  //   iframe.style.border = "0";
  //   iframe.src = url;
  //   win.document.body.appendChild(iframe);
  // }
  
  
  // script("Injected script 2/3");
  
  
  // ====================================
  
  function addScriptSrc(src, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  }
  
  // function googleTranslateElementInit() {
  //   new google.translate.TranslateElement(
  //     { pageLanguage: "en" },
  //     "google_translate_element"
  //   );
  // }
  
  // addScriptSrc(
  //   "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
  //   function () {
  //     googleTranslateElementInit();
  //   }
  // );
  
  let msg = "Brought to you by Hypackel";
  script(msg);
  
  
  function addScript(js) {
    var createdScript = document.createElement("script");
    document.body.appendChild(createdScript);
    createdScript.textContent = js;
  }
  script("Injected script 3/3");
  
  
  // secret alert start not really a secret lol
  let sequence = [];
  
  document.addEventListener("keydown", function (event) {
    sequence.push(event.key);
  
    if (sequence.join("") === "hypackel-bread") {
      alert("Mustangs Rule! (the horse not car), also how did you find this? \n\n -breadghoti"); // quotes should work in the alert bc of the single quote
      sequence = [];
    }
  });
  
  // secret alert end
  
  // ====================================
  // AD CODE
  // ====================================
  
  
//   (function () {
//     var script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7128870281959256';
//     script.crossOrigin = 'anonymous';
  
//     var head = document.head || document.getElementsByTagName('head')[0];
//     head.appendChild(script);
//   })();
  
  
//   script("Injected script 3/3");
  
  
  
  
  
  
  
  // ====================================
  // Saturation & Contrast
  // ====================================
  
  // Function to apply saturation and contrast values to the page
  function applyFilters() {
    // Retrieve saturation value from localStorage
    var saturationValue = localStorage.getItem('saturationValue');
    // Retrieve contrast value from localStorage
    var contrastValue = localStorage.getItem('contrastValue');
  
    // Check if saturation and contrast values exist in localStorage
    if (saturationValue !== null && contrastValue !== null) {
      // Apply saturation and contrast values to the page
      document.body.style.filter = "saturate(" + saturationValue + "%) contrast(" + contrastValue + "%)";
    }
  }
  
  // Call applyFilters function to set saturation and contrast
  applyFilters();
  
  
  // ====================================
  // firebase app
  // ====================================
  
  // Create a script element
  var firebaseScript = document.createElement('script');
  // Set type attribute to "module"
  firebaseScript.type = 'module';
  // Set innerHTML to the provided JavaScript code
  firebaseScript.innerHTML = `
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyB4234JL8Dfkny2vxZ-4xHFWTHQjN6ACjY",
      authDomain: "hypackel-ecf04.firebaseapp.com",
      projectId: "hypackel-ecf04",
      storageBucket: "hypackel-ecf04.appspot.com",
      messagingSenderId: "295532891994",
      appId: "1:295532891994:web:aa63b6c0b142547396ad63",
      measurementId: "G-B8ENDE1L1F"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  `;
  // Append the script element to the end of the body
  document.body.appendChild(firebaseScript);
  
  
  
  
  
  
  
  
  // ====================================
  // Panic Key
  // ====================================
  
  
  // Retrieve the value from localStorage
  const storedKey = localStorage.getItem('key');
  document.addEventListener('keypress', (event) => {
    const pressedKey = event.key;
    if (pressedKey === storedKey) {
      var gotopage = localStorage.getItem('website');
      
  
      // Check if gotopage is not null or empty
      if (gotopage && gotopage.trim() !== "") {
        // Check if the URL is missing the protocol
        if (!gotopage.startsWith("http://") && !gotopage.startsWith("https://")) {
            // Prepend the protocol (assuming HTTP)
            gotopage = "http://" + gotopage;
        }
  
        try{
          // Add an entry with a specific URL to the history stack
          history.pushState(null, null, gotopage);
  
          // Prevent navigation via the back button
          window.addEventListener('popstate', function(event) {
              history.pushState(null, null, gotopage);
          });
        } catch{
        console.warn('Could not disable back button.')
        // Navigate to the URL
        window.location.href = gotopage;
        }
      }
    }
  });
  
  
  
  // Wait for the DOM content to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Delayed execution for warning messages
  setTimeout(function() {
    // Log the warning messages
    console.clear();
    console.log("%cWarning!", "color: red; font-size: 40px;background-color: yellow;");
    console.log("%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. Do not enter or paste code that you do not understand.", "color: red; font-size: 20px;");
  }, 200);
  });
  
  