function runAway() {
    var button = document.getElementById('fleeingButton');
    var newX = Math.floor(Math.random() * (window.innerWidth - 100)); // новая координата X
    var newY = Math.floor(Math.random() * (window.innerHeight - 60)); // новая координата Y
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  }