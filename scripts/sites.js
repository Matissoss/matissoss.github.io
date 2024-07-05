function checkSite(){
    var site = document.getElementById("siteSelector");
    if(site.value === "ITCHIO"){
        window.open("https://matissoss.itch.io");
        document.getElementById("error").innerHTML = "";
    }
    else if(site.value === "GITHUB"){
        window.open("https://github.com/Matissoss");
        document.getElementById("error").innerHTML = "";
    }
    else if(site.value === "TWITTER" || site.value === "X" || site.value === "TWITTER OR X"){
        window.open("https://x.com/matissosgamedev");
        document.getElementById("error").innerHTML = "";
    }
    else if(site.value === "YOUTUBE"){
        window.open("https://www.youtube.com/@MatissossGameDev");
        document.getElementById("error").innerHTML = "";
    }
    else if(site.value === "SOUNDCLOUD"){
        window.open("https://soundcloud.com/matissossgamedev");
        document.getElementById("error").innerHTML = "";
    }
     else{
        document.getElementById("error").innerHTML = "INVALID SITE";
    }
}
document.getElementById("siteSelector").addEventListener('input', function(event)
{
    var inputValue = event.target;
    inputValue.value = inputValue.value.toUpperCase();
});