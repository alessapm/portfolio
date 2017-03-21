document.addEventListener('DOMContentLoaded', () => {

const loadScreen = document.querySelector('.loading');


loadScreen.style.visibility = 'visible';

function loading(){
  loadScreen.style.visibility = 'hidden';
}

const timeToLoad = setTimeout(loading, 1000);

const pulse = setTimeout(function(){
    document.querySelector('.checkout').classList.add('pulsing');
}, 5000);



});
