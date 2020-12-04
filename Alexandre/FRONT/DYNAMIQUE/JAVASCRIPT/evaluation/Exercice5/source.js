let form = document.querySelector('#form');

//Ecouter la modification de l'input nom 
form.fname.addEventListener('change',function(event){
    validFirstName(this);
});

//Ecouter la modification de l'input prénom
form.lname.addEventListener('change',function(event){
    validLastName(this);
});

//Ecouter la modification de l'input date de naissance 
form.birth.addEventListener('change',function(event){
    validDateOfBirth(this);
    
});

//Ecouter la modification de l'input adresse
form.adress.addEventListener('change',function(event){
    validAdresse(this);
});

//Ecouter la modification de l'input ville  
form.city.addEventListener('change',function(event){
    validCity(this);
});

//Ecouter la modification de l'input email 
form.email.addEventListener('change',function(event){
    validEmail(this);
});

//Ecouter la modification de l'input sujet 
form.topic.addEventListener('change',function(event){
    validTopic(this);
});

//Ecouter la modification de l'input message 
form.message.addEventListener('change',function(event){
    validMessage(this);
});

//Ecouter la modification de l'input check box
form.accept.addEventListener('change',function(event){
    validAccept(this);
});

//Ecouter la modification de l'input bouton radio
form.addEventListener('change',function(event){
    validSex(this);
});

//Ecouter la modification lors du click sur le bouton submit
form.addEventListener('submit',function(event){
    event.preventDefault();
    //Vérification si tous les champs de formulaire sont remplis
    if (validFirstName(this.fname) && validLastName(this.lname) && validSex(this) && validDateOfBirth(this.birth) && validAdresse(this.adress) && validCity(this.city) && validEmail(this.email) && validTopic(this.topic) && validMessage(this.message) && validAccept(this.accept)) {
       form.submit();
    }
    //Sinon afficher le message d'erreur 
    else{
        validFirstName(this.lname);
        validLastName(this.fname);
        //Condition pour afficher le message d'erreur si à la validation du formulaire le bouton radio est sur false
        if (validSex(this) == false) {
            let small = document.getElementById('sex');
            small.innerHTML = '* veuillez faire un choix';
            small.classList.remove('text-green');
            small.classList.add('text-red');
        }
        validDateOfBirth(this.birth);
        validAdresse(this.adress);
        validCity(this.city);
        validEmail(this.email);
        validTopic(this.topic);
        validMessage(this.message);
        validAccept(this.accept);
    }
    
})
//*********************************************************************Déclaration des fonctions pour vérification des données saisies*******************************************************/
//*********************Validation du champ nom*************************/
function validFirstName(input){
    let small = input.nextElementSibling;
    
    if (input.value == ""){
        small.innerHTML = '* renseigner votre nom';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//************************Validation du champ prénom ***************************/
function validLastName(input){
    let small = input.nextElementSibling;
    
    if (input.value == ""){
        small.innerHTML = '* renseigner votre prénom';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//************************Validation du bouton radio ***************************/
function validSex(input){
    let small = document.getElementById('sex');
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    if (male == true) {
        console.log("vous avez selectionné male");
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
    else if (female == true) {
        console.log("vous avez selectionné female");
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
    else{
        return false;

    }
}
//************************Validation du champ date ***************************/
function validDateOfBirth(input){
    let small = input.nextElementSibling;
    
    if (input.value == ""){
        small.innerHTML = '* renseigner une date';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//************************Validation du champ adresse ***************************/
function validAdresse(input){
    let small = input.nextElementSibling;
    
    if (input.value == ""){
        small.innerHTML = '* renseigner votre adresse';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//************************Validation du champ ville ***************************/
function validCity(input){
    let small = input.nextElementSibling;
    
    if (input.value == ""){
        small.innerHTML = '* renseigner votre adresse';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//************************Validation du champ email ***************************/
function validEmail(input){
    let small = input.nextElementSibling;
    let regex = new RegExp('^[a-z.-_]+[@]{1}[a-z]+[.]{1}[a-z]{2,8}$','g');
    let message;
    if (input.value == "" || regex.test(input.value) == false){
        (input.value == "")? message = "* renseigner votre email" : message = "* renseigner une email valide";
        small.innerHTML = message;
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//************************Validation du champ sujet ***************************/
function validTopic(input){
    let small = input.nextElementSibling;
    
    if (input.value == "" || input.value == "Veuillez sélectionner votre sujet"){
        small.innerHTML = '* renseigner votre sujet';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}
//*************************Validation du champ question***************************/
function validMessage(input){
    let small = input.nextElementSibling;
    
    if (input.value == ""){
        small.innerHTML = '* renseigner votre sujet';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}

//*************************Validation du check box***************************/
function validAccept(input){
    let small = document.querySelector('.accept');
    
    if (input.checked == false){
        small.innerHTML = '* vous devez cocher pour valider le formulaire';
        small.classList.remove('text-green');
        small.classList.add('text-red');
        return false;

    }
     else{
        small.innerHTML = '<i class="fas fa-check"></i>';
        small.classList.remove('text-red');
        small.classList.add('text-green');
        return true;
    }
}





