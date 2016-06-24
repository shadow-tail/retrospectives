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
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['**/*.js'],
        tasks: ['jshint']
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('dev', ['jshint']);

};
