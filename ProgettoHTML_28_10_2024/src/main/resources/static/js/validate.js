
function getElement(string){
    casella=document.getElementById(string);
    return casella.value;
}

function validate(event){
    console.log("AAAAA");
    event.preventDefault();
    nameValue=getElement("formName");
    surnameValue=getElement("formSurname");
    emailValue=getElement("formEmail");
    objectValue=getElement("askObject");

    console.log(askObject);
    if((nameValue)=='' || surnameValue=='' || emailValue=='' || objectValue==''){
        alert("Completa tutti i campi!");
    }else if(emailValue.includes("@") ){
        let form = document.getElementById("formSubmit");
        form.submit();
    }else{
        alert("Manca la chiocciola");
    }
}
window.addEventListener("load", function(){
    form = document.getElementById("formSubmit");
    form.addEventListener("submit", validate);
});
