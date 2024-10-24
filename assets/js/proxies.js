let url = window.location.href;
if (url.includes("?ref=")) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // https://example.com/path/to/page?color=purple&size=M&size=L

    var waitt = urlParams.get("ref"); // purple
    var json = {
        gf: { name: "Geforce Now", bestProxy: "Rammerhead" },
        xbox: { name: "Xbox Cloud Gaming", bestProxy: "None of the above. Use Geforce Now for best Results" },
        scratch: { name: "Scratch", bestProxy: "Any Proxy" },
        cat: { name: "Cat2048", bestProxy: "All Proxies" },
        gg: { name: "Now.gg", bestProxy: "Rammerhead" },
        it: { name: "Itch.io", bestProxy: "All Proxies" },
        space: { name: "1v1.Space", bestProxy: "All Proxies" },
    };

    // Fetch the value from the JSON based on the input variable
    var selected = json[waitt];

    // Output the corresponding values
    // alert(selected.name); // Output: Cat2048
    // alert(selected.bestProxy); // Output: proxy2
    alert(
        "You are on the proxies page, I noticed you are trying to play " +
        selected.name +
        ". The best proxy to play your game on is " +
        selected.bestProxy
    );
} else {
}




function decodeURL(encodedURL) {
    return atob(encodedURL);
}

// function openNewTab(url) {
//     const decodedUrl = decodeURL(url);
//     const newTab = window.open("about:blank", "_blank");

//     if (newTab) {
//         const doc = newTab.document;

//         // Include external CSS files
//         const cssLinks = `
//             <link rel="stylesheet" href="/fork/0/assets/css/tos.css">
//             <link rel="stylesheet" href="search.css">
//             <link rel="stylesheet" href="/gameplayer/0/assets/css/games.css" />
//             <link rel="stylesheet" href="/gameplayer/0/assets/css/rainbow.css">
//         `;

//         // Style element (inline styles)
//         const inlineStyles = `
//             <style>
//                 /* Your inline styles can go here */
//             </style>
//         `;

//         // Create head element and set custom favicon and page title
//         const head = doc.createElement("head");
//         head.innerHTML = `
//             ${cssLinks}
//             ${inlineStyles}
//             <link rel="icon" type="image/png" href="https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico"> <!-- Replace with your favicon URL -->
//             <title>Home | Schoology</title> <!-- Replace with your custom page title -->
//         `;
//         // Your HTML content goes here
//         const content = `
//             <header class="header">
//                 <div class="logo">
//                     <button class="menu-item" onclick="window.location.href='/';">
//                         <img width="120" src="/assets/img/logos/Logo-lightC.png" alt="Hypackel">
//                     </button>
//                 </div>
//                 <nav class="menu">
//                     <button class="menu-item" onclick="window.location.href='/fork/0/g/';">
//                         Games
//                     </button>
//                     <a class="rainbow_text_animated" style="font-size:3px;color: white;" href="https://discord.gg/wwNymmb4uR">
//                         <button class="menu-item" onclick="window.location.href='https://discord.gg/wwNymmb4uR';">
//                             <h34 style="font-size:18px;" class="rainbow rainbow_text_animated">Discord</h34>
//                         </button>
//                     </a>
//                 </nav>
//             </header>
//             <iframe src="${decodedUrl}" style="width: 100%; height: calc(100% - 30px); border: none;"></iframe>
//         `;

//         // Append head and body elements to the document
//         doc.documentElement.appendChild(head);
//         doc.body.innerHTML = content;
//     } else {
//         alert("Please allow popups and redirects to open a new tab.");
//     }
// }

