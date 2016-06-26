module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        reporter: require('jshint-stylish'),
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
      files: {
      	src: ['*.js', '!Gruntfile.js']
      },
    },
    sass: {
      dist: {
        files: {
          'src/css/main.css' : 'src/css/sass/main.scss',
          'src/css/navigation.css' : 'src/css/sass/navigation.scss',
          'src/css/safety.css' : 'src/css/sass/safety.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['**/*.js'],
        tasks: ['jshint']
      },
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'jshint']);
  grunt.registerTask('dev', ['sass', 'jshint']);

};
