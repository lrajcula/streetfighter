$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();	
})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	});
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show(); 
		$('.hadouken').finish().show()
		.animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
			);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	})
	.mousedown(function() {
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
	});


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
	
	$(document).keydown(function(e) {
        if(e.keyCode == 88) 
            $('.ryu-ready').hide();
        	$('.ryu-still').hide();
            $('.ryu-cool').show();
          })
		.keyup(function(e) {
		if (e.keycode == 88)
			$('.ryu-cool').hide();
			$('.ryu-still').show();
			$('.ryu-cool').hide();

			});
    
       
