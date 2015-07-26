module.exports = function(grunt) {


// Project configuration.
	 grunt.initConfig( {

	 	 pkg: grunt.file.readJSON('package.json'),


	 	 watch: {
			dist: { 
				files: [ 'app/js/**/*.js'
				], 
				tasks: ['default'], 
			}, 
			options: { spawn:false}	 	 	
	 	 }, 

		jshint: {
			options: {
    				jshintrc: ".jshintrc", 
			},

		    all: ['app/js/**/*.js']
	  },

	  concat: {
	    options: {
	      separator: ';',

	        banner: '/*! customBanner <%= pkg.name %> - v<%= pkg.version %> - ' +
        		'<%= grunt.template.today("yyyy-mm-dd") %> */',
	    },
	    dist: {
	      src: [
	      		'app/bower_components/jquery/dist/jquery.js',
	      		'app/bower_components/angular/angular.js',
	      		'app/bower_components/angular-animate/angular-animate.js',
	      		'app/bower_components/angular-route/angular-route.js',
	      		'app/bower_components/angular-resource/angular-resource.js',
	      		'app/js/app.js',
	      		'app/js/animations.js',
	      		'app/js/controllers.js',
	      		'app/js/filters.js',
	      		'app/js/services.js'
	      		] , 
	      dest: 'app/dist/built.js',
	    }
	  }, 

	   uglify: {

	   	options:{

	   	}, 

   		 dist: {
      		files: {
        	'app/dist/built2.js': ['app/dist/built.js']
      	}
    	}
  	}	  
	}
	);


// 
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'concat','uglify'] ); 


};