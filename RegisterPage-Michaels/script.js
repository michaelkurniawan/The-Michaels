// 5 Kinds of Validation:
// - First Name: tidak boleh kosong, no digits & no symbols
// - Last Name: maksimal satu kata
// - Gender: harus pilih salah satu (not empty)
// - Address: Tidak boleh kosong
// - Gmail: Tidak boleh kosong, Harus diakhiri dengan @gmail.com, Tidak boleh hanya "@gmail.com", Tidak boleh mengandung spasi


// Total Validasi Keseluruhan:
// 1. Tidak boleh kosong
// 2. No digits & no symbols
// 3. Maksimal 1 kata
// 4. Harus diakhir dengan @gmail.com
// 5. Tidak boleh hanya "@gmail.com"
// 6. Tidak boleh mengandung spasi

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
    }else if(email === ""){
        errorText.innerText = "E-mail Cannot be Empty!";
        errorText.classList.add("triggered");
    }else if(email === "@gmail.com"){
        errorText.innerText = "E-mail Must Contain Username Before '@gmail.com'";
        errorText.classList.add("triggered");
    }else if(email.includes(" ")){
        errorText.innerText = "E-mail Cannot Contain Spaces!";
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