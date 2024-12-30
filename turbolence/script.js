var filter = document.querySelector("#turbulence");
var frames = 0;
var rad = Math.PI / 180;

function freqAnimation() {
    var bfx = 0.005;
    var bfy = 0.005;
    frames += 0.5;
    bfx += 0.0025 * Math.cos(frames * rad);
    bfy += 0.0025 * Math.sin(frames * rad);

    var bf = bfx.toString() + ' ' + bfy.toString();
    filter.setAttribute('baseFrequency', bf);
    window.requestAnimationFrame(freqAnimation);
}

window.requestAnimationFrame(freqAnimation);

