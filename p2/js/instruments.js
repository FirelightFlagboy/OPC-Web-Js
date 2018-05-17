
function infosLiens()
{
	let elem = document.querySelectorAll("a");

	console.log(elem.length);
	console.log(elem[0].getAttribute("href"));
	console.log(elem[elem.length - 1].getAttribute("href"));
}

function possede(key, content)
{
	let elem = document.getElementById(key);
	if (!elem)
	{
		console.error("document have not " + key);
		return (false);
	}
	console.log(elem.classList.contains(content))
	return (true);
}

infosLiens()

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur