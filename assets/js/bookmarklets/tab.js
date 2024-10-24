//Autofocus without scroll
document.querySelector("#userinput").focus({
  preventScroll: true
});

const image_preview = document.getElementById("image-preview");
const console_output = document.getElementById("console-output");

//Change tabTitle
const changeTabTitle = () => {
  const newtitle = document.getElementById("userinput");
  if (newtitle.value == ""){ //check if the input is blank when they submit
      window.localStorage.removeItem("title");
      window.document.title = "hypackel2.github.io"
      document.getElementById("console-output").style.color = "red"; //error = red
      console_output.innerText = "No title entered. Default applied" //return output successful
  } else {
      window.localStorage.setItem("title", newtitle.value);
      window.document.title = newtitle.value; //Set window's title to userinput
      document.getElementById("console-output").style.color = "green"; //reset output's color to green
      console_output.innerText = "Title change successful" //return output successful
  }
  newtitle.value = ""; //clear input
};

//Change the tabIcon
const changeTabIcon = () => {
  const newfavicon = document.getElementById("userinput");
  if (validURL(newfavicon.value)){
      document.querySelector("link[rel*='icon']").href = newfavicon.value;
      window.localStorage.setItem("icon", newfavicon.value);
      document.getElementById("console-output").style.color = "green";
      console_output.innerText = "Icon change successful"
  } else {
      document.getElementById("console-output").style.color = "red";
      console_output.innerText = "Icon change failed. Make sure you are using a valid URL"
  }
  newfavicon.value = ""; //clear input
};

//URL Validation Regex
const validURL = (str) => {
  var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var regex = new RegExp(expression);
  return !!regex.test(str);
}

//Clears Tab Icon and Title
const resetTabSettings = () => {
  let items = ["icon", "title"];
  items.forEach(item =>
  window.localStorage.removeItem(item));
  document.getElementById("console-output").style.color = "black";
  console_output.innerText = "Resetting..."
  window.location.reload();
};

// Handle Apply buttons

function applyUrl(url, title){
document.getElementById("userinput").value = url;
changeTabIcon();
document.getElementById("userinput").value = title;
changeTabTitle();
document.getElementById("console-output").style.color = "green";
console_output.innerText = "Preset applied successfully!"
}