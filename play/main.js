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

                    const originalUrl = matchingGame.url;
                    const replacedUrl = originalUrl.includes("index.html") ? originalUrl.replace("index.html", "") : originalUrl;

                    const urlsToTry = [
                        `${replacedUrl}game.html`,
                        `${replacedUrl}build/index.html`,
                        `${replacedUrl}file/index.html`,
                        `${replacedUrl}game/index.html`,
                    ];

                    // Load the loading screen immediately
                    const showLoadingScreen = () => {
                        // Create loading iframe
                        iframeContainer.innerHTML = `<iframe class="game-iframe loading-iframe" id="loading-area" src="/loading.html" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
                        
                        // Create overlay iframe
                        iframeContainer.innerHTML += `<iframe class="game-iframe overlay-iframe" id="overlay-area" src="about:blank" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
                        
                        // Remove loading iframe after 3 seconds
                        setTimeout(() => {
                            const loadingIframe = document.getElementById('loading-area');
                            const overlayIframe = document.getElementById('overlay-area');
                            const fullscreenBtn = document.getElementById('fullscreen-btn');
                            if (loadingIframe) {
                                fullscreenBtn.onclick = () => open_fullscreen();
                                fullscreenBtn.classList.remove('fullscreen-btn-disabled');
                                overlayIframe.remove();
                                loadingIframe.style.display = 'none'; // Hide loading iframe
                            }
                        }, 3000); // 3000 milliseconds = 3 seconds
                    };

                    const loadGame = async (url) => {
                        // Load the game iframe
                        iframeContainer.innerHTML += `<iframe class="game-iframe" id="game-area" src="${url}" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
                    };

                    const tryUrls = async () => {
                        // Display loading.html immediately
                        showLoadingScreen();

                        // Check each URL one by one
                        for (const currentUrl of urlsToTry) {
                            try {
                                const response = await fetch(currentUrl, { method: 'HEAD' });
                                if (response.ok) {
                                    console.warn(`Changed URL to: ${currentUrl}`);
                                    await loadGame(currentUrl); // Load the valid game URL
                                    return; // Exit after loading
                                }
                            } catch (error) {
                                console.error("Error checking URL:", error);
                            }
                        }

                        // If all URLs fail, fallback to the original URL
                        console.error('No valid URLs found, falling back to original URL');
                        await loadGame(originalUrl);
                    };

                    const playButton = document.getElementById('play-now-btn');
                    playButton.addEventListener('click', () => {
                        tryUrls(); // Start the URL checking process
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
