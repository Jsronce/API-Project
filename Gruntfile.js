module.exports = function(grunt) {
  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	connect: {
		'dev-server': {
			options: {
				keepalive: true,
			},
		}
	},
	uglify: {
		dist: {
			files: {
				'build/590APP.js': [
				'js/Imgur-controller.js',
				'js/route.js',
				'js/upload-controller.js',
				]
			}
		}
	},
	concat: {
		dist: {
			files: {
				'js/590APP.js': [
				'node_modules/angular/angular.js',
				'node_modules/angular-route/angular-route.js',
				'build/590APP.js'
				]
			}
		}
	},
});

  

  // Default task(s).
grunt.registerTask('default', ['concat', 'uglify','connect:dev-server']);


};