var video = document.querySelector("#videoElement");

const cardWidthProportion = 200 / 290;
const cardHeightProportion = 290 / 200;
const canvasConfig = {
  width: 500,
  height: 500 * cardHeightProportion,
}

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function renderCanvas() {
  var canvas = document.getElementById("canvas");
  canvas.width = canvasConfig.width;
  canvas.height = canvasConfig.height;
  const width = (video.videoWidth * canvas.height) / video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, ((width / 2) * -1) + (canvas.width / 2), 0, width, canvas.height);
  // ctx.fillStyle = "#00FF0033";
  // ctx.fillRect(0, 0, canvas.width, canvas.height / 3);
}

var lastTime = -1;
function draw() {
  var time = video.currentTime;
  if (time !== lastTime) {
    renderCanvas();
    lastTime = time;
  }
  requestAnimationFrame(draw);
}

draw();
