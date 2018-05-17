/*
 Exercice : afficher l'enfant d'un objet du DOM
*/

// Affiche un enfant d'un objet du DOM
// Le paramètre noeud est l'objet du DOM
// Le paramètre indice est l'indice de l'enfant à afficher
function afficherEnfant(noeud, indice) {
	// si le noeud n'est pas de type element
	if (noeud.nodeType !== document.ELEMENT_NODE)
	{
		console.error("Type de noeud incorrect");
		return (false);
	}
	// si l'indice ne correspond pas a la plage d'indice
	if (indice < 0 || indice >= noeud.childNodes.length)
	{
		console.error("Indice incorrect");
		return (false);
	}
	console.log(noeud.childNodes[indice]);
}

// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body a moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);