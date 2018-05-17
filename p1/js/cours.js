// recupere <head> et <body>
var h = document.head;
console.log(h);
var b = document.body;
console.log(b);

// verifie que body est un neoud element
if (b.nodeType === document.ELEMENT_NODE) {
	console.log("Body est un noeud element");
} else {
	console.log("Body est un noeud textuel");
}

console.log(b.childNodes); // afiche tout les enfants de body

// recurper le titre de la page
var h1 = b.childNodes[1];

console.log(h1.parentNode); // affiche le parent de h1
console.log(document.parentNode); // affiche le parent de document;
