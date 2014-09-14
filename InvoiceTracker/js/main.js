
$( document ).ready(function() {

$(".spinner").animate({'opacity':'1.0'}, 300, 'linear');
$(".spinner").css({ display: 'block' });

var timeout = setTimeout(function(){

	$("#logo").css({ display: 'block' });
	$("#logo").animate({'opacity':'1.0'}, 300, 'linear');


}, 200);

var timeout = setTimeout(function(){

	$("#logo").animate({margin-bottom: '+=50px'})

}, 500);

});

