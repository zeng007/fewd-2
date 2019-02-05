// setup form listener
// submit will catch both enter keys and button presses
$('form').on('submit', function(){
  // stop the page from reloading
  event.preventDefault();

  // capture the user input in a variable
  // after converting toLowerCase
  let city = $('#city-type').val().toLowerCase();

  // set the user input back to empty
  // now that we've captured it in city
  $('#city-type').val('');

  // remove any existing classes that could conflict
  $('body').removeClass();

  // check what they typed versus our expected values
  if (city === 'nyc' || city === 'new york' || city === 'new york city' || city === 'ny'){
    $('body').addClass('nyc');
  } else if (city === 'sf' || city === 'san francisco' || city === 'bay area'){
    $('body').addClass('sf');
  } else if (city === 'la' || city === 'los angeles' || city === 'lax'){
    $('body').addClass('la');
  } else if (city === 'austin' || city === 'atx'){
      $('body').addClass('austin');
  } else if (city === 'sydney' || city === 'syd'){
      $('body').addClass('sydney');
  }
})
