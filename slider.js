
jQuery(document).ready(function($){
var slideWidth = $('.banner').width();
var contWidth = $('#slidecontent').width();
var counter=1;
var clicks=1;

startSlider();

$('#prev').click(function(){left();		});
 

$('#next').click(function(){right();	});

	function left(){
		if(counter>0){
		$('#slidecontent').animate({"margin-left":"+=693px"},700, pre());
		$('#slidecount p').text(counter+" / 3");
		counter--;
		}
		else{
		counter=3;
		left();
		}
	}

	function right(){
		if(counter<=3){
		$('#slidecontent').animate({"margin-left":"-=693px"},700, app());
		$('#slidecount p').text(counter+" / 3");
		counter++;
		}
		else{
		counter=1;
		right();
		}
	}


	function pre(){
		 	$('.slides ul > li:last-child').prependTo($('.slides ul:first'));
		 	$('#slidecontent').css({"margin-left":"-693px"});
		 }

	function app(){
			$('.slides ul > li:first').appendTo($('.slides ul:last'));
			$('#slidecontent').css({"margin-left":"0px"});
			
	}


	function startSlider(){
	$('#plause').css({"background-image":"url('resources/pause.png')"});
	loop=setInterval(function(){ 

		if(counter<3){
		$('#slidecontent').animate({"margin-left":"-=693px"},700, function(){
		$('.slides ul > li:first').appendTo($('.slides ul:last'));
		$('#slidecontent').css({"margin-left":"0px"});
		$('#slidecount p').text(counter+" / 3");
		});
		counter++;
		}
		else{
		counter=1;
		$('#slidecontent').animate({"margin-left":"-=693px"},700, function(){
		$('.slides ul > li:first').appendTo($('.slides ul:last'));
		$('#slidecontent').css({"margin-left":"0px"});
		$('#slidecount p').text(counter+" / 3");
		});
		}
	}, 3000);
	
	}
	
	function stopSlider(){
	$('#plause').css({"background-image":"url('resources/play.png')"});
	clicks=2;
	window.clearTimeout(loop);
	}
	
	$('#plause').click(function(){
	if(clicks==1){
	$('#plause').css({"background-image":"url('resources/play.png')"});
	clicks++;
	stopSlider();
	}
	else if(clicks==2){
	$('#plause').css({"background-image":"url('resources/pause.png')"});
	clicks--;
	stopSlider();
	startSlider();
	}
	});
	
	$('.slidenav').mouseover(function(){stopSlider();});
	$('.slidenav').mouseout(function(){stopSlider(); startSlider();});
	
	
	
});