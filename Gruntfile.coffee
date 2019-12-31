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

    babel:
      options:
        sourceMap: true
        presets: ['@babel/preset-env']
      compile:
        files:
          'dist/angularjs-toast.js': 'dist/angularjs-toast.js'

    clean:
      outDir:
        src: 'dist/'

    copy:
      default:
        expand: true
        src: ['LICENSE', 'README.md', 'CHANGELOG.md']
        dest: 'dist/'
      pkgJson:
        expand: true
        src: 'package.json'
        dest: 'dist/',
        options:
          process: (data) ->
            pkg = JSON.parse(data)
            pkg.main = 'angularjs-toast.min.js'
            delete pkg.scripts
            delete pkg.devDependencies
            delete pkg.private
            delete pkg.engines
            JSON.stringify pkg, null, 2

    sass:
      options:
        implementation: dartSass
        sourcemap: 'none'
        style: 'expanded'
      demo:
        files:
          'docs/style.css': 'docs/style.scss'
      lib:
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
          'dist/*.js',
          'dist/*.css'
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
        }, {
          match: '//cdn.jsdelivr.net/npm/angularjs-toast@latest/angularjs-toast.min.css',
          replace: '/dist/angularjs-toast.css'
        }]

    watch:
      coffeescript:
        files: ['src/*.coffee']
        tasks: ['default']
      sass_lib:
        files: ['src/**/*.scss']
        tasks: ['sass:lib']
      sass_demo:
        files: ['docs/**/*.scss']
        tasks: ['sass:demo']

  # Grunt task(s).
  grunt.registerTask 'default', ['coffee', 'sass:lib']
  grunt.registerTask 'serve', ['default', 'browserSync', 'watch']
  grunt.registerTask 'build', ['clean', 'default', 'babel', 'sass:lib', 'concat', 'uglify', 'cssmin', 'copy']

  return
