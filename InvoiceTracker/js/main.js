
$( document ).ready(function() {

$(".spinner").animate({'opacity':'1.0'}, 300, 'linear');
$(".spinner").css({ display: 'block' });

var timeout = setTimeout(function(){

	$("#logo").css({ display: 'block' });
	$("#logo").animate({'opacity':'1.0'}, 300, 'linear');


}, 200);

var timeout = setTimeout(function(){

	$("#logo").animate({bottom: '+=25px'}, 300);

}, 500);

var timeout = setTimeout(function(){

	$("#usersubcontainer").css({ display: 'block' });
	$("#usersubcontainer").animate({'opacity':'1.0'}, 300, 'linear');

}, 800);

});

