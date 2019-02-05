// todo track the score
let score= 0;
//single responsive code
function printScore(){
    $('#result').html(score);
}

function add5(){
    //increse the score variable by 5
    //print the current score variable to #result
    score= score +5;
    printScore();

  }
  $('#add5').click(add5);

function add10(){
    score= score +10;
    printScore();

  }
  $('#add10').click(add10);

function sub1(){
    score= score -1;
    printScore();

  }
  $('#sub1').click(sub1);

function zero(){
      score= 0;
   printScore();

    }
    $('#zero').click(zero);
