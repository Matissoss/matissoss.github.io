document.getElementById("gameID").addEventListener('input', function(event){
    var gameID = event.target;
    gameID.value = gameID.value.toUpperCase();
    if(gameID.value === "CARMECO" || gameID.value === "1"){
        document.getElementById("carmeco").className = "game";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "SWITCHER DISCONTINUED DEMO" || gameID.value === "2"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "game";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "SKELETON GRAVEYARD" || gameID.value === "3"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "game";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "SWITCHER PIXEL GAME JAM" || gameID.value === "4"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "game";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "DEATH DUO" || gameID.value === "5"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "game";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "FISH VS CRABS" || gameID.value === "6"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "game";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "FREEZING TORCH" || gameID.value === "7"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "game";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "BEHIND THE DOORS" || gameID.value === "8"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "game";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "sidebar";
    }
    else if(gameID.value === "SPACE FLIGHT" || gameID.value === "9"){
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "game";
        document.getElementById("topbar").className = "sidebar";
    }
    else{
        document.getElementById("carmeco").className = "invisible";
        document.getElementById("switcherDemo").className = "invisible";
        document.getElementById("skeleton").className = "invisible";
        document.getElementById("switcherPixel").className = "invisible";
        document.getElementById("death").className = "invisible";
        document.getElementById("fish").className = "invisible";
        document.getElementById("freezing").className = "invisible";
        document.getElementById("behind").className = "invisible";
        document.getElementById("space").className = "invisible";
        document.getElementById("topbar").className = "topbar";
    }
    document.getElementById("description").innerHTML = document.getElementById("description").innerHTML.toUpperCase();
    document.getElementById("description2").innerHTML = document.getElementById("description2").innerHTML.toUpperCase();
    document.getElementById("description3").innerHTML = document.getElementById("description3").innerHTML.toUpperCase();
    document.getElementById("description4").innerHTML = document.getElementById("description4").innerHTML.toUpperCase();
    document.getElementById("description5").innerHTML = document.getElementById("description5").innerHTML.toUpperCase();
    document.getElementById("description6").innerHTML = document.getElementById("description6").innerHTML.toUpperCase();
    document.getElementById("description7").innerHTML = document.getElementById("description7").innerHTML.toUpperCase();
    document.getElementById("description8").innerHTML = document.getElementById("description8").innerHTML.toUpperCase();
    document.getElementById("description9").innerHTML = document.getElementById("description9").innerHTML.toUpperCase();
});

function spaceFlight(){
    window.open("https://matissoss.itch.io/space-flight");
}
function behindTheDoors(){
    window.open("https://matissoss.itch.io/behind-the-doors");
}
function freezingTorch(){
    window.open("https://matissoss.itch.io/freezing-torch");
}
function fishVsCrabs(){
    window.open("https://matissoss.itch.io/fish-vs-crabs");
}
function deathDuo(){
    window.open("https://matissoss.itch.io/death-duo");
}
function switcherPixel(){
    window.open("https://matissoss.itch.io/switcher");
}
function skeletonGraveyard(){
    window.open("https://matissoss.itch.io/skeleton-graveyard");
}
function switcherDiscontinuedDemo(){
    window.open("https://matissoss.itch.io/switcher-game");
}
function carmeco(){
    window.open("https://matissoss.itch.io/carmeco");
}