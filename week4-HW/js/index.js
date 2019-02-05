$('#info1').hide();
$('#info2').hide();
$('#read_less1').hide();
$('#read_less2').hide();
$('#learn_more_info').hide();

$("#read_more1").click(function() {
  $( "#info1" ).slideDown( "slow", function() {
     $('#read_more1').hide();
     $('#read_less1').show();
  });
});

$("#read_more2").click(function() {
  $( "#info2" ).slideDown( "slow", function() {
     $('#read_more2').hide();
     $('#read_less2').show();
  });
});

$("#read_less1").click(function() {
  $( "#info1" ).slideUp( "slow", function() {
     $('#read_more1').show();
     $('#read_less1').hide();
  });
});

$("#read_less2").click(function() {
  $( "#info2" ).slideUp( "slow", function() {
     $('#read_more2').show();
     $('#read_less2').hide();
  });
});

$("#learn_more").click(function() {
  $( "#learn_more_info" ).slideDown( "slow", function() {
     $('#learn_more_info').show();
     $('#learn_more').hide();
  });
});
