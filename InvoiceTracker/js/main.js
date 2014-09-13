
$( document ).ready(function() {


$( ".item" ).click(function() {
  $("#dialoguebox").css({ display: 'block' });
  $("#closebox").css({ display: 'block' });
});

$( "#closebox" ).click(function() {
  $("#dialoguebox").css({ display: 'none' });
  $("#closebox").css({ display: 'none' });
});


});