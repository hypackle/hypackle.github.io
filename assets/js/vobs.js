// Hello there!
//
// If you want to add my games to your site, please reach out at my email: contact@hypackel.com, or discord: hypackel


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
    gascript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-9N6C11NZ79");
    const inlinegascript = document.createElement("script");
    inlinegascript.innerHTML = ` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9N6C11NZ79');`;
    document.head.append(gascript, inlinegascript);
    script("Injected script 1/3");
}

document.addEventListener("DOMContentLoaded", (event) => {
    setIcon();
  });



document.getElementById("tabCloak").addEventListener("change", function (event) {
    localStorage.setItem('tabCloak', event.target.value);
    console.log(localStorage.getItem("tabCloak"))
    setIcon();
})

function setIcon() {
    if (localStorage.getItem("tabCloak") === null) {
        localStorage.setItem("tabCloak", "Default")
    }
    var icon = localStorage.getItem('tabCloak')
    document.getElementById("tabCloak").value = icon
    var link = window.document.querySelector("link[rel~='icon']");
    if (!link) {
        link = window.document.createElement('link');
        link.rel = 'icon';
        window.document.getElementsByTagName('head')[0].appendChild(link);
    }
    if (icon == "Default") {
        link.href = '/assets/img/app.png';
        document.title = "Home | Hypackel"
    }
    if (icon == "Schoology") {
        link.href = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
        document.title = "Home | Schoology"
    }
    if (icon == "Google Docs") {
        link.href = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
        document.title = "Google Docs"
    }
    if (icon == "Google Sheets") {
        link.href = 'https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico';
        document.title = "Google Sheets"
    }
    if (icon == "Google Slides") {
        link.href = 'https://ssl.gstatic.com/docs/presentations/images/favicon5.ico';
        document.title = "Google Slides"
    }
    if (icon == "Google Sites") {
        link.href = 'https://ssl.gstatic.com/atari/images/public/favicon.ico';
        document.title = "Google Sites"
    }
    if (icon == "Google Forms") {
        link.href = 'https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png';
        document.title = "Google Forms"
    }
    if (icon == "Desmos") {
        link.href = 'https://www.desmos.com/assets/img/apps/scientific/favicon.ico';
        document.title = "Desmos | Scientific Calculator"
    }
    if (icon == "Desmos graphing") {
        link.href = 'https://www.desmos.com/assets/img/apps/graphing/favicon.ico';
        document.title = "Desmos | Graphing Calculator"
    }
    if (icon == "Google Drive") {
        link.href = 'https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_32dp.png';
        document.title = "My Drive - Google Drive"
    }
    if (icon == "Google classroom") {
        link.href = 'https://ssl.gstatic.com/classroom/favicon.png';
        document.title = "Classes"
    }
    if (icon == "NoRedInk") {
        link.href = 'https://www.noredink.com/favicon.png';
        document.title = "Student Home | NoRedInk"
    }
    if (icon == "Lexia Core5") {
        link.href = 'https://www.lexiacore5.com/icons/icon.svg';
        document.title = "Lexia Core5"
    }
    if (icon == "Lexia PowerUp") {
        link.href = 'https://www.lexiapowerup.com/favicon.png';
        document.title = "Lexia PowerUp"
    }
    if (icon == "Mathspace") {
        link.href = 'https://mathspace.co/website/favicons/favicon-32x32.png';
        document.title = "Mathspace"
    }
    if (icon == "Kahoot") {
        link.href = 'https://assets-cdn.kahoot.it/controller/v2/favicon.ico';
        document.title = "Enter Game PIN - Kahoot!"
    }
    if (icon == "Oncourse Connect") {
        link.href = '/assets/img/onc.ico';
        document.title = "My Grades - OnCourse Connect"
    }

}





// Function to apply saturation and contrast values to the page
function applyFilters() {
    // Retrieve saturation value from localStorage
    var saturationValue = localStorage.getItem('saturationValue');
    // Retrieve contrast value from localStorage
    var contrastValue = localStorage.getItem('contrastValue');
    if (saturationValue == null) {
        localStorage.setItem('saturationValue', 100)
    }
    if (contrastValue == null) {
        localStorage.setItem('contrastValue', 100)
    }
    // Check if saturation and contrast values exist in localStorage
    if (saturationValue !== null && contrastValue !== null) {
        // Apply saturation and contrast values to the page
        document.body.style.filter = "saturate(" + saturationValue + "%) contrast(" + contrastValue + "%)";
    } else if (contrastValue !== null) {
        document.body.style.filter = "contrast(" + contrastValue + "%)";
    }
}

// Call applyFilters function to set saturation and contrast
applyFilters();


window.onload = applyFilters();




