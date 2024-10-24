const blankSwitch = document.getElementById("open_blank");

if (blankSwitch) {
  blankSwitch.addEventListener("change", function () {
    if (blankSwitch.checked) {
      openBlank();
    }
  });
}

function openBlank() {
  var win = window.open();
  var url = window.origin;
  var iframe = win.document.createElement("iframe");
  win.document.body.style.margin = "0";
  win.document.body.style.padding = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "0";
  iframe.src = url;
  win.document.body.appendChild(iframe);
}