function openNewTab(url) {
  var decodedUrl = decodeURL(url);
  var newTab = window.open("about:blank", "_blank");
  var tabselected = ""; // Declare tabselected using var

  if (newTab) {
      var doc = newTab.document;

      // Include external CSS files
      var cssLinks = `
          <link rel="stylesheet" href="/fork/0/assets/css/tos.css">
          <link rel="stylesheet" href="search.css">
          <link rel="stylesheet" href="/gameplayer/0/assets/css/games.css" />
          <link rel="stylesheet" href="/gameplayer/0/assets/css/rainbow.css">
      `;

      // Style element (inline styles)
      var inlineStyles = `
          <style>
              /* Your inline styles can go here */
          </style>
      `;
      var tabathon = localStorage.getItem("tabCloak") || 'Default';
      console.log(tabathon);
      if (tabathon == "Default") {
        var favicon = '/favicon.png';
        var tabselected = "Home | Hypackel"
    }
    if (tabathon == "Schoology") {
        var favicon = 'https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico';
        var tabselected = "Home | Schoology"
    }
    if (tabathon == "Google Docs") {
        var favicon = 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico';
        var tabselected = "Google Docs"
    }
    if (tabathon == "Google Sheets") {
        var favicon = 'https://ssl.gstatic.com/docs/spreadsheets/favicon3.ico';
        var tabselected = "Google Sheets"
    }
    if (tabathon == "Google Slides") {
        var favicon = 'https://ssl.gstatic.com/docs/presentations/images/favicon5.ico';
        var tabselected = "Google Slides"
    }
    if (tabathon == "Google Sites") {
        var favicon = 'https://ssl.gstatic.com/atari/images/public/favicon.ico';
        var tabselected = "Google Sites"
    }
    if (tabathon == "Google Forms") {
        var favicon = 'https://ssl.gstatic.com/docs/spreadsheets/forms/favicon_qp2.png';
        var tabselected = "Google Forms"
    }
    if (tabathon == "Desmos") {
        var favicon = 'https://www.desmos.com/assets/img/apps/scientific/favicon.ico';
        var tabselected = "Desmos | Scientific Calculator"
    }
    if (tabathon == "Desmos graphing") {
        var favicon = 'https://www.desmos.com/assets/img/apps/graphing/favicon.ico';
        var tabselected = "Desmos | Graphing Calculator"
    }
    if (tabathon == "Google Drive") {
        var favicon = 'https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_32dp.png';
        var tabselected = "My Drive - Google Drive"
    }
    if (tabathon == "Google classroom") {
        var favicon = 'https://ssl.gstatic.com/classroom/favicon.png';
        var tabselected = "Classes"
    }
    if (tabathon == "NoRedInk") {
        var favicon = 'https://www.noredink.com/favicon.png';
        var tabselected = "Student Home | NoRedInk"
    }
    if (tabathon == "Lexia Core5") {
        var favicon = 'https://www.lexiacore5.com/icons/icon.svg';
        var tabselected = "Lexia Core5"
    }
    if (tabathon == "Lexia PowerUp") {
        var favicon = 'https://www.lexiapowerup.com/favicon.png';
        var tabselected = "Lexia PowerUp"
    }
    if (tabathon == "Mathspace") {
        var favicon = 'https://mathspace.co/website/favicons/favicon-32x32.png';
        var tabselected = "Mathspace"
    }
    if (tabathon == "Kahoot") {
        var favicon = 'https://assets-cdn.kahoot.it/controller/v2/favicon.ico';
        var tabselected = "Enter Game PIN - Kahoot!"
    }
    if (tabathon == "Oncourse Connect") {
        var favicon = '/assets/img/onc.ico';
        var tabselected = "My Grades - OnCourse Connect"
    }
      // Create head element and set custom favicon and page title
      const head = doc.createElement("head");
      head.innerHTML = `
          ${cssLinks}
          ${inlineStyles}
          <link href="https://d3rtzzzsiu7gdr.cloudfront.net/favicon.png" rel="icon" />
          <link href="https://d3rtzzzsiu7gdr.cloudfront.net/favicon.png" rel="apple-touch-icon" />
          <title>${tabselected}</title> <!-- Replace with your custom page title -->
      `;

      // Your HTML content goes here
      const content = `
          <header class="header">
              <div class="logo">
                  <button class="menu-item" onclick="window.location.href='/';">
                      <img width="120" src="/assets/img/logos/Logo-lightC.png" alt="Hypackel">
                  </button>
              </div>
              <nav class="menu">
                  <button class="menu-item" onclick="window.location.href='/fork/0/g/';">
                      Games
                  </button>
                  <a class="rainbow_text_animated" style="font-size:3px;color: white;" href="https://discord.gg/wwNymmb4uR">
                      <button class="menu-item" onclick="window.location.href='https://discord.gg/wwNymmb4uR';">
                          <h34 style="font-size:18px;" class="rainbow rainbow_text_animated">Discord</h34>
                      </button>
                  </a>
              </nav>
          </header>
          <iframe id="myIframe" src="${decodedUrl}" style="width: 100%; height: calc(100% - 30px); border: none;" oncontextmenu="alert('hi')"></iframe>
      `;

      // Append head and body elements to the document
      doc.documentElement.appendChild(head);
      
      const faviconLink = doc.createElement('link');
      faviconLink.rel = 'icon';
      faviconLink.href = favicon; // Replace with your favicon URL
      doc.head.appendChild(faviconLink);
      
      
      doc.body.innerHTML = content;
      
     
      
      
      // Set oncontextmenu attribute to disable right-click context menu
      doc.body.setAttribute("oncontextmenu", "return false");

      // Accessing the iframe content
      const iframe = doc.getElementById('myIframe');
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Adding event listener to the iframe document to prevent right-click
      iframeDoc.addEventListener("contextmenu", function(e) {
          e.preventDefault();
      });

      // Add event listener for keydown events to prevent specific key combinations
      doc.onkeydown = (e) => {
          // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + Shift + C, Ctrl + U
          if (
              event.keyCode === 123 ||
              (e.ctrlKey && e.shiftKey && e.key == 'I') ||
              (e.ctrlKey && e.shiftKey && e.key == 'C') ||
              (e.ctrlKey && e.shiftKey && e.key == 'J') ||
              (e.ctrlKey && e.key == 'U')
          )
              return false;
      };
  } else {
      alert("Please allow popups and redirects to open a new tab.");
  }
}









