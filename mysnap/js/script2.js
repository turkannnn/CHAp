var check = false;
$(document).ready(function(){

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


