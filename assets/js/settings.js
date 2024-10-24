// Function to adjust saturation
function adjustSaturation(value) {
    document.body.style.filter =
        "saturate(" +
        value +
        "%) contrast(" +
        document.getElementById("contrastRange").value +
        "%)";
    localStorage.setItem("saturationValue", value);
}

// Function to reset saturation to default
function resetSaturation() {
    adjustSaturation(100);
}

// Function to adjust contrast
function adjustContrast(value) {
    document.body.style.filter =
        "saturate(" +
        document.getElementById("saturationRange").value +
        "%) contrast(" +
        value +
        "%)";
    localStorage.setItem("contrastValue", value);
}

// Function to reset contrast to default
function resetContrast() {
    document.getElementById("contrastRange").value = 100;
    adjustContrast(100);
}

// Initialize slider values from localStorage
if (localStorage.getItem("saturationValue")) {
    document.getElementById("saturationRange").value =
        localStorage.getItem("saturationValue");
    adjustSaturation(localStorage.getItem("saturationValue"));
}
if (localStorage.getItem("contrastValue")) {
    document.getElementById("contrastRange").value =
        localStorage.getItem("contrastValue");
    adjustContrast(localStorage.getItem("contrastValue"));
}

// Event listeners for slider changes
document
    .getElementById("saturationRange")
    .addEventListener("input", function () {
        adjustSaturation(this.value);
    });

document
    .getElementById("contrastRange")
    .addEventListener("input", function () {
        adjustContrast(this.value);
    });


document.getElementById("openmodal").addEventListener("click", function () {
    window.scrollTo(0, 0);
});

// Function to clear cookies
function clearCookies() {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [name, _] = c.split("=");
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
}

// Function to clear local storage
function clearLocalStorage() {
    localStorage.clear();
}

// Function to clear IndexedDB
function clearIndexedDB() {
    // Get a list of all databases
    indexedDB.databases().then(dbs => {
        // Iterate over each database and delete it
        dbs.forEach(db => {
            indexedDB.deleteDatabase(db.name);
        });
    });
}


document.getElementById('deleteDataBtn').addEventListener('click', function () {
    // Delete Cookies
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [name, _] = c.split("=");
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    // Delete Local Storage
    localStorage.clear();
    clearCookies();
    clearIndexedDB();
    clearLocalStorage();
    // Alert the user or perform any other actions as needed
    alert("Save data deleted successfully.");
    window.location.reload();
});

function checkdelete() {
    document.getElementById('deleteDataBtn').disabled = true;
    var input = document.getElementById("deleteverify").value.toLowerCase();

    if (input === "delete my data") {
        document.getElementById('deleteDataBtn').disabled = false;
        // document.getElementById('titlesearch').style.display = 'none';
        // location.reload(); // Reload the page when the search bar is empty

    }
}


const blankSwitch = document.getElementById("open_blank");

if (blankSwitch) {
    blankSwitch.addEventListener("change", function () {
        if (blankSwitch.checked) {
            openBlank();
        }
    });
}

function openBlank() {
    var win = window.open();
    var url = window.origin;
    var iframe = win.document.createElement("iframe");
    win.document.body.style.margin = "0";
    win.document.body.style.padding = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "0";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}


var selector= document.getElementById('panic-key-input')
var ce=  document.getElementById('url-input');
selector.value = localStorage.getItem('key') || '';
ce.value = localStorage.getItem('website') || '';



function isValidUrl(url) {
    // Regular expression to match URL patterns
    var urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+|localhost)(:\d+)?(\/\S*)?$/;
    
    // Test the URL against the pattern
    return urlPattern.test(url);
}


window.onload = function(){
    if (localStorage.getItem('key') == null || localStorage.getItem('website') == null){
        localStorage.setItem('key', '`')
        localStorage.setItem('website', 'https://classroom.google.com')
        window.location.reload()
    }
}

function savePanicKeyAndURL(){
// function isValidHttpUrl(string) {
//   try {
//     const newUrl = new URL(string);
//     return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
//   } catch (err) {
//     return false;
//   }
// }
  var key=  document.getElementById('panic-key-input').value;
  var websiteinvalid= document.getElementById('url-input').value;
  if (websiteinvalid !== ""){
  if (isValidUrl(websiteinvalid) == true){
  localStorage.setItem('key', key);
  localStorage.setItem('website', websiteinvalid)
  alert('Panic Key Saved!')
  window.location.reload();
  } else if (isValidUrl(websiteinvalid) == false){
    alert('this is not a valid url')
  } else{
    alert('500')
  }
} else{}
}



function handleKeyPressurl(event) {
    if (event.key === "Enter") {
        document.getElementById("save-button").click();
    }
}