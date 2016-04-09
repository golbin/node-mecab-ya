module.exports = function(grunt) {
    grunt.initConfig({
        nodeunit: {
            main: ['test/mecab.js'],
        },
        jshint: {
            main: ['mecab.js'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('default', ['jshint', 'nodeunit']);
};