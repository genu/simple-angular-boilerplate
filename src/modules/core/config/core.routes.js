'use strict';

angular.module('module.core').config(function ($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'modules/core/views/app.html',
            controller: 'MainCtrl as main',
        })
        .state('app.home', {
            url: '',
            templateUrl: 'modules/core/views/home.html',
            controller: 'HomeCtrl as home'
          })
        .state('app.about', {
            url:'/about',
            templateUrl: 'modules/core/views/about.html',
            controller: 'AboutCtrl as about'
        })
        .state('app.architecture', {
            url:'/architecture',
            templateUrl: 'modules/core/views/architecture.html',
            controller: 'ArchitectureCtrl as architecture'
        })
      });
