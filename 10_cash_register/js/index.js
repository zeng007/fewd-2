// todo add comments explaining the code

let total = 0;

function currencyFormat(number) {
  // str to float
  let currency = parseFloat(number);
  //float to str with 2 decimals
  //add the dollar sign to the beginning of the currency string
  currency = '$' + currency.toFixed(2);
  //
  return currency;
}

$('#entry').submit(function(){
  //wtops the form from loading new page
  event.preventDefault();

//taking the user input value and store it in entry
  let entry = $('#newEntry').val();
  let entryNumber = parseFloat(entry);

//34-> "34.00"
  let currency = currencyFormat(entryNumber);

  //call our entries div and insert another div tag into it
  $('#entries').append('<div>' + currency + '</div>');

  total += entryNumber;
  $('#total').html(currencyFormat(total));

  $('#newEntry').val('');
});
