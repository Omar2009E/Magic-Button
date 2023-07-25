
var button = document.querySelector('.pipopi');
var bodyColor = document.querySelector('body')
function randomColor() {
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }
  
  var randomColors = randomColor();
  console.log(randomColors);


function changeColor() {
    var randomColors = randomColor();
    button.style.backgroundColor = randomColors;
}


document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        changeColor();
    }
});

function changeColorss() {
    var randomColors = randomColor();
    bodyColor.style.backgroundColor = randomColors;
}


document.addEventListener('keydown', function(q) {
    if (q.key === '/') {
        changeColorss();
    }
});