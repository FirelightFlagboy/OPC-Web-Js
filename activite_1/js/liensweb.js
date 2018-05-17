/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

function addLink(masterDiv, link)
{
    let section = document.createElement("section"); // creer un element section pour la section
    let title = document.createElement("h2"); // creer un element h2 pour le titre
    let titleLink = document.createElement("a"); // creer un element pour le lien du titre
    let linkS = document.createElement("a"); // creer un element pour le lien a coter
    let para = document.createElement("p"); // creer un element pour le paragraphe

    /*
    ** initialise les elements
    */
    title.textContent = link.titre;
    titleLink.href = link.url;

    linkS.href = link.url;
    linkS.textContent = link.url;

    para.textContent = "Ajouté par : " + link.auteur;

    /*
    ** initialise le Css
    */
    section.style.backgroundColor = "#fff";
    title.style.color = "#428bca";
    title.style.textDecoration = "none";


    /*
    ** Ajoute le fils au parents
    */
    // ajoute le titre au lien principale
    titleLink.appendChild(title);
    // ajoute le titre a la section
    section.appendChild(titleLink);
    // ajoute le 2eme lien a la section
    section.appendChild(linkS);
    // ajoute le paragraphe a le section
    section.appendChild(para);
    // ajoute la section a la div
    masterDiv.appendChild(section);
}

let div = document.getElementById("contenu");

for (let i = 0; i < listeLiens.length; i++)
{
    addLink(div, listeLiens[i]);
}