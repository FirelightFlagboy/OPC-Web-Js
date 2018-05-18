let btnStop = document.getElementById("stop");
let count = document.getElementById("count");
let sw = false;

function timer()
{
	let val = Number(count.textContent);
	count.textContent = val + 1;
}

let intervalId = setInterval(timer, 1000);

btnStop.addEventListener('click', function (e){
	sw = !sw;
	if (sw)
	{
		clearInterval(intervalId);
		btnStop.textContent = "coutinuer";
	}
	else
	{
		intervalId = setInterval(timer, 1000);
		btnStop.textContent = "stop";
	}
});