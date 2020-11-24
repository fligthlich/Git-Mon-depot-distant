/*
var name = "alex";
var number = 40;
var float = 3.14;
var bool = true;
var tab = new Array("nom", 14)
console.log(typeof name);
console.log(typeof number);
console.log(typeof float);
console.log(typeof bool);
console.log(typeof tab);

document.write(name);
document.write(" c'est votre nom.<br>Et votre age "+ number +" Ans.");
//caste pour avoir un nombre 
var question = parseInt(window.prompt("Donner moi votre age"));
*/
/*var nom = window.prompt("Entrer votre nom ?");
var prenom = window.prompt("Entrer votre prénom ?");
window.alert("Etes-vous un homme ?");

window.confirm("Bonjour Monsieur " + nom + " " + prenom + "\nBienvenue sur notre site web!")
*/
/*
var a = "100";
var b = 100;
var c = 1.00;
var d = true;

window.confirm("Ceci est une chaîne de caractère:" +" " + a);
b -= 1;
console.log(b)
c += a;
console.log(c)
d = true;
*/
// Exercices conditions
// Exercices 1
/*
var choiceNumber = window.prompt("Choisissez un nombre ?");
resultat = choiceNumber % 2;
console.log(resultat);
(choiceNumber%2 == 0) ? window.confirm("Paire"):window.confirm("Impaire");
if (choiceNumber%2 == 0) {
    console.log("paire");    
}
else
{
    console.log("impaire");
}
*/
// Exercices 2
/*
var age = window.prompt("Quelle est votre age ?");

if (age < 18) 
{
    window.confirm("Vous étes Mineur!!!");    
}
else
{
    window.confirm("Vous étes Majeur.");
}
*/
// Exercices 3
/*
var nb1 = parseInt(window.prompt("Choisissez un nombre:\nNombre1"));
var nb2 = parseInt(window.prompt("Choisissez un nombre:\nNombre2"));
var operator = window.prompt("Choisissez un opérateur:(+,-,/,*)");

switch (operator) {
    case "+":
        var result = window.confirm(nb1 + nb2);
    break;
    case "-":
        var result = window.confirm(nb1 - nb2);
    break;
        case "/":
        if (nb2 == 0) {
            window.confirm("On ne peux pas diviser par 0");
        }
        else
        {
            var result = window.confirm(nb1/nb2);
        }
    break;
    case "*":
        var result = window.confirm(nb1 * nb2);
        break;
    default:
        window.confirm("Vous n'avez pas sélectionnez le bon opérateur !!!!");
        break;
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}*/
// lname = window.prompt("Saisissez-votre prénom N°" + counter + "\nou Clic sur Annuler pour arrêter la saisie.");
/***********************************Boucles******************************************/
/***********************************Exercices 1**************************************/
/*
let lname = "";
counter = 1;
var save_lname = [];
do {
    lname = window.prompt("Saisissez-votre prénom N°" + counter + "\nou Clic sur Annuler pour arrêter la saisie.");
    if (lname != "" && lname != null) {
        save_lname.push(lname);
        counter += 1;
    }
    else
    {
        counter -= 1;
    }
} while (lname != "");

console.log(save_lname)
console.log("Il y a " + save_lname.length + " prénoms");
for (let i in save_lname)
{
    console.log(save_lname[i]);
}
*/
/* Exercice 2*/
/*
let nb_rand = Math.floor(Math.random() * 100 + 1);
i = 0;
console.log(nb_rand);

while (i < nb_rand) {
    document.write(i + "<br>");
    i += 1;
}
*/
/******************************************* Exercices 3**************************************************/
/*
let loop = true;
let somme = 0;
let moyenne = 0;
let nbSaisie = 1;

while (loop != false) {
    nbInt = parseInt(window.prompt("Veuillez entrer un Entier:"));
    if (nbInt != 0)
    {
        somme = somme + nbInt;
        console.log("La somme des nombres est de " + somme);
        moyenne = somme / nbSaisie;
        console.log("La moyenne des nombres est de " + moyenne);
    }
    else
    {
        loop = false;
    }
    nbSaisie += 1 ;
}
*/
/***********************************************BOUCLES EXERCICES 1******************************/
/*
let loop = true;
let add_name = "";
let counter_lname = 0;

while (loop != false) {
    lname = window.prompt("Donnez votre prénom");
    if (lname != "" && lname != null)
    {
        add_name = add_name + lname + "\n";
        counter_lname += 1;
        
    }
    else{
        break;
    }
    
}

console.log("Vous avez " + counter_lname + " prénom .");
console.log(add_name);
*/
/********************************************BOUCLES EXERCICES 4***************************************/
/*
let nb_N = parseInt(window.prompt("Choisir un nombre N:"));
let nb_X = parseInt(window.prompt("choisir un nombre X:"));

for (i = 1; i <= nb_N; i++) // i = nombre pour la comparaison à nb_N
{
    let result = i * nb_X ; // On remplace par i le multiple pour atteidre la valeur de nb_N
    console.log( i + " X " + nb_X + " = " + result); // A chaque tour de boucle i s'incrémente de 1 jusqu'à la valeur choisi
}
*/
/***********************************************BOUCLE EXERCICES 5******************************************/
/*
let chosenWord = window.prompt("Choisissez un mot:");
let nb_vowels = 0;
let nb_consonant = 0;

for (i = 0; i <= chosenWord.length - 1; i++)
{
    let letter = chosenWord.substr(i,1);
    if (letter.toLowerCase() == "a" || letter.toLowerCase() == "e" || letter.toLowerCase() == "i" || letter.toLowerCase() == "o" || letter.toLowerCase() == "u" || letter.toLowerCase() == "y") 
    {
      console.log(letter + " Voyelle");
      nb_vowels += 1;
      
    }

    else
    {
        console.log(letter + " Consonne");
        nb_consonant += 1 ;
    }
}
let wordVowels = "";
(nb_vowels > 1) ? wordVowels = " voyelles" : wordVowels = " voyelle"; // condition pour vérifier si le nombre de voyelles et sup à 1 on met un s à voyelle.
let wordConsonan= "";
(nb_consonant > 1) ? wordConsonan = " consonnes" : wordConsonan = " consonne"; // condition pour vérifier si le nombre de consonne et sup à 1 on met un s à consonne.

console.log("Dans le mot " + chosenWord.toLocaleUpperCase() + " vous avez " + nb_vowels + wordVowels + " et " + nb_consonant +  wordConsonan + ".")
*/

//************************************************FONCTION***********************************************/
/**********************************************EXERCICE1*************************************************/
/*
function produit(x,y)
{
     document.write("<p>le produit de " + x  +" x " + y + " est égale à " + x * y +"</p>");
}

function afficheImage(image)
{
    document.write("<img src=\"" + image + " \" alt= \"\" ><br>" )
}

afficheImage("img/logo_windows.jpg");
let nombre1 = parseInt(window.prompt("Entrer un nombre :"));
let nombre2 = parseInt(window.prompt("Entrer un multiplicateur :"));
produit(nombre1,nombre2);


/*****************************************************EXERCICE2*******************************************/

function strtok(str1,str2,n)
{
    reponse = str1.split(str2,n);
    console.log(reponse.length);
    if (str1,str2,n == undefined) {
        console.log("Vous n'avez pas définit 1 des 3 arguments demandé...")
    }
    else
    {
        if (n > reponse.length) 
        {
            console.log("Vous avez dépasser l'index de la chaîne de caractère...");
        }
        else
        {
            console.log(reponse[n-1]);
        }
    }
}

str1 = "robert;dupond;amiens;80000";

strtok(str1,";",2);

//***********************************************FIN EXERCICES FONCTIONS *****************************************************/



















































































