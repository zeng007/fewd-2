// todo convert the three illuminate functions to anonymous functions


function clearLights() {
  // select all bulbs, then change their background-color to black
  $('.bulb').css('background-color', 'black');
}



$('#stopButton').click(function illuminateRed() {
  clearLights();
  $('#stopLight').css('background-color', 'red');
});
$('#slowButton').click(function illuminateYellow() {
  clearLights();
  $('#slowLight').css('background-color', 'yellow');
}
);
$('#goButton').click(function illuminateGreen() {
  clearLights();
  $('#goLight').css('background-color', 'green');
}
)