// // Function to create a card element
// function createCard(url, type, name, broken) {
//     const cardContainer = document.createElement('a');
//     cardContainer.setAttribute('href', '#');
//     cardContainer.setAttribute('target', '_blank');
//     cardContainer.classList.add('game-link', 'container');
  
//     const tile = document.createElement('div');
//     tile.classList.add('game-tile');
  
//     const icon = document.createElement('img');
//     icon.classList.add('game-icon');
//     icon.src = `/assets/img/${type}.png`;
//     icon.alt = 'icon';
//     icon.loading = 'lazy';
  
//     const title = document.createElement('h1');
//     title.classList.add('game-title');
//     title.textContent = name;
//     if (broken) {
//       title.classList.add('blocked');
//       title.textContent += ' [broken]';
//     }
  
//     tile.appendChild(icon);
//     tile.appendChild(title);
//     cardContainer.appendChild(tile);
  
//     cardContainer.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent default link behavior
//       openNewTab(url);
//     });
  
//     return cardContainer;
//   }
  
//   // Function to add cards to the container
//   function addCardsToContainer(container, cardsData) {
//     cardsData.forEach(cardData => {
//       const { url, type, name, broken } = cardData;
//       const cardElement = createCard(url, type, name, broken);
//       container.appendChild(cardElement);
//     });
//   }
  
//   // Fetch data from JSON file
//   async function fetchCardsData() {
//     try {
//       const response = await fetch('/files/proxies.json');
//       const cardsData = await response.json();
  
//       const cardsContainer = document.getElementById('search');
//       addCardsToContainer(cardsContainer, cardsData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   // Load cards when the page is loaded
//   fetchCardsData();
  
  
  





