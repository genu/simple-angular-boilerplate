'use strict';

angular.module('module.core').config(function($stateProvider, USER_ROLES) {
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'modules/core/views/layouts/app.html',
      controller: 'AppCtrl as app',
      data: {
        authorizedRoles: [USER_ROLES.registered]
      }
    })
    .state('page', {
      abstract: true,
      url: '/page',
      templateUrl: 'modules/core/views/layouts/page.html',
      controller: 'PageCtrl as page'
    })
    .state('page.home', {
      url: '/home',
      templateUrl: 'modules/core/views/home.html'
    })
    .state('page.about', {
      url: '/about',
      templateUrl: 'modules/core/views/about.html'
    })
    .state('page.architecture', {
      url: '/architecture',
      templateUrl: 'modules/core/views/architecture.html'
    })
});
