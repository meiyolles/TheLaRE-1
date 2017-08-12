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
  vrHomePage.addHotspot('creating-hotspot-3',{
    pitch: 90,
    yaw: -50,
    radius: 0.10,
    distance: 1
  });
  vrHomePage.addHotspot('creating-hotspot-4',{
    pitch: 50,
    yaw: -30,
    radius: 0.10,
    distance: 1
  });
  vrHomePage.addHotspot('creating-hotspot-5',{
    pitch: -40,
    yaw: 70,
    radius: 0.10,
    distance: 1
  });
});

vrHomePage.on('click', function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-2'){
  vrHomePage.setContent({
    image: 'mei2.jpg',
    is_stereo: false
  });
  }
  if (event.id == 'creating-hotspot-1'){
    alert("This is actually very comfortable position");
  }
  if (event.id == 'creating-hotspot-3'){
    alert("Doing too many things always makes me exhausted");
  }
  if (event.id == 'creating-hotspot-4'){
  vrHomePage.setContent({
    image: 'mei3.jpg',
    is_stereo: false
  });
}
  if (event.id == 'creating-hotspot-5'){
    alert("I'll change this later");
  }
});
