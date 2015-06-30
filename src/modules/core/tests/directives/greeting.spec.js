describe('Unit: Testing greeting', function(){
  var element;
  var scope

  beforeEach(module('app'));

  beforeEach(inject(function($compile, $rootScope){
    scope = $rootScope.$new();
    element = $compile('<greeting person="aPerson"/>')(scope)
  }));

  it('should show a greeting', function(){
      scope.aPerson = {
        name: "Bob Saget"
      }

      scope.$digest();

      expect(element.find('a').text()).toEqual('Bob Saget');
  });
})
