let colorTxt = prompt("saisisser la couleur du text : ", "black");
let colorBack = prompt("saisisser la couleur de fond des text :", "white");

var div = document.querySelectorAll("div");
console.log(colorTxt)
console.log(colorBack)
console.log(div)

for (let i = 0; i < div.length; i++)
{
	div[i].style.color = colorTxt;
	div[i].style.backgroundColor = colorBack;
}