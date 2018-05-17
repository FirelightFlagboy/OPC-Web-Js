let para = document.querySelectorAll("div");

function setColor(color) {
	for (let i = 0; i < para.length; i++){
		para[i].style.backgroundColor = color;
	}
}

document.addEventListener('keypress', function (e) {
	switch (e.charCode) {
		case 114:
			setColor("red");
			break;
		case 106:
			setColor("yellow");
			break;
		case 118:
			setColor("green");
			break;
		case 110:
			setColor("black");
			break;
		case 98:
			setColor("white");
			break;
		default:
			console.log(e.charCode);
			break;
	}
});
