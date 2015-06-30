'use strict';

/**
 * @doc interface
 * @name module.core.controller
 * @description
 * Control the layout of the application.
 */
angular.module('module.core').controller('LayoutCtrl', function () {
    /**
     * @doc property
     * @propertyOf module.core.controller
     * @type {string} Name of the application
     */
    this.appName = "Simple application bootstrap";
});
