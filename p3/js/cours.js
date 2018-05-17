// Modification du contenu HTML de la liste : ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");
// ou pour certaine
document.querySelector("h1").id = "titre";

var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
titreElt.classList.add("chat"); // Ajout de la classe "chat"
console.log(titreElt);

var pythonElt = document.createElement("li"); // Création d'un élément li
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

var octaveElt = document.createElement("li"); // Création d'un élément li
octaveElt.id = "octave"; // Définition de son identifiant
octaveElt.textContent = "octave"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(octaveElt); // Insertion du nouvel élément

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt,
	document.getElementById("php"));

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin",
'<li id="javascript">JavaScript</li>');

var bashElt = document.createElement("li"); // Création d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent = "Bash"; // Définition de son contenu textuel
// Remplacement de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));
// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));

document.getElementById('contenu').insertAdjacentHTML("afterEnd", '<p>En voice une liste <a href=\'https://fr.wikipedia.org/wiki/Liste_de_langages_de_programmation\'>liste</a> plus complete</p>')