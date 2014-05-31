'use strict';

describe('Service: Author', function () {

  // load the service's module
  beforeEach(module('stoogeBloggerzApp'));

  // instantiate service
  var Author;
  beforeEach(inject(function (_Author_) {
    Author = _Author_;
  }));

  it('should do something', function () {
    expect(!!Author).toBe(true);
  });

});
