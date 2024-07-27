//key woard - nama variable= value
// var
//let
//const
function getData() {
    let name = document.getElementById("nameInput").value
    let email = document.getElementById("inputEmail").value
    let number = document.getElementById("inputPhoneNumber").value
    let subject = document.getElementById("Subject").value
    let Message = document.getElementById("Message").value

    console.log(name);
    console.log(email);
    console.log(number);
    console.log(subject);
    console.log(Message);

    document.getElementById("nameInput").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhoneNumber").value = "";
    document.getElementById("Subject").value = "";
    document.getElementById("Message").value = "";
}

