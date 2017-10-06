$(document).ready(function(){
$("#next").click(function(){
$.getJSON("https://github.com/vistapuri/oblique-strategies/blob/master/cards.json",function(json){
	$(".strategy").html(JSON.stringify(json));
});	

});
});