// Function to create a card element
function createCard(url, type, name, broken) {
    const cardContainer = document.createElement('a');
    cardContainer.setAttribute('href', '#');
    cardContainer.setAttribute('target', '_blank');
    cardContainer.classList.add('game-link', 'container');
  
    const tile = document.createElement('div');
    tile.classList.add('game-tile');
  
    const icon = document.createElement('img');
    icon.classList.add('game-icon');
    icon.src = `/assets/img/${type}.png`;
    icon.alt = 'icon';
    icon.loading = 'lazy';
  
    const title = document.createElement('h1');
    title.classList.add('game-title');
    title.textContent = name;
    if (broken) {
      title.classList.add('blocked');
      title.textContent += ' [broken]';
    }
  
    tile.appendChild(icon);
    tile.appendChild(title);
    cardContainer.appendChild(tile);
  
    cardContainer.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      openNewTab(url);
    });
  
    return cardContainer;
  }
  
//   // Function to add cards to the container
// function addCardsToContainer(container, cardsData) {
//   const normalCards = [];
//   const blockedOrBrokenCards = [];

//   cardsData.forEach(cardData => {
//     const { url, type, name, broken } = cardData;
//     const cardElement = createCard(url, type, name, broken);
//     if (broken || cardElement.querySelector('.game-title').classList.contains('blocked')) {
//       blockedOrBrokenCards.push(cardElement);
//     } else {
//       normalCards.push(cardElement);
//     }
//   });

//   // Sort normal cards alphabetically by name
//   normalCards.sort((a, b) => {
//     const nameA = a.querySelector('.game-title').textContent.toUpperCase();
//     const nameB = b.querySelector('.game-title').textContent.toUpperCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
//   });

//   // Append normal cards first, then blocked or broken cards
//   normalCards.forEach(card => container.appendChild(card));
//   blockedOrBrokenCards.forEach(card => container.appendChild(card));
// }

//   // Fetch data from JSON file
//   async function fetchCardsData() {
//     try {
//       const response = await fetch('/files/proxies.json');
//       const cardsData = await response.json();
  
//       const cardsContainer = document.getElementById('search');
//       addCardsToContainer(cardsContainer, cardsData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   // Load cards when the page is loaded
//   fetchCardsData();
  
  

// Function to add cards to the container
async function addCardsToContainer(container, cardsData) {
    const adFrequency = 20; // Insert ad after every 4 normal cards
    let cardCounter = 0;
  
    for (let index = 0; index < cardsData.length; index++) {
      const { url, type, name, broken } = cardsData[index];
      const cardElement = createCard(url, type, name, broken);
  
      if ((index + 1) % adFrequency === 0 && index !== 0) {
        const adContainer = document.createElement('div');
        adContainer.classList.add('game-link', 'container', 'ad-container');
  
        const adTile = document.createElement('div');
        adTile.classList.add('game-tile', 'ad-tile');
  
        const adScript = document.createElement('script');
        adScript.setAttribute('src', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7128870281959256');
        adScript.setAttribute('crossorigin', 'anonymous');
  
        const adIns = document.createElement('ins');
        adIns.classList.add('adsbygoogle');
        adIns.setAttribute('style', 'display:block');
        adIns.setAttribute('data-ad-format', 'fluid');
        adIns.setAttribute('data-ad-layout-key', '+2a+s2+1m-5w+4a');
        adIns.setAttribute('data-ad-client', 'ca-pub-7128870281959256');
        adIns.setAttribute('data-ad-slot', '4892790837');
  
        adTile.appendChild(adScript);
        adTile.appendChild(adIns);
        adContainer.appendChild(adTile);
  
        container.appendChild(adContainer);
      }
  
      if (broken || cardElement.querySelector('.game-title').classList.contains('blocked')) {
        container.appendChild(cardElement);
      } else {
        container.appendChild(cardElement);
        cardCounter++;
      }
    }
  }
  
  // Fetch data from JSON file
  async function fetchCardsData() {
    try {
      const response = await fetch('/files/proxies.json');
      const cardsData = await response.json();
  
      const cardsContainer = document.getElementById('search');
      await addCardsToContainer(cardsContainer, cardsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Load cards when the page is loaded
  fetchCardsData();
  