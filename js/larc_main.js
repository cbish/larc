// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function() {    
	// full  resizing bg image
	var theWindow        = $(window),
	    $bg              = $("#bg"),
	    aspectRatio      = $bg.width() / $bg.height();	    			    		
	function resizeBg() {
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}					
	}	                   			
	theWindow.resize(resizeBg).trigger("resize");

	//bird prep
	var start_position = $("#bird_2").position();
	var start_left = start_position.left;
	var max_left = (start_left)-120;
	var max_right = (start_left)+60;
	$(window).resize(function() {
  		$(".floating_bird").css({right:'-100px',left:''});
		start_position = $("#bird_2").position();
		start_left = start_position.left;
		max_left = (start_left)-120;
		max_right = (start_left)+60;
	});	

	//gears prep
	$(".bg_gear:first").show();
	$(".bg_gear2:first").show();
	var gear_num1 = 0;
	var gear_num2 =  0;
	var gear_position = $(window).scrollTop();

	$(window).scroll(function() {
		var top  = $(window).scrollTop();

		//bird setup
		//set left within constraint
		var bird_position = $("#bird_2").position();
		var plus_minus = Math.random() < 0.5 ? -1 : 1;
		var random_left =  Math.floor((Math.random() * 10) * plus_minus);
		var new_left = (bird_position.left)+random_left;
		if(new_left > max_left && new_left < max_right){
			$(".floating_bird").css({left: new_left});
		}
		//top based on view port size
		var h = $(window).height();
		var yoff = window.pageYOffset;
		var hmove = ( (yoff) * (h/10) ) / 1000 ;
		$("#bird_2").css({top: (hmove+60)+'px'});

		//rotate gear image with window scroll
		$(".bg_gear").hide();
		$(".bg_gear2").hide();
		if (gear_position  <  top) {
			if (gear_num1 < 4){
				gear_num1++;
			} else {
				gear_num1 = 0;
			}

			if (gear_num2 < 7){
				gear_num2++;
			} else {
				gear_num2 = 0;
			}
		} else {
			if (gear_num1 > 0){
				gear_num1--;
			} else {
				gear_num1 = 4;
			}

			if (gear_num2 >  0){
				gear_num2--;
			} else {
				gear_num2 = 7;
			}
		}
		$(".bg_gear:eq("+gear_num1+")").show();
		$(".bg_gear2:eq("+gear_num2+")").show();
		gear_position  =  top;
	});

});