function checkPassword(){
    var inputValue = document.getElementById("passwordEnter").value;
    if (inputValue === "PASSWORD") {
        document.getElementById("aboutMe").className = "";
        document.getElementById("password").className = "invisible";
    }
    else{
        document.getElementById("error").innerHTML = "INCORRECT PASSWORD";    
    }
}



document.getElementById('passwordEnter').addEventListener('input', function(event) {
    var inputElement = event.target;
    inputElement.value = inputElement.value.toUpperCase();
});