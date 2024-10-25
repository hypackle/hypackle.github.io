document.addEventListener("DOMContentLoaded", () => {
      const queryString = decodeURIComponent(window.location.search.substring(1));
      const gameTitleElement = document.getElementById('game-title');
      const iframeContainer = document.getElementById('game-placeholder');
  
      if (!queryString) {
          window.location.href = '/library.html';
          gameTitleElement.textContent = 'Error';
      } else {
          const query = queryString.toLowerCase().replace(/%20/g, ' ');
          fetch('/index.json')
              .then(response => response.json())
              .then(data => {
                  const matchingGame = data.find(game => game.name.toLowerCase() === query);
                  if (matchingGame) {
                      gameTitleElement.textContent = matchingGame.name;
                      document.getElementById('FullscreenGlitchUrl').href = matchingGame.url;
                      document.getElementById('contentBackground').src = matchingGame.imageSrc;
  
                      const tryUrls = async () => {
                          // Display loading.html on top of the game iframe
                          iframeContainer.innerHTML = `<iframe class="game-iframe" id="game-area" src="/loading.html" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
                          
                          // Function to delay hiding the loading page
                          const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  
                          // Delay hiding the loading page for 3 seconds
                          await delay(600);
  
                          const originalUrl = matchingGame.url;
                          const replacedUrl = originalUrl.includes("index.html") ? originalUrl.replace("index.html", "") : originalUrl;
  
                          const urlsToTry = [
                              `${replacedUrl}game.html`,
                              `${replacedUrl}build/index.html`,
                              `${replacedUrl}file/index.html`,
                              `${replacedUrl}game/index.html`,
                          ];
  
                          for (const currentUrl of urlsToTry) {
                              try {
                                  const response = await fetch(currentUrl, { method: 'HEAD' });
                                  if (response.ok) {
                                      console.warn(`changed url to${currentUrl}`)
                                      // If the URL exists, load it in the iframe
                                      iframeContainer.innerHTML = `<iframe class="game-iframe" id="game-area" src="${currentUrl}" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
                                      return;
                                  }
                              } catch (error) {
                                  console.error("Error checking URL:", error);
                              }
                          }
  
                          // If all URLs fail, fallback to the original URL
                          iframeContainer.innerHTML = `<iframe class="game-iframe" id="game-area" src="${originalUrl}" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
                      };
  
                      const playButton = document.getElementById('play-now-btn');
                      playButton.addEventListener('click', () => {
                          tryUrls();
                      });
                  } else {
                      gameTitleElement.textContent = 'Game not found';
                  }
              })
              .catch(error => {
                  console.error('Error fetching JSON:', error);
                  gameTitleElement.textContent = 'Error fetching game data';
              });
      }
  });
  