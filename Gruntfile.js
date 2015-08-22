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
        copy: {
            main: {
                files: [{
                    expand: true,
                    src: [
                        '<%= uglify.dist.dest %>',
                        appPath + 'index.html',
                        appPath + 'modules/**/*.html',
                        resourcesPath + 'css/*.min.css',
                        resourcesPath + 'css/application.css',
                        resourcesPath + 'documents/*',
                        resourcesPath + 'fonts/*',
                        resourcesPath + 'images/*',
                        'bower_components/**/*.min.js'
                    ],
                    dest: 'dist/',
                    root: 'src/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ngmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('minify-obfuscate', ['concat', 'ngmin', 'uglify']);
    grunt.registerTask('dev', ['clean:src', 'minify-obfuscate']);
    grunt.registerTask('prod', ['clean', 'minify-obfuscate', 'copy']);
    grunt.registerTask('default', 'dev');
};