function newBox(link)
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
    // section
    section.style.padding = "10px";
    section.style.margin = "10px";
    section.style.backgroundColor = "#fff";
    // titre
    title.style.color = "#428bca";
    title.style.display = "inline";
    title.style.marginRight = "10px";
    // lien du titre
    titleLink.style.textDecoration = "none";
    // lien a coter
    linkS.style.textDecoration = "none";
    linkS.style.color = "black";

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
    return (section);
}

let div = document.getElementById("contenu");

let btnAdd = document.getElementById("add");
let formAdd = document.getElementById("addLink");
let log = document.getElementById("log");

log.style.display = "none";
log.style.backgroundColor = "#fff";
log.style.color = "#428bca";
log.style.fontSize = "2em";
log.style.padding = "20px";

btnAdd.addEventListener('click', function (){
    btnAdd.style.display = "none"; // rend le boutton invisible
    formAdd.style.display = "block"; // rend le formulaire visible
});

formAdd.addEventListener('submit', function (e)
{
    let reg = /http(s)?\:\/\//;
    let url = formAdd.elements.url.value;

    // verifie si l'url commence par http:// ou https://
    if (reg.test(url) == false)
    {
        url = "http://" + url;
    }
    // creer un nouvel obj link
    let newLink = {
        titre: formAdd.elements.title.value,
        url: url,
        auteur: formAdd.elements.name.value
    };
    ajaxPost('https://oc-jswebsrv.herokuapp.com/api/lien', newLink, (e) => {
        // creer le nouvel box
        let box = newBox(newLink);
        div.insertBefore(box, div.firstChild);

        // inverse les display
        btnAdd.style.display = "block";
        formAdd.style.display = "none";

        // affiche le message que l'ajout a bien etait effectuer
        log.textContent = "Le lien \"" + newLink.titre + "\" a bien etait ajouter";
        log.style.display = "block";

        // permet au message de disparaitre apres 2 sec
        setTimeout(() => {
            log.textContent = "";
            log.style.display = "none";
        }, 2000);
    }, true);

    formAdd.reset()
    // empeche le formulaire d'actualiser la page
    e.preventDefault();
});

ajaxGet('https://oc-jswebsrv.herokuapp.com/api/liens', (rep) => {
    rep = JSON.parse(rep);
    for (let i = 0; i < rep.length; i++)
    {
        let box = newBox(rep[i]);
        div.appendChild(box);
    }
});
