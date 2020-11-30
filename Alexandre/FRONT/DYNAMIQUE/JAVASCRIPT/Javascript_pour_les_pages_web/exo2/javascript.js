// alert("<div>baliseHTML</div>");
// console.log("Ah que Coucou !");
// document.write("Coucou beuh !");
// for(let i = 0 ; i < 5 ; i++)
// {
//     document.write("<h2>Mon premier script</h2>");
// }



// let element = document.getElementById("button1");

// element.addEventListener("click",function()
// {
//     alert("OK");
// });

// document.querySelector('#button2').onclick = function() 
// {
//     alert('Vous avez cliqué !');
// }  

// Génération d'un nombre Aléatoire
let nb_rand = Math.floor(Math.random() * 100 + 1);
console.log(nb_rand);


// Javascript intrusif (on le met dans le code html avec onclick="verif()")
function verif(){
    
    let value = document.getElementById('nombre').value;
    let label = document.getElementById('label1');

    if (value < nb_rand) 
    {
        label.innerHTML = "Trop petit";
    } 
    else if (value > nb_rand)
    {
        label.innerHTML = "Trop grand";
    } 
    else
    {
        label.innerHTML = "C'est gagné";
    }
}

// Javascript non intrusif (on ne le met pas dans le code html)
let valeur = document.getElementById('button1');
valeur.addEventListener("click",function(e){
    
    let value = document.getElementById('nombre').value;
    let label = document.getElementById('label1');

    if (value < nb_rand) 
    {
        label.innerHTML = "Trop petit";
    } 
    else if (value > nb_rand)
    {
        label.innerHTML = "Trop grand";
    } 
    else
    {
        label.innerHTML = "C'est gagné";
    }
});











































