axis = require 'axis'
rupture = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
dynamic_content = require 'dynamic-content'
minify_html = require 'html-minifier'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf', '_RootsToFirebase.sh']

  extensions: [
    js_pipeline(files: 'assets/js/*.js', out: 'js/build.js', minify: true, hash: true),
    css_pipeline(files: 'assets/css/*.css', out: 'css/build.css', minify: true, hash: true),
    dynamic_content()
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
