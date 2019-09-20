

//para rotar
var range = document.querySelector('input');
var images = document.querySelector('.tabs');
function handleRange () {
    tabs.style.opacity = range.value / 100;
}
range.addEventListener('input', handleRange);

var url = document.getElementById('url');
var image = document.getElementById('image');