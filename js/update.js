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


  const project = $('.project');
  const theWindow = $(window);

  const infoBtns = $('.info');
  const closeBtns = $('.close');
  const techDetails = $('.tech-used');

  theWindow.on('scroll', check_view);
  theWindow.on('scroll resize', check_view);


   function check_view(){
    // console.log('inside check view');

    let window_height = theWindow.height();
    let window_top_position = theWindow.scrollTop();
    let window_bottom_position = (window_top_position + window_height);

    $.each(project, function(){
      let element = $(this);
      let element_height = element.outerHeight();
      let element_top_position = element.offset().top;
      let element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        element.addClass('animate');
      } else {
        element.removeClass('animate');
      }
<<<<<<< HEAD

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
=======
>>>>>>> update2
    });
  }

  $.each(infoBtns, function(){
    let btn = $(this);
    let details = btn.parent().prev().children().first();
    btn.click(function(){
      details.addClass('bounceDown');
      details.removeClass('bounceUp');
    })
  })

  // $.each(closeBtns, function(){
  //   let close = $(this);
  //   let details = close.parent();
  //   close.click(function(){
  //     details.addClass('bounceUp');
  //     details.removeClass('bounceDown');
  //   })
  // })

  $.each(techDetails, function(){
    let details = $(this);
    details.click(function(){
      details.addClass('bounceUp');
      details.removeClass('bounceDown');
    })
  })





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
