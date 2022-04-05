const tab = ["Audrey","Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];

const saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`);

if(tab.includes(saisie))
{
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	console.log(tab);
}
else
{
  alert("Erreur !!!\nAttention aux accents et majuscules !");
}


console.table(tab);