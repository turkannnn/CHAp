var rotationAss = 180;
var rotationIf = 180;
var rotationCycle = 180;
var check = false;
$(document).ready(function(){
	if ( $(window).width() < 1000) {
		$('#ButtCycleInf img').css({'height': '25px'});
		$('#ButtAssInf img').css({'height': '25px'});
		$('#ButtIfInf img').css({'height': '25px'});
	};
	//Smooth transition
    $("#Section2").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#Section4").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
     $("#Section5").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    //Rotate the picture on click and open up a hide information
	$('#ButtAssInf').click(function(){
		$('#AssInf').stop();
		$('#AssInf').slideToggle(700);
		rotationAss = rotationAss + 180;
		$('#ButtAssInf').css({'transform': 'rotate('+rotationAss+'deg)'}, 600);
	});

	$('#ButtIfInf').click(function(){
		$('#IfInf').stop();
		$('#IfInf').slideToggle(700);
		rotationIf = rotationIf + 180;
		$('#ButtIfInf').css({'transform': 'rotate('+rotationIf+'deg)'}, 600);			
	});
	$('#ButtCycleInf').click(function(){
		$('#CycleInf').stop();
		$('#CycleInf').slideToggle(700);
		rotationCycle = rotationCycle + 180;
		$('#ButtCycleInf').css({'transform': 'rotate('+rotationCycle+'deg)'}, 600);
	});

	//window "loading" opening
	if (check == true) {

		$('#Base').click(function() {
				$('#loading').slideToggle();
				$('#Menu').css({'opacity':'1'}, 1000);
				$('#Base').css({'opacity':'1'}, 1000);					
			check = false;
			
		});

		$('#Menu').click(function() {
				$('#loading').slideToggle();
				$('#Menu').css({'opacity':'1'}, 1000);
				$('#Base').css({'opacity':'1'}, 1000);					
			
			check = false;
		});
	};


	$('#but_loading').click(function() {
		$('#Menu').css({'opacity':'0.3'}, 1000);
		$('#Base').css({'opacity':'0.3'}, 1000);
		$('#loading-fade').css({'z-index':'9901'}, 1000);

		$('#loading').slideToggle();
		check = true;
	});

	$('#close').click(function() {
		$('#Menu').css({'opacity':'1'}, 1000);
		$('#Base').css({'opacity':'1'}, 1000);
		$('#loading-fade').css({'z-index':'0'}, 1000);
		$('#loading').slideToggle();
	});

});




/*
$(document).ready(function(){
alert('Ваша версия jQuery ' + jQuery.fn.jquery);
});

alert("dfsf");
*/


