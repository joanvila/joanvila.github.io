var cool = require('cool-ascii-faces');
var bootstrap = require('bootstrap');

$( document ).ready(function() {
    $('#coolFace').html(cool());
});

var professionSet = 0;

window.setInterval(function(){
	switch(professionSet) {
	    case 0:
	        $('#myProfession').fadeOut(1000, function() {
  				$(this).html('Front-end Developer').fadeIn(1000);
  			});
	        ++professionSet;
	        break;
	    case 1:
	    	$('#myProfession').fadeOut(1000, function() {
  				$(this).html('Back-end Developer').fadeIn(1000);
  			});
	        ++professionSet;
	        break;
	    case 2:
	    	$('#myProfession').fadeOut(1000, function() {
  				$(this).html('Software Engineer').fadeIn(1000);
  			});
	        professionSet = 0;
	        break;
	}
}, 4000);

$( "#cooler" ).click(function() {
  	$('#coolFace').html(cool());
});