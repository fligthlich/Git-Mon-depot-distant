
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
let nb_rand = Math.floor(Math.random() * 100 + 1);
console.log(nb_rand);
let value = document.getElementById('nom').value;
let click = 0;
function get_value(params) {
    if (value < nb_rand)
    {
        alert("+")
    }
    else if (value > nb_rand) {
        alert("-")
    } else {
        alert("=")
    }
    click++;
    console.log(click);

}



// let value = document.getElementById('nom').value;

// document.addEventListener("click",function ()
// {
//     alert("Vous avez entrer " + value);  
// });















































