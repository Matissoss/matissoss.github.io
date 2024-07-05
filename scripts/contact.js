document.getElementById("contactMode").addEventListener('input', function(event)
{
    var inputValue = event.target;
    inputValue.value = inputValue.value.toUpperCase();
});
function checkContact(){
    var site = document.getElementById("contactMode");
    if(site.value === "MAIL"){
        window.open("mailto:matissossGameDev@proton.me");
        document.getElementById("error").innerHTML = "";
    }
    else if(site.value === "TWITTER" || site.value === "X" || site.value === "TWITTER OR X"){
        window.open("https://twitter.com/messages/compose?recipient_id=1774099156438532096");
        document.getElementById("error").innerHTML = "";
    }
     else{
        document.getElementById("error").innerHTML = "INVALID SITE";
    }
}