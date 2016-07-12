var chai = require('chai');
var expect = chai.expect;

var trafficLight = require('../src/traffic-light');
var RED = require('../src/traffic-light').RED;
var GREEN = require('../src/traffic-light').GREEN;
var YELLOW = require('../src/traffic-light').YELLOW;

describe('Traffic Light', function() {
  
  describe('#getState()', function() {
  
    it('should return RED on initial state', function() {
      expect(trafficLight.getState(RED, 2, 0, 0)).to.equal(RED);
    });
  
    it('should return RED at 01:00 if initial state is RED and interval is 2 minutes', function() {
      expect(trafficLight.getState(RED, 2, 1, 0)).to.equal(RED);
    });
  
    it('should return GREEN at 02:00 if initial state is RED and interval is 2 minutes', function() {
      expect(trafficLight.getState(RED, 2, 2, 0)).to.equal(GREEN);
    });    

    it('should return RED at 04:00 if initial state is RED and interval is 2 minutes', function() {
      expect(trafficLight.getState(RED, 2, 4, 0)).to.equal(RED);
    });

  });
});
