// recurper toutes les nodes title h2
var titleElts = document.getElementsByTagName("h2");
console.log(titleElts); // affiche le tableau
console.log(titleElts[0]); // affiche le premier elements
console.log(titleElts.length); // affiche la longeur du tableau

// tous les elements de classe 'merveilles'
var beautiful = document.getElementsByClassName("merveilles");
console.log(beautiful);
for (var i = 0; i < beautiful.length; i++) {
	console.log(beautiful[i]);
}

// elem content id = "nouvelles"
console.log(document.getElementById("nouvelles"))

// tous les elems d'id 'antiques' et classe 'exist'
console.log(document
	.getElementById('antiques')
	.getElementsByClassName('existe')
	.length) // affiche 1

// Tous les paragraphes
console.log(document.querySelectorAll("p").length); // Affiche 3

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll("#contenu p").length); // Affiche 2

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll(".existe").length); // Affiche 8

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll("#antiques > .existe").length); // Affiche 1

// Le premier paragraphe
console.log(document.querySelector("p"));

// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").innerHTML);

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById("contenu").textContent);

// L'attribut href du premier lien
console.log(document.querySelector("a").getAttribute("href"));

// L'identifiant de la première liste
console.log(document.querySelector("ul").id);

// L'attribut href du premier lien
console.log(document.querySelector("a").href);

if (document.querySelector("a").hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.log("Le premier lien ne possède pas l'attribut target");
}

// Liste des classes de l'élément identifié par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length); // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]); // Affiche "merveilles"

if (document.getElementById("antiques").classList.contains("merveille")) {
    console.log("L'élément identifié par antiques possède la classe merveille");
} else {
    console.log("L'élément identifié par antiques ne possède pas la classe merveille");
}