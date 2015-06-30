angular.module('app').directive('greeting', function(){
  return {
    restrict: 'E',
    scope: {
      person: '='
    },
    template: '<p style="padding-right: 10px;" class="navbar-text navbar-right">Singed in as <a href="#">{{person.name}}</a></p>'
  }
})
