module.exports = function () {
    return {
        server: {
            src: ['<%= src %>/index.html'],
            ignorePath: /\.\.\//
        }
    }
};