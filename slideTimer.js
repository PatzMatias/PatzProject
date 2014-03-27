function slideTimer() {
if (!document.getElementById) return false;
if (!document.getElementById("slideecontent")) return false;
var elem = document.getElementById("slidecontent");
movement = setTimeout("moveImage()",2000);
}

sddLoadEvent(slideTimer);