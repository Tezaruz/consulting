module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
            },
            build: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'source/js/app.js'
                ],
                dest: 'build/js/app.js'
            }
        },
        less: {
            options: {
                compress: true
            },
            build: {
                files: {
                    'build/css/app.css':[
                        'bower_components/bootstrap/dist/css/bootstrap.css',
                        'bower_components/bootstrap/dist/css/bootstrap-theme.css',
                        'source/css/bootstrap-responsive.css',
                        'source/css/app.less'
                    ],
                    'build/css/services.css':[
                        'source/css/services.less'
                    ]
                }

            }
        },
        jade: {
            prod: {
                options: {
                    data: {
                        js: ['js/app.js'],
                        css: ['css/app.css']
                    }
                },
                files: {
                    'build/index.html': 'source/index.jade',
                    'build/about.html': 'source/about.jade',
                    'build/service.html': 'source/service.jade',
                    'build/contact.html': 'source/contact.jade',
                    'build/html/smenServ.html': 'source/html/smenServ.jade'
                }
            }
        },
        watch: {
            js:{
                files:'source/js/**/*.js',
                tasks: ['uglify']
            },
            jade:{
                files:'source/**/*.jade',
                tasks: ['jade:prod']
            },
            less:{
                files:'source/css/**/*.less',
                tasks: ['less']
            },
            img: {
                files:'source/img/**/*',
                tasks: ['copy:img']
            },
            fonts: {
                files:'source/fonts/**/*',
                tasks: ['copy:fonts']
            }
        },
        copy: {
              bootstrap_to_source: {
                  cwd: 'bower_components/bootstrap/fonts',
                  src: '**',
                  dest: 'source/fonts/',
                  expand: true,
                  filter: 'isFile'
              },
              fonts: {
                  cwd: 'source/fonts',
                  src: '**',
                  dest: 'build/fonts/',
                  expand: true,
                  filter: 'isFile'
              },
              img:{
                  cwd: 'source/img',
                  src: '**',
                  dest: 'build/img/',
                  expand: true,
                  filter: 'isFile'
              }
        }

    });

    /*grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');*/
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['uglify', 'less', 'jade:prod', 'copy:bootstrap_to_source','copy:fonts', 'copy:img']);

};
