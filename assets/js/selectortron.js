// Save the selected value in localStorage when dropdown value changes
document.addEventListener("DOMContentLoaded", function() {
  // const selectContainer = document.createElement("div");
  // selectContainer.innerHTML = `

  //   <select id="jsSelect">
  //     <option value="/assets/js/lines.js">Lines JS</option>
  //     <option value="/assets/js/snow.js">Snow JS</option>
  //   </select>
  // `;
  // document.body.prepend(selectContainer);

  document.getElementById("fontSelect").addEventListener("change", function() {
      const fontselectedValue = this.value;
      if (fontselectedValue) {
        localStorage.setItem('homefont', fontselectedValue)
        window.location.reload()
      }
  });  



  document.getElementById("jsSelect").addEventListener("change", function() {
      const selectedValue = this.value;
      if (selectedValue) {
          if (selectedValue == 'topo') {
              let pawds = prompt("Enter Password for `Moving Waves`\n Hint: praises me, 3 words: ")
              if (pawds == null || pawds == "") {
                  alert('no')
                  localStorage.setItem("selectedJS", '/assets/js/lines.js');
                  window.location.reload();
              } else if (pawds == 'hypackelisbest') {
                alert('success')
                gtag('event', 'GotPassword', {
                  'event_category': 'True',
                  'event_label': 'hypackel"s password used'
              });
                  localStorage.setItem("selectedJS", selectedValue);
                  window.location.reload();
              }else if(pawds == 'hypackellickstoes'){
              alert('Welcome Home Dillon. Pickle. Toes. Life was all out of lemons so here"s a potato instead.')
              gtag('event', 'GotPassword', {
                'event_category': 'True',
                'event_label': 'Dillon"s password used'
            });
                  localStorage.setItem("selectedJS", selectedValue);
                  window.location.reload();
              }else if (pawds == 'ityped16533characterswhichisalong') {
                gtag('event', 'GotPassword', {
                  'event_category': 'True',
                  'event_label': 'Got it correct'
              });
                alert('You Really made it to the end of hacker typer. Here is it as a reward')
                  localStorage.setItem("selectedJS", selectedValue);
                  window.location.reload();
              } else if (pawds == 'ityped16533characters') {
                gtag('event', 'noGotPassword', {
                  'event_category': 'False',
                  'event_label': 'Didnt get it but was close'
              });
                alert('Look again.')
                  localStorage.setItem("selectedJS", '/assets/js/lines.js');
                  window.location.reload();
              }
               else {
                  alert('Fail')
                  window.location.reload();
              }
              // script.src = selectedValue;

          }else if (selectedValue == 'dirt'){
            localStorage.setItem("selectedJS", selectedValue);
            window.location.reload();
          } else if (document.getElementById('hypackelgamestitle')){
                var hypackelgamestitle = document.getElementById('hypackelgamestitle');
                hypackelgamestitle.style.backgroundColor = 'rgba(0, 0, 0, .5)';
                hypackelgamestitle.style.padding = '10px 5px 5px 10px';
                hypackelgamestitle.style.borderRadius = '5px';
              } else{
          script.src = selectedValue;
          localStorage.setItem("selectedJS", selectedValue);
          window.location.reload();
      }
  }});
});





function selectopo() {


  var videoDiv = document.getElementById('particles-js');
  var video = document.createElement('video');

  video.src = '/assets/img/topo.mp4'; // Provide the path to your video file
  video.autoplay = true;
  video.loop = true;
  video.muted = true;

  // Style the video element
  video.style.position = 'absolute';
  video.style.top = '0';
  video.style.left = '0';
  video.style.width = '100%';
  video.style.height = '100%';
  video.playbackRate = 1;
  video.style.objectFit = 'cover';
  // Set repeat
  video.style.objectFit = 'repeat';

  videoDiv.appendChild(video);
  
  
  


}

document.addEventListener("DOMContentLoaded", function() {
  // Load the selected JS file on page load or default to "Lines JS"
  const defaultValue = localStorage.getItem("selectedJS") || "/assets/js/lines.js";
  if (localStorage.getItem("selectedJS") == 'topo') {
      selectopo();
      document.getElementById("jsSelect").value = defaultValue;
      document.getElementById("fixed-nav-bar").style.backgroundColor = "rgba(0,0,0,0.8)"
      if (document.getElementById('hypackelgamestitle')){
        document.getElementById('hypackelgamestitle').style.backgroundColor = 'rgba(0, 0, 0, 1)';
      }
  } else if (localStorage.getItem("selectedJS") == 'dirt') {



    var videoDiv = document.getElementById('particles-js');
  var img = document.createElement('img');

  img.src = '/assets/img/dirt.webp'; // Provide the path to your video file

  // Style the video element
  img.style.position = 'absolute';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'cover';
  // Set repeat
  img.style.backgroundRepeat = 'no-repeat';

  videoDiv.appendChild(img);
  
    document.getElementById("jsSelect").value = defaultValue;
      document.getElementById("fixed-nav-bar").style.backgroundColor = "rgba(0,0,0,0.8)"
      if (document.getElementById('hypackelgamestitle')){
        document.getElementById('hypackelgamestitle').style.backgroundColor = 'rgba(0, 0, 0, 1)';
      }
  } else {
      const scriptt = document.createElement("script");
      document.getElementById("fixed-nav-bar").style.backgroundColor = "rgba(0,0,0,0)"
      scriptt.src = defaultValue;
      document.getElementById("jsSelect").value = defaultValue;
      document.head.appendChild(scriptt);
  }
});



document.addEventListener("DOMContentLoaded", function() {
  
  
const fontvalue= localStorage.getItem('homefont') || 'atami'
document.getElementById("fontSelect").value = fontvalue
if (document.getElementById('hypackelgamestitle')){
  var newStyle = document.createElement('style');
newStyle.appendChild(document.createTextNode("\
@font-face {\
    font-family: blox2;\
    src: URL('/assets/fonts/Blox2.ttf') format('truetype');\
}\
@font-face {\
    font-family: atami;\
    src: URL('/assets/fonts/Atami-Display.otf') format('truetype');\
}\
@font-face {\
    font-family: tesla;\
    src: URL('/assets/fonts/TESLA.ttf') format('truetype');\
}\
@font-face {\
    font-family: rocksalt;\
    src: URL('/assets/fonts/RockSalt.ttf') format('truetype');\
}\
"));

document.head.appendChild(newStyle);
  var didle = document.getElementById('hypackelgamestitle');
  if (fontvalue == 'blox2'){
        /* font-family: blox2; */
    /* font-size: 7rem !important;
    font-stretch: ultra-expanded;
    display: inline-block;
    transform: scale(1.5, 1); */
    /* Adjust the scaling factor as needed */
    /* transform-origin: center; */
    /* Center the transformation origin */
    /* text-align: center !important; */
    didle.style.fontSize = '7rem';
    didle.style.fontStretch = 'ultra-expanded';
    didle.style.display = 'inline-block';
    didle.style.transform = 'scale(1.5, 1)';
     didle.style.transformOrigin = 'center';
    didle.style.textAlign = 'center';
  }
  didle.style.fontFamily = fontvalue
}
});