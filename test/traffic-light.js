var chai = require('chai');
var expect = chai.expect;

var trafficLight = require('../src/traffic-light');
var RED = require('../src/traffic-light').RED;
var GREEN = require('../src/traffic-light').GREEN;
var YELLOW = require('../src/traffic-light').YELLOW;

describe('Traffic Light', function() {
  
  describe('#getState()', function() {
  
    it('should return RED on initial state', function() {
      expect(trafficLight.getState(RED, 2, 20, 0, 0)).to.equal(RED);
    });
  
    it('should return RED at 01:30 if initial state is RED and interval is 2 minutes', function() {
      expect(trafficLight.getState(RED, 2, 20, 1, 30)).to.equal(RED);
    });
  
    it('should return GREEN at 02:00 if initial state is RED and interval is 2 minutes', function() {
      expect(trafficLight.getState(RED, 2, 20, 2, 0)).to.equal(GREEN);
    });    

    it('should return RED at 04:00 if initial state is RED and interval is 2 minutes', function() {
      expect(trafficLight.getState(RED, 2, 20, 4, 0)).to.equal(RED);
    });

    it('should return YELLOW at 01:40 if initial state is GREEN and interval is 2 minutes and YELLOW light duration is 20 seconds', function() {
      expect(trafficLight.getState(GREEN, 2, 20, 1, 40)).to.equal(YELLOW);
    });

    it('should return YELLOW at 03:45 if initial state is RED and interval is 2 minutes and YELLOW light duration is 20 seconds', function() {
      expect(trafficLight.getState(RED, 2, 20, 3, 45)).to.equal(YELLOW);
    });

  });
});
