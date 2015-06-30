module.exports = function () {
    return {
        options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729
        },
        livereload: {
            options: {
                open: true,
                middleware: function (connect) {
                    return [
                        connect.static('.tmp'),
                        connect().use('/bower_components', connect.static('./bower_components')),
                        connect.static('src')
                    ]
                }
            }
        }
    }
};