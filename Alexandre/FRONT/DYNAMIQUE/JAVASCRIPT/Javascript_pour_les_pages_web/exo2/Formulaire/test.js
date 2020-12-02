let form = document.querySelector('#form1');
let em = document.getElementsByTagName('em');
console.log(em[1]);
let regex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g');


form.addEventListener('submit',function(event){
    let msg = document.getElementById('message');
    let joker = document.querySelector('.warning');
    let societe = document.getElementById('societe').value;
    let contact = document.getElementById('contact').value;
    let codePostal = document.getElementById('codePostal').value;
    let ville = document.getElementById('ville').value;
    let email = document.getElementById('email');
    let testEmail = regex.test(email.value)
    let liste = document.getElementById('projet');

    if (societe == "") {
        alert("Vous devez renseigner une société");
        event.preventDefault();
        em[0].innerText = "*";
        em[0].style.color = "red";
        msg.innerText = "* Ces zones sont obligatoires pour envoyer le formulaire.";
        msg.style.color = "red";
    }
    if (contact == "") {
        alert("Entrer le nom de la personne à contacter s.v.p!");
        event.preventDefault();
        em[1].innerText = "*";
        em[1].style.color = "red";
        msg.innerText = "* Ces zones sont obligatoires pour envoyer le formulaire.";
        msg.style.color = "red";  
    }
    if (codePostal < 5) {
        alert("Entrer le code postal sur 5 chiffres");
        event.preventDefault();
        em[2].innerText = "*";
        em[2].style.color = "red";
        msg.innerText = "* Ces zones sont obligatoires pour envoyer le formulaire.";
        msg.style.color = "red";
    }
    if (ville == "") {
        alert("Entrer le code postal sur 5 chiffres");
        event.preventDefault();
        em[3].innerText = "*";
        em[3].style.color = "red";
        msg.innerText = "* Ces zones sont obligatoires pour envoyer le formulaire.";
        msg.style.color = "red";
    }
    if (testEmail == false ) {
        alert("Vous devez renseigner un email valide");
        em[4].innerText = "*";
        em[4].style.color = "red";
        msg.innerText = "* Ces zones sont obligatoires pour envoyer le formulaire.";
        msg.style.color = "red";
    }
    if (liste == "Choisissez") {
        event.preventDefault();
    }
    else if (liste == "Autres") {
        event.preventDefault();
    }
    else{
        var select = document.getElementById('projet');
        var valeur = select.options[select.selectedIndex].value;
        document.getElementById('text').value = valeur;
    }
})



































