'use strict';

/**
 * @ngdoc Main App module
 * @name app
 * @description Main entry point of the application
 *
 */
angular.module('app', [
    'ui.router', 'ui.bootstrap',
    'SimpleFrontendBoilerplate.environment',
    'module.core'
]).config(function ($urlRouterProvider, ENV) {
    $urlRouterProvider.otherwise('/app');
}).run(function () {
});
