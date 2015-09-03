'use strict';

/**
 * @doc interface
 * @name module.core.controller
 * @description
 * Control the layout of the application.
 */
angular.module('module.core').controller('LayoutCtrl', function(PACKAGE) {
  this.appName = PACKAGE.description
});
