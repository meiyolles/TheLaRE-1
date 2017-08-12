var vrHomePage = vRViewPlayer('#meiayeshadocs', {
    image: 'mei.jpg',
    is_stereo: false,
    is_autopan_off: true,
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-1', {
    pitch: 30,
    yaw: -125,
    radius: 0.10,
    distance: 1
  });
  vrHomePage.addHotspot('creating-hotspot-2',{
    pitch: 15,
    yaw: -100,
    radius: 0.10,
    distance: 1
  });
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    alert('This position is actually very comfortable');
  }
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-2'){
  myPicture.setContent({
    image: 'mei2.jpg',
    is_stereo: false
  });
  }
});
