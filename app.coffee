axis = require 'axis'
rupture = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
dynamic_content = require 'dynamic-content'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf', '_RootsToFirebase.sh']

  extensions: [
    js_pipeline(files: 'assets/js/*.js'),
    css_pipeline(files: 'assets/css/*.css'),
    dynamic_content()
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
