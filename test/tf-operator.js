var chai = require('chai');
var expect = chai.expect;

var tfOperator = require('../src/tf-operator');


describe('Traffic Operator', function() {

  it('getState should be RED on initial state', function() {
    expect(tfOperator.getState("RED")).to.equal("RED");
  });

});
