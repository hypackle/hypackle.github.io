// ________________________________________________________________
// Pick Random Color from array for Game Card Hover
// ________________________________________________________________

function getRandomColor() {
    // Array of available colors
    var colors = ["#FE191E", "#001377", "#404EED"];
    // Generate a random index
    var index = Math.floor(Math.random() * colors.length);
    // Return the color at the random index
    return colors[index];
}

// ________________________________________________________________
// Initally create the game cards
// ________________________________________________________________
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("titlesearch").style.display = "none";
    const gameContainer = document.getElementById("game-container");
    const loadMoreBtn = document.getElementById("load-more-btn");
    let gamesLoaded = 0;
    const gamesToLoad = 20;

    // Function to retrieve recent plays from localStorage
    function getRecentPlays() {
        const recentPlaysJSON = localStorage.getItem("recentPlays");
        console.log("Recent Plays JSON:", recentPlaysJSON);
        const recentPlays = recentPlaysJSON ? JSON.parse(recentPlaysJSON) : [];
        console.log("Recent Plays:", recentPlays);
        return recentPlays;
    }

    // Function to save recent plays to localStorage
    function saveRecentPlays(recentPlays) {
        localStorage.setItem("recentPlays", JSON.stringify(recentPlays));
    }

    // Function to log a game click and save it to localStorage
    function logGameClick(gameTitle) {
        const recentPlays = getRecentPlays();
        const index = recentPlays.indexOf(gameTitle);

        if (index !== -1) {
            // If the game is already in localStorage, move it to the top
            recentPlays.splice(index, 1); // Remove from current position
        }

        // Add the clicked game to recent plays
        recentPlays.unshift(gameTitle); // Add to the beginning of the array

        // Keep only the last 10 plays
        const last10Plays = recentPlays.slice(0, 10);

        // Save the recent plays back to localStorage
        saveRecentPlays(last10Plays);
    }

    // Function to create game card element
    function createGameCard(game) {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // Add event listener for mouseover
        gameCard.addEventListener("mouseover", function() {
            // Set the background color to a random color
            gameCard.style.backgroundColor = getRandomColor();
        });
        // Add event listener for mouseout
        gameCard.addEventListener("mouseout", function() {
            // Set the background color to transparent
            gameCard.style.backgroundColor = "transparent";
        });
        gameCard.addEventListener("click", function() {
            logGameClick(game.name); // Log the clicked game
            if (game.requiresProxy) {
                const userResponse = prompt(
                    "A Proxy or VPN is required to play this game. Do you have a proxy or VPN enabled? If you don't have a proxy, go to the proxies page and get a Rammerhead (yes/no)"
                );

                if (userResponse && userResponse.toLowerCase() === "yes") {
                    window.location.href = game.url;
                } else {
                    alert(
                        "You need a proxy or VPN to play this game. Please enable one and come back."
                    );
                }
            } else {
                window.location.href = game.url;
            }
        });

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const img = document.createElement("img");
        img.src = game.imageSrc;
        img.onerror = function() {
            this.src = "/fork/image-placeholder.png";
        };
        imageContainer.appendChild(img);

        const h3 = document.createElement("h3");
        h3.textContent = game.name;
        gameCard.appendChild(imageContainer);
        gameCard.appendChild(h3);

        return gameCard;
    }

    // Function to load games
    function loadGames() {
        // Fetch default games from JSON file
        fetch("./games.json")
            .then((response) => response.json())
            .then((data) => {
                // Parse URL to extract filter parameters
                const urlParams = new URLSearchParams(window.location.search);
                const filterParams = urlParams.get("filter");

                // Function to check if game tags match filter parameters
                const matchFilter = (game) => {
                    if (!filterParams) return true; // Show all games if no filter parameters provided
                    const filterTags = filterParams
                        .split(",")
                        .map((tag) => tag.trim().toLowerCase());
                    const gameTags = game.tags
                        ?.split(",")
                        .map((tag) => tag.trim().toLowerCase()); // Safeguard against undefined tags
                    return gameTags && filterTags.some((tag) => gameTags.includes(tag)); // Check if gameTags is defined before checking for matches
                };

                // Filter data based on matching tags
                const filteredData = data.filter((game) => matchFilter(game));

                // Sort the filtered data array by the 'name' property
                filteredData.sort((a, b) => {
                    // Move objects with 'new' in name to the top
                    if (
                        a.name.toLowerCase().includes("new") &&
                        !b.name.toLowerCase().includes("new")
                    ) {
                        return -1;
                    } else if (
                        !a.name.toLowerCase().includes("new") &&
                        b.name.toLowerCase().includes("new")
                    ) {
                        return 1;
                    } else {
                        return a.name.localeCompare(b.name);
                    }
                });

                // Load games
                const remainingSlots = gamesToLoad;
                filteredData
                    .slice(0, remainingSlots > 0 ? remainingSlots : 0)
                    .forEach((game) => {
                        const gameCard = createGameCard(game);
                        gameContainer.appendChild(gameCard);
                    });

                // Update games loaded count
                gamesLoaded += remainingSlots;

                // Hide load more button if all games have been loaded
                if (gamesLoaded >= data.length) {
                    loadMoreBtn.style.display = "none";
                }
            })
            .catch((error) => {
                console.error("Error loading games:", error);
            });
    }

    // Function to load more games
    function loadMoreGames() {
        // Fetch default games from JSON file
        fetch("./games.json")
            .then((response) => response.json())
            .then((data) => {
                // Parse URL to extract filter parameters
                const urlParams = new URLSearchParams(window.location.search);
                const filterParams = urlParams.get("filter");

                // Function to check if game tags match filter parameters
                const matchFilter = (game) => {
                    if (!filterParams) return true; // Show all games if no filter parameters provided
                    const filterTags = filterParams
                        .split(",")
                        .map((tag) => tag.trim().toLowerCase());
                    const gameTags = game.tags
                        ?.split(",")
                        .map((tag) => tag.trim().toLowerCase()); // Safeguard against undefined tags
                    return gameTags && filterTags.some((tag) => gameTags.includes(tag)); // Check if gameTags is defined before checking for matches
                };

                // Filter data based on matching tags
                const filteredData = data.filter((game) => matchFilter(game));

                // Load next batch of games
                const startIndex = gamesLoaded;
                const endIndex = startIndex + gamesToLoad;
                const nextGames = filteredData.slice(startIndex, endIndex);
                nextGames.forEach((game) => {
                    const gameCard = createGameCard(game);
                    gameContainer.appendChild(gameCard);
                });
                gamesLoaded += gamesToLoad;
                if (gamesLoaded >= filteredData.length) {
                    if (loadMoreBtn) {
                        // Check if loadMoreBtn is defined
                        loadMoreBtn.style.display = "none"; // Change display to none if no more games to load
                        document.getElementById("nomore").style.display = "block";
                        window.removeEventListener("scroll", scrollEventHandler);
                        document.getElementById("loadingtext").style.display = "none";
                        document.getElementById("loadingImage").style.display = "none";
                        // Later, when you want to remove the event listener
                    }
                }
            })
            .catch((error) => {
                console.error("Error loading games:", error);
            });
    }

    // Add event listener to load more button
    loadMoreBtn.addEventListener("click", loadMoreGames);
});


