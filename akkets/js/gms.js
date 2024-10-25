// document.onclick = hideMenu;
// document.oncontextmenu = rightClick;

// function hideMenu() {
//   document.getElementById("contextMenu").style.display = "none";
// }

// function rightClick(e) {
//   e.preventDefault();

//   if (document.getElementById("contextMenu").style.display == "block") {
//     hideMenu();
//   } else {
//     var menu = document.getElementById("contextMenu");
//     menu.style.display = 'block';
//     menu.style.left = e.pageX + "px";
//     menu.style.top = e.pageY + "px";
//   }
// }

// ________________________________________________________________
// Adds Game Count to the nav menu
// ________________________________________________________________

fetch("/index.json")
	.then((response) => response.json())
	.then((data) => {
		// Now 'data' contains the parsed JSON data
		let numberOfObjects;

		if (Array.isArray(data)) {
			numberOfObjects = data.length; // If 'data' is an array of objects
		} else if (typeof data === "object") {
			numberOfObjects = Object.keys(data).length; // If 'data' is an object
		} else {
			console.error("Invalid JSON data format");
			return;
		}

		console.log("Number of objects:", numberOfObjects);
		document.getElementById("objectCount").innerHTML = numberOfObjects;
		// document.getElementsByName('search')[0].placeholder = "Games: " + numberOfObjects;
	})
	.catch((error) => console.error("Error reading JSON file:", error));

// ________________________________________________________________
// Loads Game Cards + Search
// ________________________________________________________________

let startIndex = 0;
var cardsPerLoad = 20;
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
	// alert("It's a local server!");
	var cardsPerLoad = 20000000;
} else {
	var cardsPerLoad = 20;
}
let isLoading = false;

function displayCards(data, reset = false) {
	const gameList = document.getElementById("app-list");

	// Clear game list if reset is true
	if (reset) {
		gameList.innerHTML = "";
		startIndex = 0;
	}

	// Sort games based on broken status
	data.sort((a, b) => {
		if (a.broken && !b.broken) {
			return 1; // Move broken games to the bottom
		} if (!a.broken && b.broken) {
			return -1; // Move non-broken games to the top
		}
			return 0; // Maintain the order for games with the same broken status
	});

	// Display cards based on startIndex and cardsPerLoad
	for (
		let i = startIndex;
		i < Math.min(startIndex + cardsPerLoad, data.length);
		i++
	) {
		displayGame(data[i]);
	}

	startIndex += cardsPerLoad;
}

function loadMoreCards(data) {
	if (isLoading) return;

	isLoading = true;
	setTimeout(() => {
		displayCards(data);
		isLoading = false;

		// Hide the "Load More" button if there are no more cards to display
		if (startIndex >= data.length) {
			document.getElementById("loadMoreButton").style.display = "none";
		}
	}, 500); // Simulate a delay for demonstration purposes
}

function fetchGames() {
	return fetch("/index.json")
		.then((response) => response.json())
		.catch((error) => {
			console.error("Error loading JSON:", error);
			return [];
		});
}

function filterGames(data, searchTerm) {
	return data.filter(
		(game) =>
			game.name
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) || // Search by name
			(game.tags &&
				(Array.isArray(game.tags)
					? game.tags.some((tag) =>
							tag.toLowerCase().includes(searchTerm.toLowerCase()),
						)
					: game.tags.toLowerCase().includes(searchTerm.toLowerCase()))), // Search by tags
	);
}

function init() {
	const searchInput = document.getElementById("searchInput");
	const loadMoreButton = document.getElementById("loadMoreButton");

	fetchGames().then((data) => {
		const handleSearch = () => {
			const searchTerm = searchInput.value;
			const filteredGames = filterGames(data, searchTerm);
			displayCards(filteredGames, true);
		};

		searchInput.addEventListener("input", handleSearch);

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				loadMoreCards(data);
			}
		});

		observer.observe(loadMoreButton);

		handleSearch(); // Initial display of cards
	});
}

document.addEventListener("DOMContentLoaded", init);

