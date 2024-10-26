// Data for dropdown options
const options = [
    { name: "Default", icon: "/app.png", title: "Home | Hypackel" },
    { name: "Google", icon: "/favicon/google.png", title: "Google" },
    { name: "Drive", icon: "/favicon/drive.png", title: "My Drive - Google Drive" },
    { name: "Classroom", icon: "/favicon/classroom.png", title: "Home" },
    { name: "Schoology", icon: "/favicon/schoology.png", title: "Home | Schoology" },
    { name: "Schoology (Powerschool Icon)", icon: "/favicon/ps.ico", title: "Home | Schoology" },
    { name: "Gmail", icon: "/favicon/gmail.png", title: "Gmail" },
    { name: "Clever", icon: "/favicon/clever.png", title: "Clever | Portal" },
    { name: "Khan", icon: "/favicon/khan.png", title: "Dashboard | Khan Academy" },
    { name: "Campus", icon: "/favicon/campus.png", title: "Infinite Campus" },
    { name: "IXL", icon: "/favicon/ixl.png", title: "IXL | Dashboard" },
    { name: "Canvas", icon: "/favicon/canvas.png", title: "Dashboard" },
    { name: "LinkIt", icon: "/favicon/linkit.ico", title: "Test Taker" },
    { name: "Edpuzzle", icon: "/favicon/edpuzzle.png", title: "Edpuzzle" },
    { name: "i-Ready Math", icon: "/favicon/i-ready.ico", title: "Math To Do, i-Ready" },
    { name: "i-Ready Reading", icon: "/favicon/i-ready.ico", title: "Reading To Do, i-Ready" },
    { name: "ClassLink Login", icon: "/favicon/classlink-login.png", title: "Login" },
    { name: "Google Meet", icon: "/favicon/google-meet.png", title: "Google Meet" },
    { name: "Google Docs", icon: "/favicon/google-docs.ico", title: "Google Docs" },
    { name: "Google Slides", icon: "/favicon/google-slides.ico", title: "Google Slides" },
    { name: "Wikipedia", icon: "/favicon/wikipedia.png", title: "Wikipedia" },
    { name: "Britannica", icon: "/favicon/britannica.png", title: "Encyclopedia Britannica | Britannica" },
    { name: "Ducksters", icon: "/favicon/ducksters.png", title: "Ducksters" },
    { name: "Minga", icon: "/favicon/minga.png", title: "Minga - Creating Amazing Schools" },
    { name: "i-Ready Learning Games", icon: "/favicon/i-ready.ico", title: "Learning Games, i-Ready" },
    { name: "NoRedInk Home", icon: "/favicon/noredink.webp", title: "Student Home | NoRedInk" },
    { name: "Newsela Binder", icon: "/favicon/newsela.png", title: "Newsela | Binder" },
    { name: "Newsela Assignments", icon: "/favicon/newsela.png", title: "Newsela | Assignments" },
    { name: "Newsela Home", icon: "/favicon/newsela.png", title: "Newsela | Instructional Content Platform" },
    { name: "PowerSchool Sign In", icon: "/favicon/powerschool.png", title: "Student and Parent Sign In" },
    { name: "PowerSchool Grades and Attendance", icon: "/favicon/powerschool.png", title: "Grades and Attendance" },
    { name: "PowerSchool Teacher Comments", icon: "/favicon/powerschool.png", title: "Teacher Comments" },
    { name: "PowerSchool Standards Grades", icon: "/favicon/powerschool.png", title: "Standards Grades" },
    { name: "PowerSchool Attendance", icon: "/favicon/powerschool.png", title: "Attendance" },
    { name: "Nearpod", icon: "/favicon/nearpod.png", title: "Nearpod" },
    { name: "StudentVUE", icon: "/favicon/studentvue.ico", title: "StudentVUE" },
    { name: "Quizlet Home", icon: "/favicon/quizlet.webp", title: "Flashcards, learning tools and textbook solutions | Quizlet" },
    { name: "Google Forms Locked Mode", icon: "/favicon/googleforms.png", title: "Start your quiz" },
    { name: "DeltaMath", icon: "/favicon/deltamath.png", title: "DeltaMath" },
    { name: "Kami", icon: "/favicon/kami.png", title: "Kami" },
    { name: "GoGuardian Admin Restricted", icon: "/favicon/goguardian-lock.png", title: "Restricted" },
    { name: "GoGuardian Teacher Block", icon: "/favicon/goguardian.png", title: "Uh oh!" },
    { name: "World History Encyclopedia", icon: "/favicon/worldhistoryencyclopedia.png", title: "World History Encyclopedia" },
    { name: "Big Ideas Math Assignment Player", icon: "/favicon/bim.ico", title: "Assignment Player" },
    { name: "Big Ideas Math", icon: "/favicon/bim.ico", title: "Big Ideas Math" },
];

// Create dropdown
function createDropdown() {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.style.position = 'fixed';
    // dropdownContainer.style.width = '10px';
    dropdownContainer.style.bottom = '20px';
    dropdownContainer.style.right = '20px';
    dropdownContainer.style.zIndex = '999999999999999999999999999999999999999999999999999';
    dropdownContainer.style.backgroundColor = '#fff';
    dropdownContainer.style.padding = '10px';
    dropdownContainer.style.borderRadius = '5px';
    dropdownContainer.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';

    const select = document.createElement('select');
    select.id = 'site-selector'; 

    // Populate dropdown options
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.icon; // Store icon URL in value
        optionElement.textContent = option.name;
        optionElement.title = option.title;  // Set tooltip
        select.appendChild(optionElement);
    });

    // Load saved selection from local storage
    const savedSite = localStorage.getItem('selectedSite');
    if (savedSite) {
        const savedOption = options.find(option => option.icon === savedSite);
        if (savedOption) {
            select.value = savedOption.icon;
            // Set the document title and favicon immediately
            updateFaviconAndTitle(savedOption);
        }
    }

    select.onchange = () => {
        const selectedOption = options.find(option => option.icon === select.value);
        if (selectedOption) {
            // Update the document title and favicon
            updateFaviconAndTitle(selectedOption);
            // Save selection to local storage
            localStorage.setItem('selectedSite', selectedOption.icon);
        }
    };

    dropdownContainer.appendChild(select);
    document.body.appendChild(dropdownContainer);
}

// Function to update the favicon and title
function updateFaviconAndTitle(selectedOption) {
    // Update the document title
    document.title = selectedOption.title;
    // Update the favicon
    const link = document.querySelector('link[rel="icon"]') || document.createElement('link');
    link.rel = 'icon';
    link.href = selectedOption.icon;
    document.head.appendChild(link);
}

// Run the function to create the dropdown
createDropdown();
