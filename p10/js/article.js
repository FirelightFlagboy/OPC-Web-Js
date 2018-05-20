let form = document.querySelector('form');

form.addEventListener('submit', (e) => {

	let article = {
		titre: form.title.value,
		contenu: form.content.value,
	};
	console.log(article);

	ajaxPost('https://oc-jswebsrv.herokuapp.com/article', article,
		function (reponse) {
			alert("l'article a bien ete envoyer au serveur !");
		},
		true
	);

	e.preventDefault();
	form.reset();
});