function displayGame(game) {
	const gameList = document.getElementById("app-list");
	const isBroken = game.broken === true;
	const titleColor = isBroken ? "red" : "inherit"; // Set title color based on broken status
	const gameCard = document.createElement("div");

	window.handleImageError = (event) => {
		event.target.src = "/fork/image-placeholder.png"; // Replace with placeholder image source
		event.target.onerror = null; // Remove the error handler to prevent infinite loops
	};

	let tagsHTML = ""; // Initialize an empty string for tags HTML

	if (Array.isArray(game.tags)) {
		// If game.tags is an array, join its elements
		tagsHTML = game.tags.join(", ");
	} else if (game.tags) {
		// If game.tags exists but is not an array, display it as a string
		tagsHTML = game.tags.toString();
	}
	game.openJustRedirect = game.openJustRedirect === true;

	gameCard.innerHTML = `
        <div id="launchgame" data-url="${game.url}" data-justOpen="${game.openJustRedirect}" data-name="${game.name}" class="app-card">
            <img class="app-image" id="app-image" src="${game.imageSrc}" alt="" onerror="handleImageError(event)">
            <br>
            <h1 style="color: ${titleColor};" id="gme-name" class="title gms-title">${game.name}</h1>
           ${tagsHTML ? `<p class="game-tags-color-switch">${tagsHTML}</p>` : ""} <!-- Conditionally include tags HTML -->
        </div>
    `;

	gameList.appendChild(gameCard);
}

// Redirect to the game page when the game card is clicked
document.addEventListener("click", (event) => {
	if (
		event.target &&
		(event.target.id === "launchgame" ||
			event.target.id === "app-image" ||
			event.target.id === "gme-name")
	) {
		// Find the parent node (game card) of the clicked button
		const gameCard = event.target.closest(".app-card");

		// Extract URL, name, and justOpen flag from the game card
		const gameUrl = gameCard.getAttribute("data-url");
		const gameName = gameCard.getAttribute("data-name");
		const JustOpenUrl = gameCard.getAttribute("data-justOpen");

		// Save the game name to local storage for jump back in
		logGameClick(gameName);

		// Check if JustOpenUrl is 'true' and redirect accordingly
		if (JustOpenUrl === "true") {
			window.location.href = gameUrl;
		} else {
			window.location.href = `/play/index.html?${gameName}`;
		}
	}
});

// ________________________________________________________________
// Recent Plays
// ________________________________________________________________

