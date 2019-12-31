dartSass = require 'sass'
loadGruntTasks = require 'load-grunt-tasks'

banner = '/*!\n * @module <%= pkg.name %>\n' +
  ' * @description <%= pkg.description %>\n' +
  ' * @version v<%= pkg.version %>\n' +
  ' * @link <%= pkg.homepage %>\n' +
  ' * @licence MIT License, https://opensource.org/licenses/MIT\n' +
  ' */\n\n';

module.exports = (grunt) ->
  loadGruntTasks(grunt)

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffeelintr:
      options:
        configFile: 'coffeelint.json'
      source: ['src/angularjs-toast.coffee', 'Gruntfile.coffee']

    coffee:
      compileJoined:
        options:
          join: true
        files:
          'dist/angularjs-toast.js': ['src/angularjs-toast.coffee']

    sass:
      options:
        implementation: dartSass
        sourcemap: 'none'
        style: 'expanded'
      demo:
        files:
          'docs/style.css': 'docs/style.scss'
      dist:
        files:
          'dist/angularjs-toast.css': 'src/angularjs-toast.scss'

    cssmin:
      options:
        sourceMap: true
      target:
        files:
          'dist/angularjs-toast.min.css': 'dist/angularjs-toast.css'

    concat:
      options:
        stripBanners: true
        banner: banner
      dist:
        files:
          'dist/angularjs-toast.js': ['dist/angularjs-toast.js']
          'dist/angularjs-toast.css': ['dist/angularjs-toast.css']

    uglify:
      options:
        sourceMap: true
        output:
          comments: '/^!/'
      target:
        files:
          'dist/angularjs-toast.min.js': ['dist/angularjs-toast.js']

    browserSync:
      bsFiles:
        src: [
          'docs/*.css',
          'docs/**/*.html',
          'docs/*.js',
          'dist/*.js'
        ]
      options:
        watchTask: true
        open: false
        server:
          baseDir: 'docs'
          routes:
            '/dist': 'dist'
        rewriteRules: [{
          match: '//cdn.jsdelivr.net/npm/angularjs-toast@latest/angularjs-toast.min.js',
          replace: '/dist/angularjs-toast.js',
        }]

    watch:
      coffeescript:
        files: ['src/*.coffee']
        tasks: ['default']
      sass:
        files: ['src/**/*.scss', 'docs/**/*.scss']
        tasks: ['sass']

  # Grunt task(s).
  grunt.registerTask 'default', ['coffee']
  grunt.registerTask 'serve', ['default', 'browserSync', 'watch']
  grunt.registerTask 'build', ['default', 'sass', 'concat', 'uglify', 'cssmin']

  return
