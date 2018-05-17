// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

for (let i = 0; i < questions.length; i++)
{
	let h2 = document.createElement('h2');
	let para = document.createElement('p');
	let btn = document.createElement('button');

	h2.textContent = "Question : " + i;
	para.textContent = questions[i].enonce

	btn.id = i;
	btn.textContent = "Afficher la reponse"

	btn.addEventListener('click', function (e){
		alert(questions[i].reponse);
	});

	document.body.appendChild(h2);
	document.body.appendChild(para);
	document.body.appendChild(btn);
}
