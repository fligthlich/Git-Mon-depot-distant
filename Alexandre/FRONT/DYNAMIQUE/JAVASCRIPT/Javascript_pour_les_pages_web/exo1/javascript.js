// console.log("La 2nde zone de texte a pour nom : ");
// console.log(document.forms['form1'].elements[1].name);
// console.log("La 1ère zone de texte a pour valeur : '");
// console.log(document.forms['form1'].elements['nom'].value);
// console.log("Le bouton Submit a pour identifiant unique : ");
// console.log(document.getElementById('idSubForm1').id);
// console.log("Le bouton Submit a pour valeur : ");
// console.log(document.getElementsByName('subForm1')[0].value);


//console.log(document.getElementById('idDiv').innerHTML = "<h1 style= \" color:red\">BIENVENUE SUR JS</h3>");

// console.log(document.getElementById('txtBox').value = 40);
// console.log(document.forms['form1'].elements['age'].value);



// function testerRadio() 
// {
//     var radio = document.getElementsByName("btnRadChoix");
//     console.log(radio.length);
//     for (var i=0; i<radio.length;i++) 
//     {
//         if (radio[i].checked) 
//         {
//             document.getElementById("txtBox1").value = radio[i].value;
//         }
//     }
// }

// function Timer() {
//     var dt=new Date()
//     document.getElementById("horloge").innerHTML=dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
//     setTimeout("Timer()",900);
//       console.log("Exécution de Timer()");
//     }
//    Timer();

//    var version = navigator.appVersion;
//    console.log("=============================================================")
//    console.log("La version de votre navigateur est =============>" + version);
//    console.log("=============================================================")
// // console.log("Le code name de votre browser est :"    + navigator.appCodeName);
// // console.log("Le nom ou la marque du browser est :"   + navigator.appName); 
// // console.log("Les informations sur la version sont :" + version); 
// // console.log("Le browser a comme user-agent :"        + navigator.userAgent);
// // console.log("");

// if (version.indexOf('Win') > -1) 
// { 
//     console.log("<br />Vous etes sous l'environnement Windows");
//     console.log("<br />");
// }

// if (navigator.userAgent.indexOf('Firefox') > -1) 
// { 
// console.log("Vous utilisez un navigateur FireFox");
// } 
// else if (version.indexOf('Chrome') > -1) 
// { 
//     console.log("Vous utilisez un navigateur Chrome");
// } 
// else if (version.indexOf('MSIE') > -1) 
// { 
//     console.log("Vous utilisez un navigateur Microsoft Internet Explorer");
// } 
// else 
// {
//     console.log("Vous utilisez un navigateur inconnu");
// }

// var myDate1 = new Date() ;  // Date du jour
// var myDate2 = new Date(3600*24*365*40) ;    // Date depuis le 1er janvier 1970
// var myDate3 = new Date(2012, 9, 19) ;
// var myDate4 = new Date(2012, 9, 19, 10, 33, 12);
// var myDate5 = new Date("Jan 1, 2000 00:00:00");

// console.log('new Date() : ' + myDate1.toLocaleString()); 
// console.log('new Date(3600*24*365*40) : ' + myDate2.toLocaleString());
// console.log('new Date(2012, 9, 19) : ' + myDate3.toLocaleString());
// console.log('new Date(2012, 9, 19, 10, 33, 12) : ' + myDate4.toLocaleString());
// console.log('new Date("Jan 1, 2000 00:00:00") : ' + myDate5.toLocaleString());
// console.log("");
// var annee = 1900 + myDate1.getYear();
// var mois  = myDate1.getMonth() + 1;
// var jour  = myDate1.getDate();
// console.log('date du jour : ' + jour + "/" + mois + "/" + annee);


let loop = true;
let valeur_saissie = Array();
let nbSaisie = 0;

while (loop == true) {
    nbInt = parseInt(window.prompt("Veuillez entrer un Entier:"));
    if (nbInt != 0 )
    {
        valeur_saissie.push(nbInt);

    }
    else
    {
        loop = false;
    }
    nbSaisie += 1 ;
}

console.log(valeur_saissie);
console.log("Vous avez entrer " + valeur_saissie.length + " valeur .");
document.getElementById('nbValeur').innerHTML = "Vous avez entrer " + valeur_saissie.length + " valeurs";
console.log("Les valeur saisie sont " + valeur_saissie.join("=>"));
document.getElementById('valeurSaissie').innerHTML = "Les valeurs saisies sont " + valeur_saissie.join("=>");

function somme(tab){
    let resultat = 0;
    for (let i = 0 ; i < tab.length ; i++){
        resultat = resultat + tab[i];
    }
    return resultat;
}

console.log( "La somme total du tableau est de => " + somme(valeur_saissie));
document.getElementById('somme').innerHTML = "La somme total du tableau est de => " + somme(valeur_saissie);
console.log("La moyenne du tableau est de " + somme(valeur_saissie) / valeur_saissie.length)
document.getElementById('moyenne').innerHTML = "La moyenne du tableau est de " + somme(valeur_saissie) / valeur_saissie.length;









































