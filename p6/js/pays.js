// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

let pays = document.getElementById("pays");
let sugg = document.getElementById("suggestions");

pays.addEventListener('input', function (e)
{
	let stringPays = e.target.value.toLowerCase();

	// remove all chidl form div
	while (sugg.firstChild){
		sugg.removeChild(sugg.firstChild);
	}
	// for each pays check if string input match with part of pays's name
	for (let i = 0; i < listePays.length; i++)
	{
		let stringSugg = listePays[i].toLowerCase();
		// if string match at index 0
		if (stringSugg.indexOf(stringPays) == 0)
		{
			// create a elem div
			let div = document.createElement('div');
			// add class suggestion
			div.classList.add('suggestion');
			// add name of pays
			div.textContent = listePays[i];

			// add event listener
			div.addEventListener('click', function (e){
				// set input value
				pays.value = e.target.textContent;

				// remove all sugg
				while (sugg.firstChild){
					sugg.removeChild(sugg.firstChild);
				}
			});
			sugg.appendChild(div);
		}
	}
});