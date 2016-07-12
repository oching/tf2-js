var RED = "RED";
var GREEN = "GREEN";
var YELLOW = "YELLOW";

function getState(initialState, intervalInMinutes, yellowLightDuration, minute, second) {
  if ((minute == 0 && second == 0) || getNumInterval(minute, intervalInMinutes)%2 == 0) { 
    return checkForYellow(initialState, intervalInMinutes, yellowLightDuration, minute, second);
  } else {
    return checkForYellow(toggleState(initialState), intervalInMinutes, yellowLightDuration, minute, second);
  }
}

function checkForYellow(state, intervalInMinutes, yellowLightDuration, minute, second) {
  if (state == GREEN) {
    var timeInSeconds = (minute * 60) + second;
    var nearestInterval = Math.floor(minute/intervalInMinutes);
    if (minute%intervalInMinutes != 0) nearestInterval = (nearestInterval * intervalInMinutes) + intervalInMinutes;
 
    if (timeInSeconds >= ((nearestInterval*60) - yellowLightDuration) && timeInSeconds < (nearestInterval*60)) return YELLOW;   
  } 
  return state;
}

function getNumInterval(minute, intervalInMinutes) {
  
  if (minute < intervalInMinutes) return 0;

  var mod = minute%intervalInMinutes;
  if (mod != 0) return (intervalInMinutes * Math.floor(minute/intervalInMinutes)) - (minute%intervalInMinutes)
  else return minute/intervalInMinutes;
}

function toggleState(initialState) {
  if (initialState == RED) return GREEN;
  else return RED;
}

exports.getState = getState
exports.RED = RED
exports.GREEN = GREEN
exports.YELLOW = YELLOW
