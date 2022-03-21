

//Commentaire

/* Ceci est un bloc de commentaires (plusieurs lignes) 
console.log("Ne s'affiche pas car en commentaires");
console.log("Ne s'affiche pas non plus");
*/	

/* 
DECLARATION ET AFFECTATION
var i;
var i, j, k;
var myVar = 123; // entier
var myVar = "Hello l'AFPA"; // chaîne
var bVar = TRUE; // booléen
let myVar; // portée : bloc courant

TABLEAUX
var tableau = [1, 2, 3]; // tableau de valeurs numériques
var tableau = ["Pierre", "Paul", "Jacques"]; // tableau de chaînes

OBJETS NATIFS
window.status = "Change le message dans la barre de statut)";
var date1 = new Date('March 27, 2018 09:56:07'); // Calcul sur dates
var nombre = new Math.pow(2, 2); // Fonctions mathématiques

FONCTIONS DE BASE
alert();
console.log();
document.write(); // A oublier
confirm(); // question
prompt(); // saisir un texte 	

FONCTIONS UTILES
document.getElementById('unDiv'); // ou ByName, ByClassName
document.querySelector('#unDiv');  // attention au #
isNaN("Une chaîne"); // => retourne FALSE
console.log(typeof 42); // affiche "number"
console.log(typeof 'afpa'); // affiche : "string"	

FONCTIONS UTILISATEURS
function ttcPrice(price, tva)
{
   ttcprice = price*tva;
   return ttcprice;                            							
}		

EVENEMENT
<a href="page.html" onclick="showmessage();">

            UTILISATIONS AVANCÉES
            Ajax (objet XmlHttpRequest) : base de données
            Frameworks : JQuery, Vue, Angular, React, Meteor etc.
            Application côté serveur : NodeJS

            OUTILS
            Console : F12 ou Ctrl + Shift + J
            Validateur de code : JSLint
     
*/

/*
LIRE
var nom;
nom = prompt("Entrez votre nom");

var a;
a = parseInt(prompt("Entrez un nombre"));

ECRIRE
var message = "Bonjour toi";
alert(message);

CONDITIONS
if (a>12) {
    alert("C'est beaucoup");
} 
else if (a<0) {
    alert("C'est très peu");
}
else {
    alert("C'est moyen");
}
(ATTENTION: pour comparer si deux valeurs sont égales, vous devez utiliser ==)

*/


var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);

function clickbtn1(){

    alert("Vous avez cliqué sur :\n Alert()");
}

var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2(){

    var prenom = prompt("Veuillez saisir votre prénom");
    if(prenom==null){
    alert("Vous avez cliqué sur Annuler");
    return;
    }

    var age= parseInt(prompt("Veuillez saisir votre age"));
    if(isNaN(age)){
    alert("Vous n'avez pas saisi un age correct !\nVeuillez recommencer.");
    return;
    }  

    alert("Voici ce que vous avez saisi :\n\nVotre prénom : "+prenom+"\nVotre age : " +age);
}

var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3(){

    var reponse = confirm("Veuillez cliquer sur OK ou bien Annuler");
    if (reponse == true) {
        alert("Vous avez cliqué sur OK");
    } 
    else {
        alert("Vous avez cliqué sur Annuler");
    }

}

var bouton4= document.getElementById("Id_btn4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4(){

    var prenom = prompt("Veuillez saisir votre prénom");
    if(prenom==null){
        alert("Vous avez cliqué sur Annuler");
    }
    else{
        console.log("Voici le prénom que vous avez saisi: "+prenom);
        alert("Vérifiez en Console (F12), ce que vous venez de saisir...");
    }
}