function getRecentPlays() {
	const recentPlaysJSON = localStorage.getItem("recentPlays");
	console.log("Recent Plays JSON:", recentPlaysJSON);
	const recentPlays = recentPlaysJSON ? JSON.parse(recentPlaysJSON) : [];
	console.log("Recent Plays:", recentPlays);
	return recentPlays;
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

// Function to save recent plays to localStorage
function saveRecentPlays(recentPlays) {
	localStorage.setItem("recentPlays", JSON.stringify(recentPlays));
}

// ________________________________________________________________
// Function to Display recent plays at the top
// ________________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
	// Function to retrieve recent plays from localStorage

	// Get the buttons and games container for single row
	const prevButtonSingleRow = document.querySelector(".prev-button");
	const nextButtonSingleRow = document.querySelector(".next-button");
	const gamesContainerSingleRow = document.getElementById(
		"recentPlaysContainer",
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
		}, 0); // Delay of 500 milliseconds
	}

	// Update back button visibility based on scroll position
	gamesContainerSingleRow.addEventListener("scroll", () => {
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
			fetch("/index.json")
				.then((response) => response.json())
				.then((data) => {
					gamesContainerSingleRow.innerHTML = ""; // Clear previous content

					// biome-ignore lint/complexity/noForEach: im too lazy to fix
					recentPlaysData.forEach((play) => {
						const matchedGame = data.find((game) => game.name === play);
						if (matchedGame) {
							const playItem = createGameItem(matchedGame);
							playItem.addEventListener("click", () => {
								logGameClick(matchedGame.name);
								window.location.href =
									`/play/index.html?${matchedGame.name}`;
							});
							gamesContainerSingleRow.appendChild(playItem);
						}
					});
					// Function to retrieve the first item from localStorage, match it with a game object, and access its imgSrc property
					function matchFirstItemAndAccessImgSrc() {
						// Retrieve the array from localStorage
						const arrayFromLocalStorage = JSON.parse(
							localStorage.getItem("recentPlays"),
						);

						// Check if the array is not empty and retrieve the first item
						if (
							Array.isArray(arrayFromLocalStorage) &&
							arrayFromLocalStorage.length > 0
						) {
							const firstItem = arrayFromLocalStorage[0];
							console.log("First item in the array:", firstItem);

							// Fetch the games data and match the first item
							fetch("/index.json")
								.then((response) => response.json())
								.then((data) => {
									// Find the game object with matching name
									const matchedGame = data.find(
										(game) => game.name === firstItem,
									);
									if (matchedGame) {
										// console.log('Matching game:', matchedGame);
										console.log("Image Source:", matchedGame.imageSrc);
										if (
											localStorage.getItem("likesscreen") == null ||
											localStorage.getItem("likesscreen") == "true"
										) {
											document.getElementById(
												"particles-js",
											).style.backgroundImage =
												`url(${matchedGame.imageSrc})`;
											if (localStorage.getItem("likesscreen") == "true") {
												// .style.backgroundColor = "rgba(0,0,0,0.8)";
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

										// Create and apply styles for overlay using pseudo-element ::before
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

					// Call the function to initiate the process
					matchFirstItemAndAccessImgSrc();

					// gamesContainerSingleRow.appendChild(gameItem);
				});
		} else {
			document.getElementById("spacerOfRecentPlays").style.display = "none";

			document.getElementById("recentplaystext").style.display = "none";
			document.getElementById("ClearRecentPlays").style.display = "none";
			// document.getElementById("polli").style.display = "none";
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
			"overflow-hidden",
		);

		function removeWordsIfPresent(inputString, wordsToRemove) {
			// Split the input string into an array of words
			let words = inputString.split(" ");

			// Remove each word in wordsToRemove from the array of words
			for (const word of wordsToRemove) {
				words = words.filter((w) => w !== word);
			}

			// Join the filtered words back into a string
			return words.join(" ");
		}

		// Example usage:
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

		// console.log(resultString);

		// Border decoration
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
			"transition",
		);

		const image = document.createElement("img");
		image.src = game.imageSrc;
		image.alt = resultString;
		image.title = resultString;
		image.onerror = function () {
			this.src = "/fork/image-placeholder.png";
		};

		const overlay = document.createElement("div");
		overlay.classList.add("overlay");
		let overlayContent = `<div class="overlay-content"><h1 class="text-lg font-bold">${resultString}</h1>`;
		// if (game.tags) {
		//     overlayContent += `<p class="text-sm">${game.tags}</p>`;
		// }
		overlayContent += "</div>";
		overlay.innerHTML = overlayContent;

		gameItem.appendChild(image);
		gameItem.appendChild(overlay);
		gameItem.appendChild(borderDecoration);

		return gameItem;
	}
});

// ________________________________________________________________
// Clear the recent plays
// ________________________________________________________________

function confirmClearRecentPlays() {
	const optionOfRecentPlays = prompt(
		"Are you sure you want to clear your recent plays?",
		"Type 'Yes' to confirm",
	);

	if (optionOfRecentPlays == null || optionOfRecentPlays == "") {
		alert("You pressed Cancel. Not doing anything.");
	} else if (
		optionOfRecentPlays === "Yes" ||
		optionOfRecentPlays === "yes" ||
		optionOfRecentPlays === "y" ||
		optionOfRecentPlays === "Y"
	) {
		localStorage.removeItem("recentPlays");
		alert("Your recent plays have been cleared.");
		window.location.reload();
	} else {
		alert("You typed no or something else. Not doing anything.");
	}
}
