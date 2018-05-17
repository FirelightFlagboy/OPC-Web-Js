let lstDesserts = document.getElementById("desserts");
let btnAdd = document.querySelector("button");

btnAdd.addEventListener('click', function (e){
	let dessert = prompt("ajouter un dessert :", "");
	console.log('click ' + dessert);

	let li = document.createElement('li');
	li.textContent = dessert;
	lstDesserts.appendChild(li);
});
