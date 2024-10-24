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
  // Update video scale as you scroll

}


document.addEventListener("DOMContentLoaded", function () {
  // Load the selected JS file on page load or default to "Lines JS"
  const defaultValue = localStorage.getItem("selectedJS") || "/assets/js/lines.js";
  if (localStorage.getItem("selectedJS") == 'topo') {
    selectopo();
    document.getElementById("fixed-nav-bar").style.backgroundColor = "rgba(0,0,0,0.8)"
    if (document.getElementById('hypackelgamestitle')) {
      var hypackelgamestitle = document.getElementById('hypackelgamestitle');
      hypackelgamestitle.style.backgroundColor = 'rgba(0, 0, 0, .5)';
      hypackelgamestitle.style.padding = '10px 5px 5px 10px';
      hypackelgamestitle.style.borderRadius = '5px';
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

    document.getElementById("fixed-nav-bar").style.backgroundColor = "rgba(0,0,0,0.2)";
    if (document.getElementById('hypackelgamestitle')) {
      var hypackelgamestitle = document.getElementById('hypackelgamestitle');
      hypackelgamestitle.style.backgroundColor = 'rgba(0, 0, 0, .5)';
      hypackelgamestitle.style.padding = '10px 5px 5px 10px';
      hypackelgamestitle.style.borderRadius = '5px';
    }

  } else {
    const scriptt = document.createElement("script");
    document.getElementById("fixed-nav-bar").style.backgroundColor = "rgba(0,0,0,0)"
    scriptt.src = defaultValue;
    document.head.appendChild(scriptt);
  }

});



document.addEventListener("DOMContentLoaded", function () {

  const fontvalue = localStorage.getItem('homefont') || 'atami'
  if (document.getElementById('hypackelgamestitle')) {
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
@font-face {\
  font-family: wetpaint;\
  src: URL('/assets/fonts/wetpaint.ttf') format('truetype');\
}\
@font-face {\
  font-family: yarndings;\
  src: URL('/assets/fonts/yarndings.ttf') format('truetype');\
}\
@font-face {\
  font-family: ubuntu;\
  src: URL('/assets/fonts/Ubuntu-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: bytebounce;\
  src: URL('/assets/fonts/ByteBounce.ttf') format('truetype');\
}\
@font-face {\
  font-family: sdglitch;\
  src: URL('/assets/fonts/SDGlitch.ttf') format('truetype');\
}\
@font-face {\
  font-family: glitch;\
  src: URL('/assets/fonts/glitch.otf') format('truetype');\
}\
@font-face {\
  font-family: boeing;\
  src: URL('/assets/fonts/BOEING-style.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Broken_Fax;\
  src: URL('/assets/fonts/Rubik_Broken_Fax/RubikBrokenFax-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Burned;\
  src: URL('/assets/fonts/Rubik_Burned/RubikBurned-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Doodle_Shadow;\
  src: URL('/assets/fonts/Rubik_Doodle_Shadow/RubikDoodleShadow-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Doodle_Triangles;\
  src: URL('/assets/fonts/Rubik_Doodle_Triangles/RubikDoodleTriangles-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Glitch;\
  src: URL('/assets/fonts/Rubik_Glitch/RubikGlitch-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Glitch_Pop;\
  src: URL('/assets/fonts/Rubik_Glitch_Pop/RubikGlitchPop-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Maze;\
  src: URL('/assets/fonts/Rubik_Maze/RubikMaze-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Puddles;\
  src: URL('/assets/fonts/Rubik_Puddles/RubikPuddles-Regular.ttf') format('truetype');\
}\
@font-face {\
  font-family: Rubik_Storm;\
  src: URL('/assets/fonts/Rubik_Storm/RubikStorm-Regular.ttf') format('truetype');\
}\
"));


    document.head.appendChild(newStyle);
    var didle = document.getElementById('hypackelgamestitle');
    if (fontvalue == 'blox2') {
      /* font-family: blox2; */
      /* font-size: 7rem !important;
      font-stretch: ultra-expanded;
      display: inline-block;
      transform: scale(1.5, 1); */
      /* Adjust the scaling factor as needed */
      /* transform-origin: center; */
      /* Center the transformation origin */
      /* text-align: center !important; */

      didle.style.fontStretch = 'ultra-expanded';
      didle.style.display = 'inline-block';
      didle.style.transform = 'scale(1.5, 1)';
      didle.style.transformOrigin = 'center';
      didle.style.textAlign = 'center';
    }
    if (fontvalue == 'wetpaint') {
      didle.style.fontWeight = '100';
    }
    if (fontvalue == 'bytebounce') {
      didle.style.fontSize = '8rem';
    }
    if (fontvalue == 'sdglitch') {
      didle.style.fontStretch = 'ultra-expanded';
      didle.style.display = 'inline-block';
      didle.style.transformOrigin = 'center';
      didle.style.textAlign = 'center';
      didle.style.transform = 'scale(1.5, 1)';
      didle.style.fontSize = '8rem';
    }
    if (fontvalue == 'glitch') {
      didle.style.fontStretch = 'ultra-expanded';
      didle.style.display = 'inline-block';
      didle.style.transformOrigin = 'center';
      didle.style.textAlign = 'center';
      didle.style.transform = 'scale(.9, 1)';
      didle.style.fontSize = '6rem';
    }
    if (fontvalue == 'boeing') {
      didle.innerHTML = 'Hypackel 787'
    }

    // alert(fontvalue)
    didle.style.fontFamily = fontvalue
  }
});