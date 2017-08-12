var vrHomePage = vRViewPlayer('#meiayeshadocs', {
    image: 'Mei.jpg',
    is_stereo: false,
    is_autopan_off: true,
});
window.addEventListener('load', vrHomePage);

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-1', {
    pitch: -5,
    yaw: -125,
    radius: 0.10,
    distance: 1
  });
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    alert('i bEen clIked');
  }
});

vrHomePage.on('ready', function(events){
  vrHomePage.addHotspot('creating-hotspot-2',{
    pitch: 15,
    yaw: -100,
    radius: 0.10,
    distance: 1
  });
});
