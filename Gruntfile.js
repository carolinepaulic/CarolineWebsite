module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: '\n\r' //Separator that goes between files in result
            },
            dist: {
                src: ['src/**/*.js'], //Source js to read from
                dest: 'dist/CarolineWebsite.js' //Where to put the concatenated result
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> */\n' //Goes at the top of the resulting file
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>'] //Result path: Files to read from
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
};