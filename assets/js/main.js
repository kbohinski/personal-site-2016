'use strict';

;(function () {
    var el = document.getElementById.bind(document);

    el('projects').style.opacity = 0;
    var visible = false;

    function toggleProjects(e) {
        e.preventDefault();

        if (!visible) {
            Fader.fadeOutWithId('btn-ellipsis', 1);
            Fader.fadeInWithId('projects', 1);
        } else {
            Fader.fadeOutWithId('projects', 1);
            Fader.fadeInWithId('btn-ellipsis', 1);
        }

        visible = !visible;
    }

    el('btn-projects').addEventListener('click', toggleProjects, false);
    el('btn-ellipsis').addEventListener('click', toggleProjects, false);
})();