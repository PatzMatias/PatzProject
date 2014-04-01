<script type="text/javascript">
var counter=1;


function moveImage(){
if (!document.getElementById) return false;
if (!document.getElementById("slidecontent")) return false;
var elem = document.getElementById("slidecontent");
if(counter<=2){
elem.style.marginLeft = -counter*100+"%";
}
else{
elem.style.marginLeft = "0px";
counter=0;
}
	counter++;
	slideTimer();
}

function slideTimer() {
	movement = setTimeout("moveImage()",3000);
}


function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
	window.onload = func;
} else {
	window.onload = function() {
	oldonload();
	func();
}
}
}

function right(){
clearTimeout(movement);
moveImage();
}

function left(){
clearTimeout(movement);
moveImage();
}

function pause(){
clearTimeout(movement);
var bg = document.getElementById("plause");
bg.style.backgroundImage ="url('resources/pause.png')";
bg.onClick(function(){
var bg = document.getElementById("play");
bg.style.backgroundImage = "url('resources/play.png')";
slideTimer();
bg.id="plause";
});
}




addLoadEvent(slideTimer);

</script>