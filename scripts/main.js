var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/michelangelo-david.jpg') {
      myImage.setAttribute ('src','images/hipno.jpg');
    } else {
      myImage.setAttribute ('src','images/michelangelo-david.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Расскажи, что гложет? Какой ты сегодня?');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'web - Давид-' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'web - Давид-' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