// ________________________________________________________________
// Adds tags to dropdown for filtering
// ________________________________________________________________

fetch("./games.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        // Extract all unique tags
        const allTags = new Set();
        data.forEach((game) => {
            if (game.tags) {
                game.tags
                    .split(",")
                    .forEach((tag) => allTags.add(tag.trim().toLowerCase()));
            }
        });

        // Convert Set to array for easy manipulation
        const tagsArray = Array.from(allTags);

        // Populate dropdown menu with unique tags
        const dropdownMenu = document.getElementById("dropdown-content");
        tagsArray.forEach((tag) => {
            const anchor = document.createElement("a");
            anchor.textContent = tag;
            anchor.href = "#"; // Set href to '#' to prevent page reload
            anchor.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent default anchor behavior (e.g., page reload)
                const currentUrl = new URL(window.location.href);
                const filterParam = currentUrl.searchParams.get("filter");
                const newFilterParam = tag;
                currentUrl.searchParams.set("filter", newFilterParam);
                window.location.href = currentUrl.toString();
            });
            dropdownMenu.appendChild(anchor);
        });
    })
    .catch((error) => {
        console.error("Error loading JSON data:", error);
    });

    
// ________________________________________________________________
// Function to Calculate the scroll speed and click the load more button
// ________________________________________________________________

// Variable to store the last scroll position
var lastScrollPosition = 0;

// Variable to store whether scrolling is fast or not
var isScrollingFast = false;

