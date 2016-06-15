'use strict';

;(function () {
    var el = document.getElementById.bind(document);
    
    el('projects').style.opacity = 0;
    var visible = false;

    el('btn-projects').addEventListener('click', function (e) {
        e.preventDefault();

        if (!visible) {
            Fader.fadeInWithId('projects', 1);
        } else {
            Fader.fadeOutWithId('projects', 1);
        }

        visible = !visible;
    }, false);
})();