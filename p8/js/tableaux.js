let table = document.getElementById('table');

ajaxGet("http://127.0.0.1/javascript-web-srv/data/tableaux.json", (reply) => {
	// parse json format
	let rtable = JSON.parse(reply);
	// get all key form first element
	let keys = Object.keys(rtable[0]);
	let tr = document.createElement('tr');
	// add each key to table
	for (let i = 0; i < keys.length; i++) {
		let th = document.createElement('th');
		th.textContent = keys[i];
		tr.appendChild(th);
	}
	table.appendChild(tr);
	// add each element to table
	for (let i = 0; i < rtable.length; i++) {
		tr = document.createElement('tr');
		for (let j = 0; j < keys.length; j++){
			let td = document.createElement('td');
			td.textContent = rtable[i][keys[j]];
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
});
