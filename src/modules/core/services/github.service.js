angular.module('app').factory('Github', function($http){
  return {
    getRepositories: function(user) {
      return $http.get('https://api.github.com/users/' + user + '/repos', this)
    }
  }
})
