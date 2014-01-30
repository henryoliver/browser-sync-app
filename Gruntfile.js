'use strict';

module.exports = function(grunt) {

	// Show elapsed time at the end
	require('time-grunt')(grunt);

	// Load multiple grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration
	grunt.initConfig({

		// Initial sets
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
			'* Polenlabs v<%= pkg.version %>\n' +
			'* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
			'*/\n',

		// Project paths
		path: {
			app: 'app',
			dist: 'cordova/www',
			temp: '.tmp'
		},

		// Connect the Server
		connect: {
			options: {
				debug: true,
				hostname: 'localhost',
				port: 9000
			},
			serve: {
				options: {
					base: [
						'<%= path.temp %>',
						'<%= path.app %>'
					]
				}
			},
			dist: {
				options: {
					base: [
						'<%= path.dist %>'
					]
				}
			}
		},

		// Browser sync the Proxy
		browser_sync: {
			proxy: {
				bsFiles: {
					src : [
						'<%= path.temp %>/{,*/}*.html',
						'<%= path.temp %>/assets/styles/{,*/}*.css',
						'<%= path.app %>/assets/scripts/{,*/}*.js',
						'<%= path.app %>/assets/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
					]
				},
				options: {
					watchTask: true,
					open: false,
					proxy: {
						host: 'localhost',
						port: 9000
					},
					ghostMode: {
						clicks: true,
						scroll: true,
						links: true,
						forms: true
					}
				}
			}
		},

		// Watch
		watch: {
			gruntfile: {
				files: ['Gruntfile.js']
			},
			jade: {
				files: [
					'<%= path.app %>/views/{,*/}*.jade'
				],
				tasks: ['jade:compile']
			},
			stylus: {
				files: [
					'<%= path.app %>/assets/styles/{,*/}*.styl'
				],
				tasks: ['stylus:compile']
			}
		},

		// Jade compilation
		jade: {
			compile: {
				options: {
					pretty: true,
				},
				files: [{
					expand: true,
					cwd: '<%= path.app %>/views',
					src: ['{,*/}*.jade', '!**/_*'],
					dest: '<%= path.temp %>',
					ext: '.html'
				}]
			}
		},

		// Stylus compilation
		stylus: {
			compile: {
				options: {
					compress: false,
					linenos: true,
					paths: [
						'<%= path.app %>/assets/vendors/normalize.styl',
						'<%= path.app %>/assets/styles/partials'
					],
					banner: '<%= banner %>'
				},
				files: [{
					expand: true,
					cwd: '<%= path.app %>/assets/styles',
					src: ['{,*/}*.styl', '!**/_*'],
					dest: '<%= path.temp %>/assets/styles',
					ext: '.css'
				}]
			}
		},

		// Clean
		clean: {
			serve: '<%= path.temp %>',
			dist: {
				files: [{
					dot: true,
					src: [
						'<%= path.temp %>',
						'<%= path.dist %>/*',
						'!<%= path.dist %>/.git*'
					]
				}]
			}
		},

		// Html minifycation
		htmlmin: {
			dist: {
				options: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeCommentsFromCDATA: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true,
					removeRedundantAttributes: true,
					useShortDoctype: true
				},
				files: [{
					expand: true,
					cwd: '<%= path.dist %>',
					src: '{,*/}*.html',
					dest: '<%= path.dist %>'
				}]
			}
		},

		// Css minifycation
		cssmin: {
			dist: {
				files: {
					'<%= path.dist %>/css/main.css': [
						'<%= path.temp %>/assets/styles/{,*/}*.css'
					]
				}
			}
		},

		// Image minifycation
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= path.app %>/assets/images',
					src: '{,*/}*.{gif,jpeg,jpg,png}',
					dest: '<%= path.dist %>/img'
				}]
			}
		},

		// SVG minifycation
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= path.app %>/assets/images',
					src: '{,*/}*.svg',
					dest: '<%= path.dist %>/img'
				}]
			}
		},

		// Minify files with UglifyJS
		uglify: {
			dist: {
				options: {
					banner: '<%= banner %>'
				},
				files: {
					'<%= path.dist %>/js/main.js': [
						'<%= path.app %>/assets/scripts/{,*/}*.js'
					]
				}
			}
		},

		// Process html files at build time
		processhtml: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= path.temp %>',
					src: ['{,*/}*.html'],
					dest: '<%= path.dist %>',
					ext: '.html'
				}]
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [
					// Root files
					{
						expand: true,
						cwd: '<%= path.app %>',
						src: ['*.{ico,png,txt,xml}'],
						dest: '<%= path.dist %>'
					},
					// Images files
					{
						expand: true,
						cwd: '<%= path.app %>/assets/images',
						src: ['*.{ico,webp}'],
						dest: '<%= path.dist %>/img'
					},
					// Devices icons and splash screens
					{
						expand: true,
						cwd: '<%= path.app %>/assets/images/res',
						src: ['**'],
						dest: '<%= path.dist %>/res'
					},
					// Fonts files
					{
						expand: true,
						cwd: '<%= path.app %>/assets/fonts',
						src: ['**'],
						dest: '<%= path.dist %>/fonts'
					},
				]
			}
		}

	});

	// Grunt register tasks
	grunt.registerTask('server', function() {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	grunt.registerTask('serve', [
		'clean:serve',
		'jade:compile',
		'stylus:compile',
		'connect:serve',
		'browser_sync:proxy',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'jade:compile',
		'stylus:compile',
		'cssmin',
		'imagemin',
		'svgmin',
		'uglify',
		'copy:dist',
		'processhtml',
		'htmlmin'
	]);

	grunt.registerTask('default', ['build']);

};