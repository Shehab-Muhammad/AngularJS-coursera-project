var fs = require('fs');


module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

// Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 5000,
                    base: 'dist',
                    livereload: true
                }
            }
        },

        jshint: {
            files: {
                src: ['app/scripts/*.js']
            }
        },

        clean: ['dist'],

        watch: {
            myDefault: {
                files: 'app/**/*',
                tasks: ['clean', 'jshint' ,'copy' ],
                options: {
                    livereload: true
                }
            }
        },

        copy: {
            main: {
                files: [

                    // includes files within path and its sub-directories
                    {expand: true, cwd: './app', src: ['**/*','!styles/**/*.css'], dest: 'dist/'}
                ]
            }
        }
    });

    grunt.registerTask('default', 'playing with grunt', ['clean', 'jshint','copy' , 'connect', 'watch']);

};