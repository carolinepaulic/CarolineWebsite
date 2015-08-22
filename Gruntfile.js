module.exports = function(grunt) {
    var appPath = 'src/app/';
    var resourcesPath = appPath + 'resources/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/**/*', appPath + '<%= pkg.name %>.js', appPath + '<%= pkg.name =>.min.js'],
        concat: {
            options: {
                separator: '\n\r' //Separator that goes between files in result
            },
            dist: {
                src: ['src/**/*Module.js',
                      'src/**/*.js'], //Source js to read from
                dest: appPath + '<%= pkg.name %>.js' //Where to put the concatenated result
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> */\n', //Goes at the top of the resulting file
                mangle: true
            },
            dist: {
                src: '<%= concat.dist.dest %>',
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('dev', ['clean', 'concat', 'uglify', 'copy']);
};