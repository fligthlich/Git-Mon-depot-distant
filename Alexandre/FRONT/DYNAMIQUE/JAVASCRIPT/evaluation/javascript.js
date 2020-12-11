/*******************************************************************EXERCICE 1***************************************************/

// Lancement du programme au clic du bouton 1
let bouton1 = document.getElementById('btn1');
bouton1.addEventListener('click',function(event){
    // Déclaration des variables 
    let loop = true;
    let ageMineur = Array();
    let ageMajor = Array();
    let ageAdulte = Array();
    let ageSenior;
    let exo1 = document.getElementById('exo1');
    while (loop == true) {
        let age = parseInt(window.prompt("Donnez un age"));
        if (age < 20) {
            
            ageMineur.push(age)
        }
        else if (age >= 20 && age <=40) {
           
             ageMajor.push(age)
        }
        else if (age > 40 ) {
            if (age == 100) {
                ageSenior = age;
                loop = false;
            }
            else{
             ageAdulte.push(age)
            }
           
        }
     }
     console.log("les ages saisie inférieur a 20 ans sont : " + ageMineur + "\nLes ages compris entre 20 et 40 ans sont : " + ageMajor +"\nLes ages supérieur à 40 sont : " + ageAdulte + "\nLes ages égal à 100 ans sont :" + ageSenior)
     exo1.innerText = "les ages saisie inférieur a 20 ans sont : " + ageMineur + "\nLes ages compris entre 20 et 40 ans sont : " + ageMajor +"\nLes ages supérieur à 40 sont : " + ageAdulte + "\nLes ages égal à 100 ans sont :" + ageSenior
});

/*******************************************************************EXERCICE 2***********************************************************/
// Déclaration de la fonction 
function tableDeMultiplication(nombre,affichage){
var message="";

    for (let i = 0 ; i <=10 ; i++){
        console.log(i + " x " + nombre + " = " + i*nombre)

        message=message +i + " X " + nombre + " = " + i*nombre+"<br>";
        
    }

    affichage.innerHTML =message;
}

// Lancement du programme au bouton 2 
let bouton2 = document.getElementById('btn2');
bouton2.addEventListener('click', function(event){
    let nombre = parseInt(window.prompt("Choisisez un nombre à multiplier : "));
    let exo2 = document.getElementById('exo2');
    tableDeMultiplication(nombre,exo2);
});

/**********************************************************************EXERCICE 3 ***************************************************************/
// Déclaration et affectation tableau 
let tab = ["Audrey", "Aurelien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// Déclaraton bouton3
let bouton3 = document.getElementById('btn3');
// Lancement du programme au bouton 3
bouton3.addEventListener('click', function(event){
    let recherche = window.prompt("Indiquez un prénom à supprimer");
    let exo3 = document.getElementById('exo3');
    for (nom of tab){
        if (nom.toUpperCase() == recherche.toUpperCase()) {
            console.log("Le prénom " + nom + " a été trouver dans le tableau");
            let index = tab.indexOf(nom);
            tab.splice(index,1);
            tab.push("[vide]")
            console.log(tab)
            exo3.innerHTML = "L'élément du tableau a bien été retirer<br>" + tab;
        }
    }
})

/***********************************************************************EXERCICE 4*******************************************************************/
//Déclaration d'une fonction pour la saisie des nombres
function saisie(text){
    let loop = true ;
    let nbInt;
    while (loop == true) {
        nbInt = parseInt(window.prompt(text));
        if (!Number.isInteger(nbInt)) {
            alert("Seul les chiffres sont autrorisé")
        }
        else{
            loop = false;
        }
    }
    return nbInt;
}
//Déclaration bouton4
let bouton4 = document.getElementById('btn4');
//Lancement du programme au click du bouton 4
bouton4.addEventListener('click',function(event){
    //Déclaration des variable nécessaire au programme
    let exo4 = document.getElementById('exo4'); 
    let prixUnitaire = saisie("Saisir le prix unitaire:");
    let qteCom = saisie("Saisir la quantité:");
    let total = prixUnitaire * qteCom;
    let remise;
    let calculRem; 
    let fraisPort;
    let totalAchat;
    let msgRemise;
    // si total est supérieur ou égal à 100 et inférieur ou égal à 200 applique une remise de 5%
    if (total >= 100 && total <= 200) {
        remise = 5;
        calculRem = total * remise/100;
        total = total - (total * remise/100);
        msgRemise = "remise " + remise + "%(-" + calculRem + "€) soit " + total;
    }// sinon si total est supérieur à 200 applique une remise de 10%
    else if (total > 200){
        remise = 10;
        calculRem = (total * remise/100);
        total = total - (total * remise/100);
        msgRemise = "remise " + remise + "%(-" + calculRem + "€) soit " + total;
    }
    else{
        remise = 0;
        msgRemise ="remise " + remise + ",";
    }

    if (total > 500) {
        fraisPort = 0;
        totalAchat = total + fraisPort;
        console.log(msgRemise + " et frais de port = " + fraisPort.toFixed(0) + "; a payer:" + totalAchat.toFixed(2));
        exo4.innerText = msgRemise + " et frais de port = " + fraisPort.toFixed(0) + "; a payer:" + totalAchat.toFixed(2);
    }
    else if (total <= 500) {
        fraisPort = total * 2/100

        if (fraisPort <= 6) {
            fraisPort = 6;
            totalAchat = total + fraisPort;
            exo4.innerText =  msgRemise + " frais de port 2% soit " + fraisPort + "€ donc le minimum de 6€ s'applique;à payer : " + total + " + " + fraisPort + " = " + totalAchat.toFixed(2);
            
        }
        else{
            fraisPort = total*2/100;
            totalAchat = total + fraisPort;
            exo4.innerText = msgRemise + " et frais de port 2% (de " + total + "€) soit " + fraisPort.toFixed(2) + ";à payer : " + total.toFixed(2) + " + " + fraisPort.toFixed(2) + " = " + totalAchat.toFixed(2);
        }
    }
})



/***************************************************************EXERCICE 5*******************************************************/
// Déclaration bouton 5

let btn5 = document.getElementById('btn5');

btn5.addEventListener('click',function(event){
    document.location.href = "Exercice5/index.html";
})




 

