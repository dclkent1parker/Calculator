var characters= document.getElementById("characters");
var message= document.getElementById("message");
var email=document.getElementById("email");
var birthdate= document.getElementById("birthday");
var specialChars= /[!@#$%^&*(),.?":{}|<1234567890/_]/g;
var surname= document.getElementById("surname"); 
var firstname=document.getElementById("firstName");

surname.addEventListener("keyup", function specChars(){
    var surnameEntered = surname.value;
    if(specialChars.test(surnameEntered)){
        surname.style.backgroundColor="#B20000";
    }else{
        surname.style.backgroundColor="transparent";
    };
});
firstname.addEventListener("keyup", function specChars(){
    var firstnameEntered = firstname.value;
    if(specialChars.test(firstnameEntered)){
        firstname.style.backgroundColor="#B20000";
    }else{
        firstname.style.backgroundColor="transparent";
    };
});

birthdate.addEventListener("focusout", function(){
    if(parseInt(birthdate.value)>2000){
        birthdate.style.backgroundColor="#B20000";
    }
    else{
        birthday.style.backgroundColor="transparent";
    }
})

email.addEventListener("keyup", function(){
    var emailEntered = email.value;
    if(emailEntered.includes("@")){
        email.style.backgroundColor="transparent"
    }
    else{
        email.style.backgroundColor="#B20000"
    }

})
message.addEventListener("keyup", function(){
    var textEntered=message.value;
    var counter=(255-(textEntered.length));
    characters.innerHTML= counter+" remaining characters.";
})
