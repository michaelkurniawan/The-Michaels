// 5 Kinds of Validation:
// - First Name: tidak boleh kosong, no digits & no symbols
// - Last Name: maksimal satu kata
// - Gender: harus pilih salah satu (not empty)
// - Address: tidak boleh kosong,
// - Gmail: ends with @gmail.com

let form = document.getElementById("register-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let gender = form.gender;

    let errorText = document.getElementById("error-txt");
    errorText.innerText = "";

    if(firstName === ""){
        errorText.innerText = "First name cannot be empty";
    }else if(!checkName(firstName)){
        errorText.innerText = "First name cannot contain number or symbol";
    }else if(lastName.split(" ").length > 1){
        errorText.innerText = "Last name cannot be more than one word";
    }else if(!checkName(lastName)){
        errorText.innerText = "Last name cannot contain number or symbol";
    }else if(!email.endsWith("@gmail.com")){
        errorText.innerText = "E-mail must end with @gmail.com";
    }else if(address === ""){
        errorText.innerText = "Address cannot be empty";
    }else if(gender.value == "" || gender.value == undefined){
        errorText.innerText = "Gender must be filled";
    }
});

function checkName(str){
    return str.split(" ").every(word =>{
        return str.split("").every(char =>{
            let charCode = char.charCodeAt(0);
            return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
        });
    })
}