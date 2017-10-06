$(document).ready(function(){
$("#next").click(function(){
$.getJSON("http://brianeno.needsyourhelp.org/draw",function(json){
	$(".strategy").html(JSON.stringify(json));
});	

});
});
