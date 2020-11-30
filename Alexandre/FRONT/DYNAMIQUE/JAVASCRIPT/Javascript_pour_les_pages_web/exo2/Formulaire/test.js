let formValid = document.getElementById('envoyer');
let societe = document.getElementById('societe');
let contact = document.getElementById('contact');
let adress = document.getElementById('codePostal');
let ville = document.getElementById('ville');
let email = document.getElementById('email');
let telephone = document.getElementById('telephone');
let contactColor = document.getElementById('warning')



formValid.addEventListener('click',function(event){

    if (societe.value =="") {
        event.preventDefault();
        alert("vous devez renseigner une société");
        contactColor.textContent = "*";
        contact.style.color = "red";
        societe.focus();
        return false;
    }
    if (contact.value == "") {
        event.preventDefault();
        alert("vous devez renseigner un contact");
        contactColor.textContent ="*";
        contactColor.style = "red";
        contact.focus;
        return false;
    }

});


































