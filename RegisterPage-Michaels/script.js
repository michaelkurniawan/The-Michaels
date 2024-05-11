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
        errorText.innerText = "First Name Cannot be Empty!";
        errorText.classList.add("triggered");
    }else if(!checkName(firstName)){
        errorText.innerText = "First Name Cannot Contain Number or Symbol!";
        errorText.classList.add("triggered");
    }else if(lastName.split(" ").length > 1){
        errorText.innerText = "Last Name Cannot be More than One Word!";
        errorText.classList.add("triggered");
    }else if(!checkName(lastName)){
        errorText.innerText = "Last Name Cannot Contain Number or Symbol";
        errorText.classList.add("triggered");
    }else if(!email.endsWith("@gmail.com")){
        errorText.innerText = "E-mail Must Ends With '@gmail.com'!";
        errorText.classList.add("triggered");
    }else if(address === ""){
        errorText.innerText = "Address Cannot be Empty!";
        errorText.classList.add("triggered");
    }else if(gender.value == "" || gender.value == undefined){
        errorText.innerText = "Gender Must be Filled!";
        errorText.classList.add("triggered");
    }else {
        window.location.href = "../HomePage-Michaels/index.html";
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