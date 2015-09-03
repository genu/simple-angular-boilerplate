'use strict';

angular.module('module.core').run(function($rootScope) {
  // Top Menu
  $rootScope.topMenu = [];

  $rootScope.addTopMenu = function(name, uisref, icon) {
    $rootScope.topMenu.push({
      name: name,
      sref: uisref,
      icon: icon
    });
  };

  // Add static pages
  $rootScope.addTopMenu('Home', 'page.home', 'fa-home')
  $rootScope.addTopMenu('About', 'page.about', 'fa-question-circle')
  $rootScope.addTopMenu('Architecture', 'page.architecture', 'fa-wrench')
});
