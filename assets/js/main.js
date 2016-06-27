'use strict';

smoothScroll.init({
    speed: 500,
    easing: 'easeInOutCubic'
});

;(function () {
    var el = document.getElementById.bind(document);

    el('projects').style.opacity = 0;
    var content = el('projects').innerHTML;
    el('projects').innerHTML = '';
    var visible = false;

    function toggleProjects(e) {
        e.preventDefault();

        if (!visible) {
            el('projects').innerHTML = content;
            smoothScroll.animateScroll('#projects');
            Fader.fadeOutWithId('btn-ellipsis', 1);
            Fader.fadeInWithId('projects', 1);
        } else {
            Fader.fadeOutWithId('projects', 1);
            Fader.fadeInWithId('btn-ellipsis', 1);
            smoothScroll.animateScroll('body');
            el('projects').innerHTML = '';
        }

        visible = !visible;
    }

    el('btn-projects').addEventListener('click', toggleProjects, false);
    el('btn-ellipsis').addEventListener('click', toggleProjects, false);
})();