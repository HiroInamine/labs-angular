/**
 * Build system configuration
 * @param {Object} grunt - The Grunt module
 */
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    app: {
      src: 'app',
      vendor: 'node_modules',
      sample: 'sample'
    },

    // Connect task
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          base: ['<%= app.src %>/', '<%= app.vendor %>/', '<%= app.sample %>/']
        }
      }
    }


  });

  // Load tasks from the specified Grunt plugin.
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Task aliases
  grunt.registerTask('default', ['connect']);
};
