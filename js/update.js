'use strict';

$(document).ready(function(){

  const loadScreen = $('.loading');

  const project1 = $('#project1');
  const project2 = $('#project2');
  const project3 = $('#project3');
  const projectBobs = $('#projectBobs');
  const projectExpo = $('#projectExposed');
  const projectMaster = $('#projectMastermind');

  const visit1 = $('#visit1');
  const visit2 = $('#visit2');
  const visit3 = $('#visit3');
  const visitBobs = $('#visitBobs');
  const visitExpo = $('#visitExposed');
  const visitMaster = $('#visitMastermind');


  //loading screen animation:
  // loadScreen.css('visibility', 'visible');

  // function loading() {
  //   loadScreen.css('visibility', 'hidden');
  //   $('.load-icon').css({
  //     'width': '0px',
  //     'height': '0px',
  //     'border': '0px solid'

  //   })
  // }

  // const timeToLoad = setTimeout(loading, 1000);

  // const pulse = setTimeout(function(){
  //   $('.checkout').addClass('pulsing');
  // }, 4000);


  setInterval(function(){
    let scroll = $(window).scrollTop();

     // console.log('scroll registering as ', $(window).scrollTop())

      if (scroll > 2200){
        $('.media-icons').css('visibility', 'hidden');
        // console.log('visibility is hidden');
      } else {
        $('.media-icons').css('visibility', 'visible');
        // console.log('visibility is visible')
      }

  }, 700) //closes setInterval





// visit-links click event:

  // function showlinks1(){
  //   project1.css({
  //     'background-color': 'rgb(44,55,54)',
  //     'background-image': 'none'
  //   })

  //   visit1.css('opacity','1')
  // }

  // function hidelinks1(){
  //   project1.css({
  //     'background-image': 'url("./css/images/remoteread-detail.png")'
  //   });

  //   visit1.css('opacity','0');

  // }


}) //closes document ready
