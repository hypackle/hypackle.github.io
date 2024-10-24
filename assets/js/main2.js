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


// ____________________________
// Block Ad Blockers to block the blocker which blocks the ads for the blocker and idk.
// ____________________________



async function detectAdBlock() {
  if (localStorage.getItem('savedpage') == 'false' || localStorage.getItem('savedpage') == null) {
    window.location.reload();
    localStorage.setItem('savedpage', 'true')
  }
  

  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
   
    var ADS_URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    function checkAdsBlocked(callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          callback(xhr.status === 0 || xhr.responseURL !== ADS_URL);
        }
      };
      xhr.open('HEAD', ADS_URL, true);
      xhr.send(null);
    }


    // Usage example:

    checkAdsBlocked(function (adsBlocked) {
      if (adsBlocked == true) {
        if (window.self !== window.top) {
          localStorage.setItem('lastAdPage', window.location.href)
        }
        window.location.href = '/sitelock.html'
      }
    });
    // console.log(`AdBlock 1st Enabled: ${adBlockEnabled}`)
  }
}
if (localStorage.getItem('adblockerContinued') == 'true') {
  localStorage.setItem('adblockerContinued', 'false')
} else if (localStorage.getItem('ByPass') == null || localStorage.getItem('ByPass') == 'false') {
  
  detectAdBlock()
}

document.addEventListener("DOMContentLoaded", function() {
  // Add a click event listener to the entire document
  document.addEventListener("click", function(event) {
      // Your click event handling code goes here
      localStorage.setItem('savedpage', 'false')
  });
});





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

// ====================================

function addScriptSrc(src, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}


var credits = "Brought to you by Hypackel";
console.log(credits);

function addScript(js) {
  var createdScript = document.createElement("script");
  document.body.appendChild(createdScript);
  createdScript.textContent = js;
}
script("Injected script 2/3");


// ====================================
// AD CODE
// ====================================


(function () {
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7128870281959256';
  script.crossOrigin = 'anonymous';

  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(script);
})();


script("Injected script 3/3");


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


window.onload = applyFilters();

script("Injected script filters");


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

// Other code here

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Delayed execution for warning messages
setTimeout(function() {
  // Log the warning messages
  // console.clear();
  console.log("%cWarning!", "color: red; font-size: 40px;background-color: yellow;");
  console.log("%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. Do not enter or paste code that you do not understand.", "color: red; font-size: 20px;");
}, 200);
});


