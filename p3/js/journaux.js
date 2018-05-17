// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
var div = document.getElementById("contenu");
var ul = document.createElement("ul");
ul.id = "liste-journaux";
div.appendChild(ul);

for (let i = 0; i < journaux.length; i++)
{
	let li = document.createElement("li");
	let a = document.createElement("a");
	a.href = journaux[i];
	a.textContent = journaux[i];
	li.appendChild(a);
	ul.appendChild(li);
}