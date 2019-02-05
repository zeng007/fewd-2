// todo clicking the button toggles the "dark" class on the body
// use the jQuery functions addClass and removeClass
// Cheat Sheet with documentation: http://oscarotero.com/jquery/

$( "#lightSwitch" ).click(function() {
  $( "body" ).toggleClass( "dark");
});
