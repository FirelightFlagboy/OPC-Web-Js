let count = 0;
let countBtn = document.getElementById("clic");
let stopBtn = document.getElementById("desactiver");
let spanCount = document.getElementById("compteurClics");

function click(e)
{
	count++;
	spanCount.textContent = count;
}
countBtn.addEventListener('click', click);

stopBtn.addEventListener('click', function (e){
	countBtn.removeEventListener('click', click);
	this.removeEventListener('click', arguments.callee);
});
