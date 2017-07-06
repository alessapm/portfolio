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
  loadScreen.css('visibility', 'visible');

  function loading() {
    loadScreen.css('visibility', 'hidden');
    $('.load-icon').css({
      'width': '0px',
      'height': '0px',
      'border': '0px solid'

    })
  }

  const timeToLoad = setTimeout(loading, 1000);

  const pulse = setTimeout(function(){
    $('.checkout').addClass('pulsing');
  }, 4000);


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

  function showlinks1(){
    project1.css({
      'background-color': 'rgb(44,55,54)',
      'background-image': 'none'
    })

    visit1.css('opacity','1')
  }

  function hidelinks1(){
    project1.css({
      'background-image': 'url("./css/images/remoteread-detail.png")'
    });

    visit1.css('opacity','0');

  }

  function showlinks2(){
    project2.css({
      'background-color': 'rgb(44,55,54)',
      'background-image': 'none'
    })

    visit2.css('opacity','1')
  }

  function hidelinks2(){
    project2.css({
      'background-image': 'url("./css/images/chewser-detail.png")'
    });

    visit2.css('opacity','0');

  }

  function showlinks3(){
    project3.css({
      'background-color': 'rgb(44,55,54)',
      'background-image': 'none'
    })

    visit3.css('opacity','1')
  }

  function hidelinks3(){
    project3.css({
      'background-image': 'url("./css/images/gWL-detail.png")'
    });

    visit3.css('opacity','0');
  }

  function showlinksBobs(){
    projectBobs.css({
      'background-color': 'rgb(44,55,54)',
      'background-image': 'none'
    })

    visitBobs.css('opacity', '1');
  }

  function hidelinksBobs(){
    projectBobs.css({
      'background-image': 'url("./css/images/bobs-detail.png")',
      'background-color': 'rgb(251,251,251)'
    });

    visitBobs.css('opacity','0');
  }

  function showlinksExpo(){
    projectExpo.css({
      'background-color': 'rgb(44,55,54)',
      'background-image': 'none'
    })
    visitExpo.css('opacity', '1');
  }

  function hidelinksExpo(){
    projectExpo.css({
      'background-image': 'url("./css/images/exposed-detail.png")'
    });

    visitExpo.css('opacity','0');
  }

  function showlinksMaster(){
    projectMaster.css({
      'background-color': 'rgb(44,55,54)',
      'background-image': 'none'
    })
    visitMaster.css('opacity', '1');
  }

  function hidelinksMaster(){
    projectMaster.css({
      'background-image': 'url("./css/images/mastermind-detail.png")',
    });

    visitMaster.css('opacity','0');
  }




let click1 = 1;
project1.on('click', function(){
  if (click1%2 !== 0){
    showlinks1();
    click1++;
  } else {
    hidelinks1();
    click1++;
  }

});



let click2 = 1;
project2.on('click', function(){
  if (click2%2 !== 0){
    showlinks2();
    click2++;
  } else {
    hidelinks2();
    click2++;
  }

});


let click3 = 1;
project3.on('click', function(){
  if (click3%2 !== 0){
    showlinks3();
    click3++;
  } else {
    hidelinks3();
    click3++;
  }
});

let clickBobs = 1;
projectBobs.on('click', function(){
  if (clickBobs%2 !== 0){
    showlinksBobs();
    clickBobs++;
  } else {
    hidelinksBobs();
    clickBobs++;
  }
})

let clickExpo = 1;
projectExpo.on('click', function(){
  if (clickExpo%2 !== 0){
    showlinksExpo();
    clickExpo++;
  } else {
    hidelinksExpo();
    clickExpo++;
  }
})

let clickMaster = 1;
projectMaster.on('click', function(){
  if (clickMaster%2 !== 0){
    showlinksMaster();
    clickMaster++;
  } else {
    hidelinksMaster();
    clickMaster++;
  }
})







}) //closes document ready
