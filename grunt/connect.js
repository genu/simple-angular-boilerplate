module.exports = function() {
  return {
    options: {
      hostname: 'localhost',
      livereload: 35729
      useAvailablePort: true,
    },
    livereload: {
      options: {
        open: true,
        middleware: function(connect) {
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
