Notification.requestPermission();
var consent = localStorage.getItem("notify");
if (!consent) {
  localStorage.setItem("notify", true)
}

async function send() {
  var consent = localStorage.getItem("notify");
  if (consent == "true") {
    console.log("consent true")

    let jdata = await fetch("/dump/new-game.json");
    let jsdata = await jdata.json();

    console.log(jsdata);

    var gc = localStorage.getItem("gamecode");
    if (!gc) {
      localStorage.setItem("gamecode", jsdata.gaSmecode - 1);
    }

    var clicklink = window.location.origin + jsdata.link
    var img = "/favicon.png";
    var text = "A new game has been released, " + jsdata.title + ". Click here to play it now!";
    var notif = new Notification("New game added!", { body: text, icon: img });
    localStorage.setItem("gamecode", jsdata.gamecode);
    notif.addEventListener("click", function () {
      window.open(clicklink);
    });
  } else {
    console("consent false")
  }
}

if (Notification.permission == "false") {
  localStorage.setItem("notify", false);
} else {
  send();
}