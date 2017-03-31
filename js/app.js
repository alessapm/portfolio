// have to convert all of to jQuery (see update.js):

document.addEventListener('DOMContentLoaded', () => {

const loadScreen = document.querySelector('.loading');

const project1 = document.querySelector('#project1');
const project2 = document.querySelector('#project2');
const project3 = document.querySelector('#project3');

const visit1 = document.querySelector('#visit1');
const visit2 = document.querySelector('#visit2');
const visit3 = document.querySelector('#visit3');

// loading screen animation:
loadScreen.style.visibility = 'visible';

function loading(){
  loadScreen.style.visibility = 'hidden';
}

const timeToLoad = setTimeout(loading, 1000);

const pulse = setTimeout(function(){
    document.querySelector('.checkout').classList.add('pulsing');
}, 5000);


// visit-links click event:
function showlinks1(){
  project1.setAttribute("style", "background-color:rgba(83,60,49,.55);background-image:none;");

  visit1.style.opacity = 1
}

function showlinks2(){
  project2.setAttribute("style", "background-color:rgba(83,60,49,.55);background-image:none;");

  visit2.style.opacity = 1
}

function showlinks3(){
  project3.setAttribute("style", "background-color:rgba(83,60,49,.55);background-image:none;");

  visit3.style.opacity = 1
}




project1.addEventListener('click', showlinks1);

project2.addEventListener('click', showlinks2);

project3.addEventListener('click', showlinks3);




});
