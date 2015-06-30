module.exports = function () {
    return {
        options: {
            basePath: '<%= src %>',
            templates: {
                html: {
                    js: '<script src="{filePath}"></script>',
                    css: '<link rel="stylesheet" href="{filePath}"/>'
                }
            }
        },
        server: {
            files: {
                '<%= src %>/index.html': '<%= src %>/index.tpl.html'
            }
        }
    }
};