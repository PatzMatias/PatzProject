function moveImage() {
if (!document.getElementById) return false;
if (!document.getElementById("slidecontent")) return false;
var elem = document.getElementById("slidecontent");
elem.style.marginLeft = -100%;
}