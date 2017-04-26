'use strict'

smoothScroll.init({
  speed: 500,
  easing: 'easeInOutCubic'
})

(() => {
  let el = document.getElementById.bind(document)

  el('projects').style.opacity = 0
  let content = el('projects').innerHTML
  el('projects').innerHTML = ''
  let visible = false

  el('btn-projects').addEventListener('click', (e) => {
    e.preventDefault()

    if (!visible) {
      el('projects').innerHTML = content
      smoothScroll.animateScroll('#projects')
      Fader.fadeInWithId('projects', 1)
    } else {
      Fader.fadeOutWithId('projects', 1)
      smoothScroll.animateScroll('body')
      setTimeout("document.getElementById('projects').innerHTML = ''", 1000)
    }

    visible = !visible
  }, false)
})()