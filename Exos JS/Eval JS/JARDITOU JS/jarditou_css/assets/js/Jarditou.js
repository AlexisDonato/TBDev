



// let a =  document.getElementsByTagName("aside");
// for (i=0; i<a.length; i++)
// {
//     a[i].style = "flex: 1; align-content: flex-start; display: inline-block;";
// }


// let a2 =  document.getElementsByTagName("aside2");
// for (i=0; i<a2.length; i++)
// {
//     a2[i].style = "flex: 1; align-content: flex-start;";
// }    

// let a3 =  document.getElementsByClassName("ast");
// for (i=0; i<a3.length; i++)
// {
// a3[i].style = "font-size: 1rem; font-weight: bold; color: #FF6666;";
// }    


// let l =  document.getElementsByTagName("label");
// for (i=0; i<l.length; i++)
// {
//     l[i].style = "font-size: 1em; font-weight: bold; vertical-align: middle;";
// }


// document.getElementsByClassName("row")[0].style = "display: flex;"; 
// document.getElementsByClassName("boutons")[0].style = "text-align: center;";

// document.getElementsByTagName("body")[0].style = "background-color: lightBlue;";
// document.getElementsByTagName("legend")[0].style = "font-size: 2rem; font-weight: bold;";
// document.getElementsByTagName("legend2")[0].style = "font-size: 1.5rem; font-weight: bold; color: red;";


let suj = document.getElementById("sujet");
suj.addEventListener("click", event =>
{
    document.getElementsByClassName("sujet")[0].style = "display: none;";
})    


function checkForm(event) 
    { 
            let nom = document.getElementById("nom");
            let missNom = document.getElementById('missNom');
            let nomRE = new RegExp(/^[A-Za-z]+$/);

            let pre = document.getElementById("prenom");
            let missPre = document.getElementById("missPre");
            let preRE = new RegExp(/^[A-Za-z]+([-][A-Za-z]+)?$/);

            let cp = document.getElementById("cp");
            let missCp = document.getElementById("missCp");
            let cpRE = new RegExp(/^[0-9]{5}$/);

            let email = document.getElementById("email");
            let missEmail = document.getElementById("missEmail");
            let emailRE = new RegExp(/^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/);



        if (nom.validity.valueMissing)
        {
            event.preventDefault();
            alert("Veuillez renseigner le nom s.v.p. !");
            missNom.textContent = 'Nom manquant';
            missNom.style.color = 'red';
            
        }

        else if (pre.validity.valueMissing)
        {
            event.preventDefault();
            alert("Veuillez renseigner le prénom s.v.p. !");
            missPre.textContent = 'Prénom manquant';
            missPre.style.color = 'red';
         
        }

        else if (cp.validity.valueMissing)
        {
            event.preventDefault();
            alert("Veuillez renseigner le code postal s.v.p. !");
            missCp.textContent = 'Code postal manquant';
            missCp.style.color = 'red';
           
        }

        else if (!nomRE.test(nom.value))
        {
            event.preventDefault();
            alert("Nom invalide !");
            missNom.textContent = 'Nom invalide';
            missNom.style.color = 'orange';
          
        }

        else if (!preRE.test(pre.value))
        {
            event.preventDefault();
            alert("Prénom invalide !");
            missPre.textContent = 'Prénom invalide';
            missPre.style.color = 'orange';
         
        }

        else if (!cpRE.test(cp.value))
        {
            event.preventDefault();
            alert("Entrez un code postal valide s.v.p. (sur 5 chiffres) !");
            missCp.textContent = 'Code postal invalide';
            missCp.style.color = 'orange';
         
        }

        else if (!emailRE.test(email.value))
        {
            event.preventDefault();
            alert("Veuillez renseigner une adresse mail valide s.v.p. !");
            missEmail.textContent = 'Email invalide';
            missEmail.style.color = 'orange';
        }

    }

document.getElementById("submit").addEventListener("click", checkForm);



