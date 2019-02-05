$('#stopButton').click(illuminateRed);
$('#slowButton').click(illuminateYellow);
$('#goButton').click(illuminateGreen);

function illuminateRed() {
  clearLights();
  $('#stopLight').css('background-color', 'red');
}

function illuminateYellow() {
  clearLights();
  $('#slowLight').css('background-color', 'yellow');
}

function illuminateGreen() {
  clearLights();
  $('#goLight').css('background-color', 'green');
}


function clearLights() {
  // select all bulbs, then change their background-color to black
  $('.bulb').css('background-color', 'black');

}
