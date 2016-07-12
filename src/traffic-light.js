var RED = "RED";
var GREEN = "GREEN";

function getState(initialState, intervalInMinutes, minute, second) {
  if ((minute == 0 && second == 0) || getNumInterval(minute, intervalInMinutes)%2 == 0) { 
    return initialState;
  } else {
    return toggleState(initialState);
  }
}

function getNumInterval(minute, intervalInMinutes) {
  var mod = minute%intervalInMinutes;
  if (mod != 0) return (intervalInMinutes * (minute/intervalInMinutes)) - (minute%intervalInMinutes)
  else return minute/intervalInMinutes;
}

function toggleState(initialState) {
  if (initialState == RED) return GREEN;
  else return RED;
}

exports.getState = getState
exports.RED = RED
exports.GREEN = GREEN
