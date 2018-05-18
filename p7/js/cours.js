var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
	var compteur = Number(compteurElt.textContent);
	if (compteur > 1)
		compteurElt.textContent = compteur - 1;
	else
	{
		clearInterval(intervalId);

		let title = document.getElementById("titre");
		title.textContent = "Booum !!";

		setTimeout(() => {
			title.textContent = "Tout cassé :(";
		}, 2000);
	}
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
let intervalId = setInterval(diminuerCompteur, 1000);

var bloc = document.getElementById("bloc");
var cadre = document.getElementById("cadre");
var vitesse = 7; // Valeur du déplacement en pixels
// Conversion en nombre du diamètre du bloc (valeur de la forme "XXpx")
var largeurBloc = parseFloat(getComputedStyle(bloc).width);
var animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre (valeur de la forme "XXpx")
    var xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc + vitesse >= 0 && xBloc + largeurBloc + vitesse <= xMax) { // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
    } else {
		// Annulation de l'animation
		vitesse *= -1;
        // cancelAnimationFrame(animationId);
    }
	animationId = requestAnimationFrame(deplacerBloc);
}

// animationId = requestAnimationFrame(deplacerBloc); // Début de l'animation
