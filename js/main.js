var cool = require('cool-ascii-faces');

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

	var clicks = 0;
	$( "#cooler" ).click(function() {
  		$('#coolFace').html(cool());
  		++clicks;
  		if (clicks == 30){
  			$('#notNiceModal').modal('show');
  			window.setInterval(function(){
  				$('#contentBodyModal').html(cool());
  				var index = Math.round(Math.random() * 9);

				var ColorValue = "FFFFFF"; // default color - white (index = 0)

				if(index == 1)
				ColorValue = "FFCCCC"; //peach
				if(index == 2)
				ColorValue = "CCAFFF"; //violet
				if(index == 3)
				ColorValue = "A6BEFF"; //lt blue
				if(index == 4)
				ColorValue = "99FFFF"; //cyan
				if(index == 5)
				ColorValue = "D5CCBB"; //tan
				if(index == 6)
				ColorValue = "99FF99"; //lt green
				if(index == 7)
				ColorValue = "FFFF99"; //lt yellow
				if(index == 8)
				ColorValue = "FFCC99"; //lt orange
				if(index == 9)
				ColorValue = "CCCCCC"; //lt grey

				$('#contentBodyModal').css("background-color", "#"+ColorValue);
  			}, 150);
  			clicks = 0;
  		}
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