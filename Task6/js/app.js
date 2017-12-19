
document.getElementById('player').style.top = '300px';
document.getElementById('player').style.left = '500px';

document.body.onkeydown = function (e) {

    var el = document.getElementById('player');

    //  effect area block
    var bumBum = document.getElementById("bum");

    // effect rotate-zoom
    var zoomZoom = document.getElementById("zoom");

    // effect shooting
    var shoot= document.getElementById("shoot");

    // audio block area
    function playAudioBum() {
        bumBum.play();
    }

    //audio rotate-zoom
    function playAudioZoom() {
        zoomZoom.play();
    }

    //audio shooting:
    function playAudioshoot() {
        shoot.play();
    }

    // creating a bullet
    function createBullet1() {
        bullet1 = document.createElement('div');
        bullet1.className = 'bullet1';
        el.appendChild(bullet1);
    }
    //get out a bullet
    function getOutBullet1 () {
        el.removeChild(bullet1);
    }

    // creating a bullet
    function createBullet2() {
        bullet2 = document.createElement('div');
        bullet2.className = 'bullet2';
        el.appendChild(bullet2);
    }
    //get out a bullet
    function getOutBullet2 () {
        el.removeChild(bullet2);
    }

    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_DOWN = 40;
    var KEYCODE_UP = 38;
    var KEYCODE_SPACE = 32;
    var KEYCODE_ENTER = 13;

    // when are press <=
    if (e.keyCode === KEYCODE_LEFT) {
        el.style.left = (parseInt(el.style.left) - 10) + 'px';
        // rotate left tank gun
        el.style.transform = "rotate(90deg)";

        // audio zoom
        playAudioZoom();

        // left block area
        if (el.style.left <= '0px') {
            el.style.left = (parseInt(el.style.left) + 12 ) + 'px';
            playAudioBum();
        }
    }

    // when press =>
    else if (e.keyCode === KEYCODE_RIGHT) {
        el.style.left = (parseInt(el.style.left) + 10) + 'px';
        // rotate right  tank gun
        el.style.transform = "rotate(-90deg)";
        // audio zoom
        playAudioZoom();
    }

    // when press UP =>
    else if (e.keyCode === KEYCODE_UP) {
        el.style.top = (parseInt(el.style.top) - 10) + 'px';

        // rotate UP  tank gun
        el.style.transform = "rotate(180deg)";

        // audio zoom
        playAudioZoom();
    }

    // when press DOWN =>
    else if (e.keyCode === KEYCODE_DOWN) {
        el.style.top = (parseInt(el.style.top) + 10) + 'px';
        // rotate DOWN  tank gun
        el.style.transform = "rotate(0deg)";

        // audio zoom
        playAudioZoom();
    }

    // top block area
    if (el.style.top <= '0px') {
        el.style.top = (parseInt(el.style.top) + 12) + 'px';
        playAudioBum();
    }
    //shooting
    if (e.keyCode === KEYCODE_ENTER || e.keyCode === KEYCODE_SPACE) {
        createBullet1();
        setTimeout(function () {
            document.getElementsByClassName('bullet1')[0].classList.add('bulletOut1');
            playAudioshoot();
        }, .1);
        setTimeout(getOutBullet1, 150);
    }

    //shooting
    if (e.keyCode === KEYCODE_ENTER || e.keyCode === KEYCODE_SPACE) {
        createBullet2();
        setTimeout(function () {
            document.getElementsByClassName('bullet2')[0].classList.add('bulletOut2');
            playAudioshoot();
        }, .1);
        setTimeout(getOutBullet2, 150);
    }


};
