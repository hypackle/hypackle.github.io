// get data from local storage
var ga = window.localStorage.getItem("ga");
var redads = window.localStorage.getItem("redads");
// fill local storage with data if it is empty
if (!redads) {
  window.localStorage.setItem("redads", "true");
  location.reload();
};
if (!ga) {
  window.localStorage.setItem("ga", "true");
  location.reload();
};
// validate the data
if (!["true", "false"].includes(redads)) {
  window.localStorage.setItem("redads", "true");
  location.reload();
};
if (!["true", "false"].includes(ga)) {
  window.localStorage.setItem("ga", "true");
  location.reload();
};
// update the switches
if (ga == "true") {
  document.getElementById("ga").checked = true;
} else {
  document.getElementById("ga").checked = false;
  document.getElementById("gapls").innerText = "Please turn this on so I can see detailed analytics!";
};
if (redads == "true") {
  document.getElementById("redadswitch").checked = true;
} else {
  document.getElementById("redadswitch").checked = false;
  document.getElementById("redadpls").innerText = "Please turn this on to support me!";
};

function tog1() {
  if (document.getElementById("redadswitch").checked) {
    let ram = navigator.deviceMemory;
    if (ram === undefined) {
      alert("Sorry, this feature is not available in this broswer. Please switch to Chrome, Opera, or Edge to use this feature!");
      document.getElementById("redadswitch").checked = true;
      window.localStorage.setItem("redads", "true");
      return;
    } else if (ram > 1) {
      alert("Sorry, this feature is restricted to low-end devices that can not display ads. Please switch to a low-end device to use this feature.");
      document.getElementById("redadswitch").checked = true;
      window.localStorage.setItem("redads", "true");
      return;
    };
    document.getElementById("redadswitch").checked = false;
    window.localStorage.setItem("redads", "false"); //we dont want this
    location.reload();
  } else {
    document.getElementById("redadswitch").checked = true;
    window.localStorage.setItem("redads", "true");
    location.reload();
  };
};

function tog2() {
  if (document.getElementById("ga").checked) {
    document.getElementById("ga").checked = false;
    window.localStorage.setItem("ga", "false"); //we dont want this
    location.reload();
  } else {
    document.getElementById("ga").checked = true;
    window.localStorage.setItem("ga", "true");
    location.reload();
  };
};