// todo read the inputs, compare the numbers, fill #comparison

function compare(){
  console.log("Hello!running the compare func");
  //check each of the inputs, store them in variables
  let str1 = $('#a').val();
  let str2 = $('#b').val();
  //convert the variables from strings to numbers
  let num1 = parseInt(str1,10);
  let num2 = parseInt(str2,10);
  //write if/else to figure out their relationship

  let message ='';
  if(num1 < num2){
    message ='<';
  } else if(num1 > num2){
    message ='>';
  } else if(num1 === num2){
    message ='=';
  } else{
    message= '?';
  }
  //change the #comparison.html to desire result
  $('#comparison').html(message);
}
$('#submit').click(compare);
