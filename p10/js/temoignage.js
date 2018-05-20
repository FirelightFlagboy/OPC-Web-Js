let form = document.querySelector('form');

form.addEventListener('submit', (e) => {

	let reply = {
		pseudo: form.name.value,
		evaluation: Number(form.noice.value),
		message: form.content.value,
	};

	console.log(reply);

	ajaxPost('https://oc-jswebsrv.herokuapp.com/api/temoignage', reply, (e) => {
		alert('le temoignage a bien ete envoyer');
	}, true);
	form.reset();
	e.preventDefault();
});
