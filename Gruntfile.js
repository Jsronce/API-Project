module.exports = function(grunt) {
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	connect: {
		'dev-server': {
			options: {
				keepalive: true,
			},
		}
	}
  });

  

  // Default task(s).
  grunt.registerTask('default', ['connect:dev-server']);

};