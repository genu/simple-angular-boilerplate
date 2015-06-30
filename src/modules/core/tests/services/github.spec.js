describe('Unit: Testing github service', function(){
  var Github;
  var $httpBackend;

  beforeEach(module('app'));

  beforeEach(inject(function(_Github_, _$httpBackend_){
    Github = _Github_;
    $httpBackend = _$httpBackend_;
  }));

  it('should return a list of repositories', function(){
    var mockResponse = [
      {
        name: "Mock repository 1",
        url: "www.example.com/mockRepo"
      },
      {
        name: "Mock repository 2",
        url: "www.example.com/mockRepo2"
      }
    ]
    $httpBackend
      .expectGET('https://api.github.com/users/genu/repos')
      .respond(200, mockResponse);

      Github.getRepositories('genu').then(function(response){
        expect(response.data).toEqual(mockResponse);
      })

      $httpBackend.flush();
  })
})
