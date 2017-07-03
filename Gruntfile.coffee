'use strict'

module.exports = (grunt) ->
  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    coffeelint:
      options:
        configFile: 'coffeelint.json'
      source: ['src/angularjs-toast.coffee']

    coffee:
      compileJoined:
        options:
          join: true
        files:
          'dist/angularjs-toast.js': ['src/angularjs-toast.coffee']

    sass:
      options:
        sourcemap: 'none'
        style: 'expanded'
      demo:
        files:
          'demo/style.css': 'demo/style.scss'
      dist:
        files:
          'dist/angularjs-toast.css': 'src/angularjs-toast.scss'

    cssmin:
      options:
        sourceMap: true
      target:
        files:
          'dist/angularjs-toast.min.css': 'dist/angularjs-toast.css'

    watch:
      coffeescript:
        files: ['src/*.coffee']
        tasks: ['default']
      sass:
        files: ['src/**/*.scss']
        tasks: ['sass']
      cssMin:
        files: ['dist/angularjs-toast.css']
        tasks: ['cssmin']
      demoCss:
        files: ['demo/**/*.scss']
        tasks: ['sass']
      demoHtml:
        files: ['demo/**/*.html']
      demoJs:
        files: ['demo/**/*.js']
      options:
        livereload: true

    uglify:
      options:
        sourceMap: true
      target:
        files:
          'dist/angularjs-toast.min.js': ['dist/angularjs-toast.js']

    ngAnnotate:
      options:
        singleQuotes: true

      ngYoutube:
        files:
          'dist/angularjs-toast.js': ['dist/angularjs-toast.js']

    copy:
      demo:
        files:[
          expand :true
          src: ['dist/angularjs-toast.min.js', 'dist/angularjs-toast.min.css']
          dest: 'demo/'
          flatten: true
          filter: 'isFile'
        ]

    connect:
      server:
        options:
          base: './'
          keepalive: true
          livereload: true


  # Grunt task(s).
  grunt.registerTask "default", ["coffeelint", "coffee"]
  grunt.registerTask "webserver", ["connect"]
  grunt.registerTask "develop", ["default", "watch"]
  grunt.registerTask "dist", ["default", "ngAnnotate", "uglify", "sass", "cssmin", "copy"]

  return
