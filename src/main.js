var trafficLight = require('./traffic-light');
var RED = require('./traffic-light').RED;
var GREEN = require('./traffic-light').GREEN;

console.log("Starting simulation...");

printTrafficLights();

console.log("\nEnd of simulation.")

function printTrafficLights() {
  var nsInitialState = RED;
  var ewInitialState = GREEN;
  var intervalInMinutes = 5;
  var yellowLightDurationInSeconds = 30;

  for (min = 0; min <= 30; min++) {
    for (sec = 0; sec <= 59; sec++) {
      console.log("\n@ " + min + ":" + toString(sec));
      console.log("North/South: " + trafficLight.getState(nsInitialState, intervalInMinutes, yellowLightDurationInSeconds, min, sec));
      console.log("East/West: " + trafficLight.getState(ewInitialState, intervalInMinutes, yellowLightDurationInSeconds, min, sec));
    }  
  }

}

function toString(second) {
  if (second < 10) return "0" + second; 
  else return second;
}
