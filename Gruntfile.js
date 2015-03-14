module.exports=function(grunt){



    grunt.initConfig({
        concat: {

            dist: {
                src: ['app/services/studentsFactory.js'],
                dest: 'app/main.js',
            },
        },

        watch: {
            files: ['**/*'],
            tasks: ['concat'],
        },
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default',['watch','concat']);


}