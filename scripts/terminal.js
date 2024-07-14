let inputValue = "";

function handleInputEvent(event){
    if(event.key === "Enter"){
        inputValue = document.getElementById("input").innerHTML;
        executeCommand();
        document.getElementById("input").id = "previous";
        document.getElementById("previous").className = "previous";
        let newInput = document.createElement('h1');
        newInput.id = "input";
        newInput.innerHTML = "Matissoss.github.io/Terminal>"
        document.getElementById("outputs").appendChild(newInput);
    }
    else if(event.key === "Backspace" || event.key === "Tab" || event.key === "Shift" || event.key === "Alt" || event.key === "Control" || event.key === "OS" || event.key === "CapsLock"){
        document.getElementById("input").innerHTML = "Matissoss.github.io/Terminal>";
    }
    else{
        document.getElementById("input").innerHTML += event.key;
    }
    
}
document.addEventListener('keydown', handleInputEvent);

function executeCommand(){
    let output = document.createElement('h1');
    output.id = "output";
    output.className = "previous";
    if(inputValue === "Matissoss.github.io/Terminal&gt;help"){
        output.innerHTML = "help - commands <br> games - shows game list <br> sites - shows site list <br> contacts - shows contact list <br> return - returns to normal view <br> clear - clears previous output";
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;games"){
        output.innerHTML = "game (id) <br> ids: <br>1 - CarmEco <br> 2 - Switcher Discontinued <br> 3 - Skeleton Graveyard <br> 4 - Switcher Pixel Game Jam 2024 <br> 5 - Death Duo <br> 6 - Fish vs Crabs <br> 7 - Freezing Torch <br> 8 - Behind the Doors <br> 9 - Space Flight";
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;sites"){
        output.innerHTML = "site (id) <br> ids: <br> 1 - Itch.io <br> 2 - Github <br> 3 - Twitter <br> 4 - Youtube <br> 5 - Soundcloud";
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;contacts"){
        output.innerHTML = "contact (id) <br> ids: <br> 1 - Mail <br> 2 - Twitter";
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;return"){
        output.innerHTML = "Returning to normal view";
        window.location.replace("index.html");
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;clear"){
        output.innerHTML = "Cleared";
        document.body.removeChild(document.getElementById("outputs"));
        let newoutputs = document.createElement('div');
        newoutputs.id = "outputs";
        document.body.appendChild(newoutputs);
        let newInput = document.createElement('h1');
        newInput.id = "input";
        newInput.innerHTML = "Matissoss.github.io/Terminal>"
        document.getElementById("outputs").appendChild(newInput);
        if(document.getElementById("previous") != null){
            document.removeChild(getElementById("previous"));
        }
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 1"){
        carmeco();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 2"){
        switcherDiscontinuedDemo();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 3"){
        skeletonGraveyard();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 4"){
        switcherPixel();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 5"){
        deathDuo();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 6"){
        fishVsCrabs();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 7"){
        freezingTorch();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 8"){
        behindTheDoors();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;game 9"){
        spaceFlight();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;site 1"){
        itchio();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;site 2"){
        github();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;site 3"){
        twitter();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;site 4"){
        youtube();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;site 5"){
        soundcloud();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;contact 1"){
        mail();
    }
    else if(inputValue === "Matissoss.github.io/Terminal&gt;contact 2"){
        dmOnX();
    }
    else{
        output.innerHTML = "error - unknown command <br> write help to see commands";
    }
    document.getElementById("outputs").appendChild(output);
}

//From game.js
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
//From contact.js
function mail(){
    window.open("mailto:matissossGameDev@proton.me");
}
function dmOnX(){
    window.open("https://twitter.com/messages/compose?recipient_id=1774099156438532096");
}
//From sites.js
function itchio(){
    window.open("https://matissoss.itch.io");
}
function github(){
    window.open("https://github.com/matissoss");
}
function twitter(){
    window.open("https://x.com/@matissosgamedev");
}
function youtube(){
    window.open("https://www.youtube.com/@MatissossGameDev");
}
function soundcloud(){
    window.open("https://soundcloud.com/matissossgamedev");
}