function randonText() {
    var text = "!@#$%^*?]{008885()";
    let letters = text[Math.floor(Math.random() * text.length)];
    return letters;
}

function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 300);
    let size = Math.random() * 1.5; 
    let duration = Math.random() * 10;

    e.innerText = randonText();
    e.style.left = left + 'px';
    e.style.fontSize = 1 + 'em';
    e.style.animationDuration = 1 + duration + 's';

    setTimeout(function() {
        cloud.removeChild(e);
    }, 2000);
}

setInterval(function() {
    rain();
}, 20);
