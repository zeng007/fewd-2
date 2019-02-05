
// todo if you click on helpInfo, hide it
function hidePrompt(){
  $('#helpPrompt').show();
  $('#helpInfo').hide();
}
$('#helpInfo').click(hidePrompt);

// if you click on helpPrompt, show helpInfo
function showInfo(){
  $('#helpPrompt').hide();
  $('#helpInfo').show();
}
$('#helpPrompt').click(showInfo);

// hide the info box on page load
$('#helpInfo').hide();
