let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let snapButton = document.getElementById('snap');
let ctx = canvas.getContext('2d');
let link = document.getElementById('link');
let image = '';
let saveBtn = document.getElementById('but2');

navigator.mediaDevices.getUserMedia({ 
  video: true, 
  audio: false,
})
  .then(function(stream) {
    video.srcObject = stream;
  })
snapButton.addEventListener('click', function() {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  image = canvas.toDataURL("image/png");
  saveBtn.style.display = 'block';
});
function savePhoto(){
  link.href = image;
  link.download = image;
  link.click();
}