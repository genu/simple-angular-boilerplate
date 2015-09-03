module.exports = function() {
  return {
    options: {
      space: '  ',
      wrap: '"use strict";\n\n {%= __ngModule %}',
      name: 'app.environment',
      dest: '<%= src %>/js/environment.js',
      constants: {
        APP_NAME: '<%= pkg.name %>',
        APP_DESCRIPTION: '<%= pkg.description %>'
      }
    },
    development: {
      constants: {
        ENV: {
          API_URL: "HTTP://DEV_API"
        }
      }
    },
    production: {
      constants: {
        ENV: {
          API_URL: "HTTP://PROD_API"
        }
      }
    }
  }
};
