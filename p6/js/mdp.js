let infoMdp = document.getElementById("infoMdp");
let mdp1 = document.getElementById("mdp1");
let mdp2 = document.getElementById("mdp2");

function _handlerMdp(e)
{
	let reg = /[0-9]/;
	let msg = "";

	if (mdp1.length < 6)
	{
		msg = "Erreur : la longuer minimal"
		+ " du mot de passe et de 6 caractéres<br/>";
	}
	if (reg.test(mdp1.value) == false)
	{
		msg += "Erreur : il manque un chiffre dans le mdp<br/>";
	}
	if (mdp2.value != mdp1.value)
	{
		msg += "Erreur : les mots de passe ne coresponde pas<br/>";
	}
	infoMdp.innerHTML = msg;
}

mdp1.addEventListener('input', _handlerMdp);
mdp2.addEventListener('input', _handlerMdp);