let search = document.getElementById('search');
let search_res = document.getElementById('search_res');

function tooMuchCall(cool_down){
	// remove all child of div
	while (search_res.firstChild)
		search_res.remove(search_res.firstChild);
	// create element
	let h1 = document.createElement('h1');
	let p = document.createElement('p');
	// add text to element
	h1.textContent = 'can\'t retreive info from api : too much call';
	p.textContent = 'need to wait ' + cool_down + ' sec';
	// add element
	search_res.appendChild(h1);
	search_res.appendChild(p);
}

function getUserInfo(username){
	let url = 'https://api.github.com/users/' + username;
	ajaxGet(url, (rep) => {
		rep = JSON.parse(rep);
		console.log(rep);
		// remove all child
		while (search_res.firstChild)
			search_res.removeChild(search_res.firstChild);
		// create element
		let h1 = document.createElement('h1');
		let profil = document.createElement('img');
		let name = document.createElement('p');
		let blog = document.createElement('a');

		// add info to element
		h1.textContent = rep.login;
		profil.src = rep.avatar_url;
		name.textContent = rep.name;
		blog.href = rep.blog;
		blog.textContent = rep.blog;

		// append element
		search_res.appendChild(h1);
		search_res.appendChild(profil);
		search_res.appendChild(name);
		search_res.appendChild(blog);
	});
}


search.addEventListener('submit', (e) => {
	e.preventDefault();
	ajaxGet('https://api.github.com/rate_limit', (rep) => {
		rep = JSON.parse(rep);
		if (rep['resources']['core']['remaining'] <= 0)
			tooMuchCall(rep['resources']['core']['reset'])
		else
			getUserInfo(search.username.value);
	});
});
