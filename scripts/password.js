function password(){
    document.getElementById("passwordReminder").innerHTML = "PASSWORD IS PASSWORD";
}
function checkPassword(){
    var inputValue = document.getElementById("passwordEnter").value;
    if (inputValue === "PASSWORD") {
        document.getElementById("proceed").className = "centerdiv";
        document.getElementById("password").className = "invisible";
    }
    else{
        document.getElementById("passwordReminder").innerHTML = "INCORRECT PASSWORD";    
    }
}
function clickedNo(){
    document.getElementById("proceed").className = "invisible";
    document.getElementById("password").className = "centerdiv";
}
function clickedYes(){
    window.location.replace("home.html");
}

document.getElementById('passwordEnter').addEventListener('input', function(event) {
    var inputElement = event.target;
    inputElement.value = inputElement.value.toUpperCase();
});
