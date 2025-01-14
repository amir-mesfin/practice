const form1 = document.querySelector(".form-validation");
const firstName = document.querySelector(".input-name");
const secondName = document.querySelector(".input-second-name");
const email = document.querySelector(".input-email");
const address = document.querySelector(".addressInput");
const password = document.querySelector(".input-password");
const conformPassword = document.querySelector(".conform-password");
console.log(conformPassword);
const button = document.querySelector("button");
console.log(button);

form1.addEventListener("submit", (e) => {
    console.log("object");
    e.preventDefault();
    validation();
});

let validation = () => {
    // name
    let parent = firstName.parentNode;
    
    if (firstName.value.trim() === '') {
        errorHandling(firstName, "The name must not be empty");
    }else{
        successShow(firstName);
    }
    
    // second name.
     if(secondName.value.trim() === ""){
        errorHandling(secondName,"must not be empty");
     }else{
        successShow(secondName);
       
     }
    // email
    if(email.value.trim()===""){
        errorHandling(email,"must not be empty");
       
    }else if(!/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email.value.trim())){
        errorHandling(email,"write the correct information");
         
    } else{
        successShow(email);

    }
    // address
    if(address.value.trim() ===""){
         errorHandling(address,"you must fill location")
    }else{
        successShow(address);
    }
    // password
    if(password.value.trim()===""){
         errorHandling(password,"write password")
          
    }else if (password.value.trim()<5||password.value.trim()>15){
              errorHandling(password,password.value.trim()<5? "password at list 5 character":"password must be less than 15 character")
    }else{
        successShow(password);
    }
    // conformPassword
    if(conformPassword.value.trim() !== password.value.trim()){
        errorHandling(conformPassword,"password must be the  same");
    }else if(conformPassword.value.trim() === ""){
        errorHandling(conformPassword,"")
    }else{
        successShow(conformPassword);
    }
}

function errorHandling(element, message) {
    if(element.parentNode.classList.contains("success")){ 
        element.parentNode.classList.remove("success");
    }
    element.parentNode.classList.add("error");
    addParagraph(message);
}

function addParagraph(content){
   let paragraph = document.querySelector(".error p");
   paragraph.textContent=content;
}
function successShow(selector){
    console.log("abushe");
    if(selector.parentNode.classList.contains("error")){ 
        selector.parentNode.classList.remove("error");
    }
    selector.parentNode.classList.add("success");
}
