describe('Unit: Testing core service', function(){
  var Core;
  var appState;

  beforeEach(module('app'));

  beforeEach(inject(function(_Core_, localStorageService){
    Core = _Core_
    appState = {user: "eugen", authenticated: false};

    // Start with a clean state
    localStorageService.clearAll();
  }));

  it('should save application state', function(){
    Core.saveState(appState);

    // Get the state
    var savedState = JSON.parse(localStorage['ls.appState']);
    expect(savedState).toEqual(appState)
  });

  it('should load an application state', function(){
    expect(Core.loadState()).toBe(null)

    // Save a state
    localStorage.setItem('ls.appState', JSON.stringify(appState))

    expect(Core.loadState()).toEqual(appState)
  });
})
