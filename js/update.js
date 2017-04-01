'use strict';

$(document).ready(function(){

  const loadScreen = $('.loading');

  const project1 = $('#project1');
  const project2 = $('#project2');
  const project3 = $('#project3');

  const visit1 = $('#visit1');
  const visit2 = $('#visit2');
  const visit3 = $('#visit3');

  //loading screen animation:
  loadScreen.css('visibility', 'visible');

  function loading() {
    loadScreen.css('visibility', 'hidden');
  }


  const timeToLoad = setTimeout(loading, 1000);

  const pulse = setTimeout(function(){
    $('.checkout').addClass('pulsing');
  }, 5000);

// visit-links click event:
  function showlinks1(){
    project1.css({
      'background-color': 'rgba(83,60,49,.55)',
      'background-image': 'none'
    })

    visit1.css('opacity','1')
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


project2.on('click', showlinks2);

project1.on('click', showlinks1);

project3.on('click', showlinks3);



}) //closes document ready
