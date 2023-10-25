window.addEventListener('DOMContentLoaded', init, false);

function init() {
    originalBackground = document.body.style.backgroundColor;
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', toggle, false);
    }
}

function toggle() {
    var id = this.id;
    switch (id) {
        case "CHARtoggle": {
            var chars = document.getElementsByClassName("Characters");
            for (var i = 0; i < chars.length; i++) {
                chars[i].classList.toggle("on")
            }
        };
        break;
        case "PLtoggle": {
            var places = document.getElementsByClassName("States");
            for (var i = 0; i < places.length; i++) {
                places[i].classList.toggle("on")
            }
        };
        break;
        case "OBtoggle": {
            var objects = document.getElementsByClassName("Objects");
            for (var i = 0; i < objects.length; i++) {
                objects[i].classList.toggle("on")
            }
        };
        break;
    }
  }

window.onload = init;