const root = document.documentElement;
checkCookieValue();
function setCookie(cookieName, cookieValue) {
    var expire = new Date();
    expire.setTime(expire.getTime() + 1 * 60 * 60 * 1000);
    document.cookie = cookieName + '=' + cookieValue + "; expires=" + expire.toUTCString() + '; path=/';
}

function checkCookieValue() {
    var cookies = document.cookie.split(';');
    var cookieValue = null;
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf('color=') === 0) {
            cookieValue = cookie.split('=')[1];
            break;
        }
    }
    switch (cookieValue) {
        case 'Red':
            Red();
            break;
        case 'Blue':
            Blue();
            break;
        case 'Green':
            Green();
            break;
        default:
            break;
    }
}

function Blue() {
    setCookie('color', 'Blue');
    root.style.setProperty("--text-alt", "#9488bc");
    root.style.setProperty("--text-main", "#948ebf");
    root.style.setProperty("--background-alt", "#d3d1ff");
    root.style.setProperty("--background-main", "#e3e2ff");
    document.getElementById("github").src = "images/sites/GithubBlue.svg";
    document.getElementById("soundcloud").src = "images/sites/SoundcloudBlue.svg";
    document.getElementById("itch").src = "images/sites/ItchBlue.svg";
    document.getElementById("twitter").src = "images/sites/XBlue.svg";
    document.getElementById("youtube").src = "images/sites/youtubeBlue.svg";
}

function Red() {
    setCookie('color', 'Red');
    root.style.setProperty("--text-alt", "#bc8888");
    root.style.setProperty("--text-main", "#bf8e8e");
    root.style.setProperty("--background-alt", "#ffe2e2");
    root.style.setProperty("--background-main", "#ffd1d1");
    document.getElementById("github").src = "images/sites/GithubRed.svg";
    document.getElementById("soundcloud").src = "images/sites/SoundcloudRed.svg";
    document.getElementById("itch").src = "images/sites/ItchRed.svg";
    document.getElementById("twitter").src = "images/sites/XRed.svg";
    document.getElementById("youtube").src = "images/sites/youtubeRed.svg";
}

function Green() {
    setCookie('color', 'Green');
    root.style.setProperty("--text-alt", "#88bc88");
    root.style.setProperty("--text-main", "#8ebf8f");
    root.style.setProperty("--background-alt", "#d1ffd5");
    root.style.setProperty("--background-main", "#e2ffe2");
    document.getElementById("github").src = "images/sites/GithubGreen.svg";
    document.getElementById("soundcloud").src = "images/sites/SoundcloudGreen.svg";
    document.getElementById("itch").src = "images/sites/ItchGreen.svg";
    document.getElementById("twitter").src = "images/sites/XGreen.svg";
    document.getElementById("youtube").src = "images/sites/youtubeGreen.svg";
}

document.addEventListener('DOMContentLoaded', function () {
    checkCookieValue();
});