// Function to calculate scrolling speed
function calculateScrollSpeed() {
    var currentScrollPosition = window.scrollY;
    var scrollSpeed = Math.abs(currentScrollPosition - lastScrollPosition);
    lastScrollPosition = currentScrollPosition;
    isScrollingFast = scrollSpeed > 50; // Adjust this threshold as needed
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Define a debounce function
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Define the scroll event handler function
function scrollEventHandler() {
    calculateScrollSpeed();

    var scrollPosition = window.innerHeight + window.scrollY;
    var documentHeight = document.body.scrollHeight;

    // If user has scrolled to the bottom and not scrolling fast
    if (scrollPosition >= documentHeight && !isScrollingFast) {
        var loadMoreBtn = document.getElementById("load-more-btn");

        // Check if the preloader is currently displayed
        var isPreloaderDisplayed =
            document.getElementById("preloader").style.display === "block";
        // Check if the boxythingy is currently displayed
        var isBoxythingyDisplayed =
            document.getElementById("boxythingy").style.display === "block";

        if (!isPreloaderDisplayed && !isBoxythingyDisplayed) {
            const rndInt = Math.floor(Math.random() * 2) + 1; // Generate a random number between 1 and 2
            console.log(rndInt);

            if (rndInt === 1) {
                document.getElementById("preloader").style.display = "block";
                document.getElementById("boxythingy").style.display = "none";
            } else {
                document.getElementById("preloader").style.display = "none";
                document.getElementById("boxythingy").style.display = "block";
            }

            loadMoreBtn.style.display = "none"; // Hide the load more button
            document.getElementById("loadingtext").style.display = "none"; // Show the loading text

            // Wait for 2 seconds
            setTimeout(function() {
                loadMoreBtn.style.display = "block"; // Show the load more button
                document.getElementById("preloader").style.display = "none";
                document.getElementById("boxythingy").style.display = "none";
                document.getElementById("loadingtext").style.display = "none"; // Hide the loading text
                loadMoreBtn.disabled = false; // Enable the load more button
                loadMoreBtn.click();
            }, 2000);
        }
    }
}

// Add event listener for scroll events
window.addEventListener("scroll", scrollEventHandler);



// ________________________________________________________________
// Function to Display recent plays at the top
// ________________________________________________________________
document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons and games container for single row
    const prevButtonSingleRow = document.querySelector(".prev-button");
    const nextButtonSingleRow = document.querySelector(".next-button");
    const gamesContainerSingleRow = document.getElementById(
        "recentPlaysContainer"
    );

    // Load images for single row when the page initially loads
    loadImagesForSingleRow();

    // Add event listeners to buttons for single row
    prevButtonSingleRow.addEventListener("click", scrollLeftSingleRowWithDelay);
    nextButtonSingleRow.addEventListener("click", scrollRightSingleRowWithDelay);

    // Scroll container left for single row with a small delay
    function scrollLeftSingleRowWithDelay() {
        loadImagesForSingleRow(); // Load images
        setTimeout(() => {
            gamesContainerSingleRow.scrollLeft -= gamesContainerSingleRow.clientWidth; // Scroll one page left
        }, 1); // Delay of 500 milliseconds
    }

    // Scroll container right for single row with a small delay
    function scrollRightSingleRowWithDelay() {
        loadImagesForSingleRow(); // Load images
        setTimeout(() => {
            gamesContainerSingleRow.scrollLeft += gamesContainerSingleRow.clientWidth; // Scroll one page right
        }, 500); // Delay of 500 milliseconds
    }

    // Update back button visibility based on scroll position
    gamesContainerSingleRow.addEventListener("scroll", function() {
        if (gamesContainerSingleRow.scrollLeft > 0) {
            prevButtonSingleRow.classList.remove("hidden");
        } else {
            prevButtonSingleRow.classList.add("hidden");
        }
    });
    // Load games for single row from JSON file
    function loadImagesForSingleRow() {
        const recentPlaysData = JSON.parse(localStorage.getItem("recentPlays"));
        if (recentPlaysData) {
            fetch("games.json")
                .then((response) => response.json())
                .then((data) => {
                    gamesContainerSingleRow.innerHTML = ""; // Clear previous content

                    recentPlaysData.forEach((play) => {
                        const matchedGame = data.find((game) => game.name === play);
                        if (matchedGame) {
                            const playItem = createGameItem(matchedGame);
                            playItem.addEventListener("click", function() {
                                loclogGameClick(matchedGame.name);
                                window.location.href = matchedGame.url;
                            });
                            gamesContainerSingleRow.appendChild(playItem);
                        }
                    });

                    function matchFirstItemAndAccessImgSrc() {
                        const arrayFromLocalStorage = JSON.parse(
                            localStorage.getItem("recentPlays")
                        );

                        if (
                            Array.isArray(arrayFromLocalStorage) &&
                            arrayFromLocalStorage.length > 0
                        ) {
                            const firstItem = arrayFromLocalStorage[0];
                            console.log("First item in the array:", firstItem);

                            fetch("games.json")
                                .then((response) => response.json())
                                .then((data) => {
                                    const matchedGame = data.find(
                                        (game) => game.name === firstItem
                                    );
                                    if (matchedGame) {
                                        console.log("Image Source:", matchedGame.imageSrc);
                                        if (
                                            localStorage.getItem("likesscreen") == null ||
                                            localStorage.getItem("likesscreen") == "true"
                                        ) {
                                            document.getElementById(
                                                "particles-js"
                                            ).style.backgroundImage =
                                                "url(" + matchedGame.imageSrc + ")";
                                            if (localStorage.getItem("likesscreen") == "true") {
                                                document.getElementById(
                                                    "fixed-nav-bar"
                                                ).style.backgroundColor = "rgba(0,0,0,0.8)";
                                            }
                                        } else {
                                            var script = document.createElement("script");
                                            script.type = "text/javascript";
                                            script.src = "/assets/js/selectwithoutselect.js";
                                            document.head.appendChild(script);
                                        }
                                        var overlay = document.getElementById("particles-js");
                                        overlay.style.backgroundSize = "cover";
                                        overlay.style.backgroundPosition = "center";

                                        var overlayStyle = document.createElement("style");
                                        overlayStyle.innerHTML = `
                        #particles-js::before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(to bottom, rgba(28, 28, 28, 0), #171717);
                            z-index: 0; /* Ensure overlay is below content */
                        }
                    `;

                                        document.head.appendChild(overlayStyle);
                                    } else {
                                        console.log("No matching game found.");
                                    }
                                })
                                .catch((error) => {
                                    console.error("Error fetching data:", error);
                                });
                        } else {
                            console.log("The array is empty or not found in localStorage.");
                        }
                    }

                    matchFirstItemAndAccessImgSrc();
                });
        } else {
            document.getElementById("recentplaystext").style.display = "none";
            document.getElementById("polli").style.display = "none";
            document.addEventListener("DOMContentLoaded", function() {
                const scripttt = document.createElement("script");
                scripttt.src = "/assets/js/selectwithoutselect.js";
                document.head.appendChild(scripttt);
            });
        }
    }

    // Helper function to create a game item
    function createGameItem(game) {
        const gameItem = document.createElement("div");
        gameItem.classList.add(
            "game-item",
            "relative",
            "cursor-pointer",
            "w-full",
            "h-36",
            "rounded-xl",
            "overflow-hidden"
        );

        function removeWordsIfPresent(inputString, wordsToRemove) {
            let words = inputString.split(" ");

            for (let word of wordsToRemove) {
                words = words.filter((w) => w !== word);
            }

            return words.join(" ");
        }

        const inputString =
            "NEW new a [Updated] [updated] [UPDATED] [Needs Internet] [Method 2] 'remove' and 'example' that we want to remove.";
        const wordsToRemove = [
            "NEW",
            "new",
            "[Updated]",
            "[updated]",
            "[UPDATED]",
            "[Needs Internet]",
            "[Method 2]",
            " [Method 2]",
        ];
        const resultString = removeWordsIfPresent(game.name, wordsToRemove);
        console.log(resultString);

        const borderDecoration = document.createElement("div");
        borderDecoration.classList.add(
            "absolute",
            "inset-0",
            "w-full",
            "h-full",
            "border-transparent",
            "border-[3px]",
            "hover:border-primary",
            "rounded-xl",
            "ease-linear",
            "transition"
        );

        const image = document.createElement("img");
        image.src = game.imageSrc;
        image.alt = resultString;
        image.title = resultString;
        image.onerror = function() {
            this.src = "/fork/image-placeholder.png";
        };

        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        let overlayContent = `<div class="overlay-content"><h1 class="text-lg font-bold">${resultString}</h1>`;
        overlayContent += `</div>`;
        overlay.innerHTML = overlayContent;

        gameItem.appendChild(image);
        gameItem.appendChild(overlay);
        gameItem.appendChild(borderDecoration);

        return gameItem;
    }
});
