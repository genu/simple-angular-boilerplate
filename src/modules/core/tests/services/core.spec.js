describe('Unit: Testing core service', function(){
  var Core

  beforeEach(module('app'));

  beforeEach(inject(function(_Core_){
    Core = _Core_
  }))

  it('should check if a user is authenticated', function(){
      expect(Core.isAuthenticated()).to.equal(true);
  })
})
