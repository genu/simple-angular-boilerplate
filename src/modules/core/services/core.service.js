angular.module('app').factory('Core', function(localStorageService){
  return {
    saveState: function(state) {
      localStorageService.set('appState', state)
    },
    loadState: function() {
      return localStorageService.get('appState')
    }
  }
})
