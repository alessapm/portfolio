'use strict';

$(document).ready(function(){

  const loadScreen = $('.loading');

  const project1 = $('#project1');
  const project2 = $('#project2');
  const project3 = $('#project3');

  const visit1 = $('#visit1');
  const visit2 = $('#visit2');
  const visit3 = $('#visit3');

  let linksBoolean = true;

  //loading screen animation:
  loadScreen.css('visibility', 'visible');

  function loading() {
    loadScreen.css('visibility', 'hidden');
  }


  const timeToLoad = setTimeout(loading, 1000);

  const pulse = setTimeout(function(){
    $('.checkout').addClass('pulsing');
  }, 4000);

// visit-links click event:

  function showlinks1(){
    project1.css({
      'background-color': 'rgba(83,60,49,.55)',
      'background-image': 'none'
    })

    visit1.css('opacity','1')
  }

  function hidelinks1(){
    project1.css({
      'background-image': 'url("./css/images/remote_read.png")'
    });

    visit1.css('opacity','1');
    console.log('hidelinks1 clicked')
  }

  function showlinks2(){
    project2.css({
      'background-color': 'rgba(83,60,49,.55)',
      'background-image': 'none'
    })

    visit2.css('opacity','1')
  }

  function showlinks3(){
    project3.css({
      'background-color': 'rgba(83,60,49,.55)',
      'background-image': 'none'
    })

    visit3.css('opacity','1')
  }


function links(){
  if (linksBoolean){
    project1.css({
      'background-color': 'rgba(83,60,49,.55)',
      'background-image': 'none'
    })

    visit1.css('opacity','1');
    linksBoolean = false;
  } else {
    project1.css({
      'background-image': 'url("./css/images/remote_read.png")'
    });

    visit1.css('opacity','0');
    console.log('hidelinks1 clicked');
    linksBoolean = true;
  }
}

// project1.on('click', links);

// project1.toggle('fast', 'swing', showlinks1, hidelinks1);

// project2.on('click', showlinks2);

// project3.on('click', showlinks3);





}) //closes document ready
