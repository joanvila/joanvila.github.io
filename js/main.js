var cool = require('cool-ascii-faces');
var nodemailer = require('nodemailer');

$( document ).ready(function() {
    $('#coolFace').html(cool());
    var homeHeight = window.innerHeight;
    homeHeight = homeHeight;
    $('.home').css('height', homeHeight);
    var totalPad = homeHeight - $('.homeContainer').height();
    $('.homeContainer').css('padding-top', (totalPad/2));
    $('.homeContainer').css('padding-bottom', (totalPad/2));

    var professionSet = 0;

	window.setInterval(function(){
		$(this).removeClass('animated pulse');
		switch(professionSet) {
		    case 0:
		        $('#myProfession').fadeOut(500, function() {
	  				$(this).html('Front-end Developer').fadeIn(500);
	  				$(this).addClass('animated pulse');
	  			});
		        ++professionSet;
		        break;
		    case 1:
		    	$('#myProfession').fadeOut(500, function() {
	  				$(this).html('Back-end Developer').fadeIn(500);
	  				$(this).addClass('animated pulse');
	  			});
		        ++professionSet;
		        break;
		    case 2:
		    	$('#myProfession').fadeOut(500, function() {
	  				$(this).html('PHP Developer').fadeIn(500);
	  				$(this).addClass('animated pulse');
	  			});
		        ++professionSet;
		        break;
		    case 3:
		    	$('#myProfession').fadeOut(500, function() {
	  				$(this).html('JavaScript Lover').fadeIn(500);
	  				$(this).addClass('animated pulse');
	  			});
		        ++professionSet;
		        break;
		    case 4:
		    	$('#myProfession').fadeOut(500, function() {
	  				$(this).html('Software Engineer').fadeIn(500);
	  				$(this).addClass('animated pulse');
	  			});
		        professionSet = 0;
		        break;
		}
	}, 3200);

	$( "#cooler" ).click(function() {
  		$('#coolFace').html(cool());
	});

	$( "#homelnk" ).click(function() {
	  	$('.home').animatescroll();
	});

	$( "#aboutlnk" ).click(function() {
	  	$('.about').animatescroll();
	});

	$( "#projectslnk" ).click(function() {
	  	$('.projects').animatescroll();
	});

	$( "#contactlnk" ).click(function() {
	  	$('.contact').animatescroll();
	});

	$( "#wordslnk" ).click(function() {
	  	$('.words').animatescroll();
	});
});