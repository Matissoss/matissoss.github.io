const gameTitle = document.getElementById("GameTitle");
const gameIMG = document.getElementById("GameIMG");

nextGame();
function nextGame(){
    let gameID = Math.floor(Math.random() * 10);
    if (gameID == 0){
        gameID += 1;
    }

    switch(gameID){
        case 1:
            gameTitle.innerHTML = "CarmEco";
            gameIMG.src = "images/Games/CarmEco.svg";
            break;
        case 2:
            gameTitle.innerHTML = "Overhytm";
            gameIMG.src = "images/Games/Overhytm.svg";
            break;
        case 3:
            gameTitle.innerHTML = "Switcher Pixel Game Jam 2024";
            gameIMG.src = "images/Games/8.svg";
            break;
        case 4:
            gameTitle.innerHTML = "Fish vs Crabs";
            gameIMG.src = "images/Games/7.svg";
            break;
        case 5:
            gameTitle.innerHTML = "Death Duo";
            gameIMG.src = "images/Games/6.svg";
            break;
        case 6:
            gameTitle.innerHTML = "Switcher Demo";
            gameIMG.src = "images/Games/5.svg";
            break;
        case 7:
            gameTitle.innerHTML = "Skeleton Graveyard";
            gameIMG.src = "images/Games/4.svg";
            break;
        case 8:
            gameTitle.innerHTML = "Freezing Torch";
            gameIMG.src = "images/Games/3.svg";
            break;
        case 9:
            gameTitle.innerHTML = "Behind the Doors";
            gameIMG.src = "images/Games/1.svg";
            break;
        case 10:
            gameTitle.innerHTML = "Space Flight";
            gameIMG.src = "images/Games/2.svg";
            break;
    }
}