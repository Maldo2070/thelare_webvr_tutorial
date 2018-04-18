var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: 'https://pasteboard.co/Hhf03R1.jpg/download',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);
// Delete lines 14-28
