// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"
let div = document.getElementById("contenu");
let dl = document.createElement("dl");
div.appendChild(dl);

for (let i = 0; i < mots.length; i++)
{
	var dd = document.createElement("dd");
	var dt = document.createElement("dt");
	var strong = document.createElement("strong");
	strong.textContent = mots[i].terme;
	dd.textContent += mots[i].definition;
	dt.appendChild(strong);
	dl.appendChild(dt);
	dl.appendChild(dd);
}