// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

let select = document.getElementById("maison");
let perso = document.getElementById("persos");

for (let i = 0; i < maisons.length; i++)
{
	let opt = document.createElement("option");
	opt.value = maisons[i].code;
	opt.textContent = maisons[i].nom;

	select.appendChild(opt);
}

select.addEventListener('change', function (e){
	let personnages = getPersonnages(e.target.value);

	while (perso.firstChild){
		perso.removeChild(perso.firstChild);
	}
	for (let i = 0; i < personnages.length; i++)
	{
		let li = document.createElement('li');
		li.textContent = personnages[i];
		perso.appendChild(li);
	}
});