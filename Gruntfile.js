module.exports = function(grunt) {
    var appPath = 'src/app/';
    var resourcesPath = appPath + 'resources/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            src: {
                src: [appPath + '<%= pkg.name %>.js', appPath + '<%= pkg.name =>.min.js']
            },
            dist: {
                src: ['dist/**/*']
            }
        },
        concat: {
            options: {
                separator: '\n\r'
            },
            dist: {
                src: [appPath + 'modules/**/*Module.js',
                    appPath + 'modules/**/*.js',
                    appPath + 'app.js'],
                dest: appPath + '<%= pkg.name %>.js'
            }
        },
        ngmin: {
            dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: '<%= concat.dist.dest %>'
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> */\n',
                mangle: true
            },
            dist: {
                src: '<%= ngmin.dist.dest %>',
                dest: appPath + '<%= pkg.name %>.min.js'
            }
        },
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    src: [resourcesPath + 'css/application.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },
        processhtml: {
            prod: {
                options: {
                    process: true
                },
                files: {
                    'dist/src/app/index.html': ['src/app/index.html']
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: [
                        '<%= uglify.dist.dest %>',
                        appPath + 'modules/**/*.html',
                        resourcesPath + 'css/*.min.css',
                        resourcesPath + 'documents/*',
                        resourcesPath + 'fonts/*',
                        resourcesPath + 'images/*'
                    ],
                    dest: 'dist/',
                    root: 'src/'
                }, {
                    expand: true,
                    src: [
                        'bower_components/**/*.min.js'
                    ],
                    dest: 'dist/' + resourcesPath + 'js/',
                    root: 'src/',
                    rename: function(dest, src) {
                        return dest + src.replace('bower_components/', '');
                    }
                }]
            }
        },
        watch: {
            scripts: {
                options: {
                    livereload: true
                },
                files: [appPath + 'modules/**',
                        resourcesPath,
                        appPath + 'app.js',
                        appPath + 'index.html'],
                tasks: ['dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['clean:src', 'concat']);
    grunt.registerTask('minify-obfuscate', ['concat', 'ngmin', 'uglify', 'cssmin', 'processhtml']);
    grunt.registerTask('prod', ['clean', 'minify-obfuscate', 'copy']);
    grunt.registerTask('default', 'dev');
};