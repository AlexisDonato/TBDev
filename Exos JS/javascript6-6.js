

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


// var btn = document.createElement("BUTTON");        // Créer un élément <button>
// var t = document.createTextNode("CLICK ME");       // Créer un noeud textuel
// btn.appendChild(t);                                // Ajouter le texte au bouton
// document.body.appendChild(btn);                    // Ajoute la balise <button> à la balise <body>
// button.addEventListener('click', event => {}       // Ajoute le dynamisme

// document.body.removeChild(btn); ***** Pour retirer le bouton après clic *********  

    //***** Ajouter du style aux boutons ********* */ 
// btn0.style.position = "absolute";
// btn0.style.top = "0px";
// btn0.style.left = "500px";
// btn0.style.width = "150px";
// btn0.style.backgroundColor = "LightRed";
// btn0.style.borderBlockColor = "Red";
// btn0.style.color = "DarkRed";









let a =  document.getElementsByTagName("aside");
    for (i=0; i<a.length; i++)
    {
        a[i].style = "flex: 1; align-content: flex-start; display: inline-block;";
    }


let a2 =  document.getElementsByTagName("aside2");
    for (i=0; i<a2.length; i++)
    {
        a2[i].style = "flex: 1; align-content: flex-start;";
    }    

let a3 =  document.getElementsByClassName("ast");
for (i=0; i<a3.length; i++)
{
    a3[i].style = "font-size: 1rem; font-weight: bold; color: #FF6666;";
}    

    
let l =  document.getElementsByTagName("label");
    for (i=0; i<l.length; i++)
    {
        l[i].style = "font-size: 1em; font-weight: bold; vertical-align: middle;";
    }


    document.getElementsByClassName("row")[0].style = "display: flex;"; 
    document.getElementsByClassName("boutons")[0].style = "text-align: center;";

    document.getElementsByTagName("legend")[0].style = "font-size: 2rem; font-weight: bold;";
    document.getElementsByTagName("legend2")[0].style = "font-size: 1.5rem; font-weight: bold; color: red;";
    

    document.getElementById("environnement").addEventListener("click", event =>
    {
        document.getElementsByClassName("choix")[0].style = "display: none;";
    })    


function checkForm(event) 
        { 
                let soc = document.getElementById("societe");
                let per = document.getElementById("personne");
                let cp = document.getElementById("cp");
                let vil = document.getElementById("ville");
                let mail = document.getElementById("email");
                let tel = document.getElementById("tel");

            if (soc.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner le nom de la société s.v.p. !");
                return false; // n’envoie pas le formulaire
            }

            else if (per.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner le nom de la personne à contacter s.v.p. !");
                return false; // n’envoie pas le formulaire
            }

            else if (vil.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner le nom de la ville s.v.p. !");
                return false; // n’envoie pas le formulaire
            }

            else if (!soc.match(/^[A-Za-z]+$/))
            {
                event.preventDefault();
                alert("Nom de société invalide !");
                return false;
            }

            else if (!per.match(/^[A-Za-z]+$/))
            {
                event.preventDefault();
                alert("Nom de personne invalide !");
                return false;
            }

            else if (!vil.match(/^[A-Za-z]+$/))
            {
                event.preventDefault();
                alert("Nom de ville invalide !");
                return false;
            }

            else if (cp.length<5)
            {
                event.preventDefault();
                alert("Entrez le code postal sur 5 chiffres s.v.p. !");
                return false;
            }

            else if (!cp.match(/^[0-9]*$/))
            {
                event.preventDefault();
                alert("Entrez un code postal valide s.v.p. !");
                return false;
            }

            else if (!mail.match(/^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/))
            {
                event.preventDefault();
                alert("Veuillez renseigner une adresse mail valide s.v.p. !");
                return false;
            }

            else if (!tel.match("^0[1-9]([-. ]?[0-9]{2}){4}$"))
            {
                event.preventDefault();
                alert("Veuillez renseigner un numéro de téléphone valide s.v.p. !");
                return false;
            }

            else
            {
                return true;
            }
        }

document.getElementById("submit").addEventListener("click", checkForm);



