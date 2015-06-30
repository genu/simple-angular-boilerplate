module.exports = function () {
    return {
        options: {
            space: '  ',
            wrap: '"use strict";\n\n {%= __ngModule %}',
            name: '<%= pkg.name %>.environment',
            dest: '<%= src %>/js/environment.js'
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
