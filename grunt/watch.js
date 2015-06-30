module.exports = function () {
    return {
        bower: {
            files: ['bower.json'],
            tasks: ['wiredep:server']
        },
        js: {
            files: ['<%= src %>/modules/**/{,*/}*.js'],
            options: {
                livereload: '<%= connect.options.livereload %>'
            }
        },
        styles: {
            files: ['<%= src %>/css/{,*/}*.css'],
            tasks: [
                'newer:copy:styles',
                'autoprefixer'
            ]
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= src %>/{,*/}*.html',
                '<%= src %>/**/{,*/}*.html',
                '.tmp/css/{,*/}*.css',
                '<%= src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        },
        includeSource: {
            files: ['<%= src %>/index.tpl.html'],
            tasks: ['includeSource:server', 'wiredep:server']
        }
    }
};