'use strict';

$(document).ready(function(){

  const loadScreen = $('.loading');

  const project1 = $('#project1');
  const project2 = $('#project2');
  const project3 = $('#project3');

  const visit1 = $('#visit1');
  const visit2 = $('#visit2');
  const visit3 = $('#visit3');

  // let linksBoolean = true;

  //loading screen animation:
  loadScreen.css('visibility', 'visible');

  function loading() {
    loadScreen.css('visibility', 'hidden');
  }


  const timeToLoad = setTimeout(loading, 1000);

  const pulse = setTimeout(function(){
    $('.checkout').addClass('pulsing');
  }, 4000);


  setInterval(function(){
    let scroll = $(window).scrollTop();

     // console.log('scroll registering as ', $(window).scrollTop())

      if (scroll > 3200){
        $('.media-icons').css('visibility', 'hidden');
        // console.log('visibility is hidden');
      } else {
        $('.media-icons').css('visibility', 'visible');
        // console.log('visibility is visible')
      }

  }, 700) //closes setInterval









}) //closes document ready
