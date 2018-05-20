let dl = document.querySelector('dl');

document.addEventListener('keyup', (e) => {
	let url = 'https://oc-jswebsrv.herokuapp.com/api/lexique/' + String.fromCharCode(e.keyCode);
	console.log(url);
	ajaxGet(url, (rep) => {
		while (dl.firstChild)
			dl.removeChild(dl.firstChild);
		rep = JSON.parse(rep);
		for (let i = 0; i < rep.length; i++){
			let dd = document.createElement('dd');
			let dt = document.createElement('dt');

			dd.textContent = rep[i].term;
			dt.textContent = rep[i].definition;

			dl.appendChild(dd);
			dl.appendChild(dt);
		}
		if (rep.length == 0)
		{
			let h1 = document.createElement('h1');
			h1.textContent = url + ' word not found';
			dl.appendChild(h1);
		}
	});
});
