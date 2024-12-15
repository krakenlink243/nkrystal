
function rodo(){
    i = 2;
    document.getElementById("w"+1).style.display = "block";
    setInterval(() => {
        document.getElementById("w"+i).style.display = "block";
        i++;
    }, 300);
    document.getElementById("a1").play();
    document.getElementById("notmute").style.display = "inline";
    document.getElementById("mute").style.display = "none";
    
    setInterval(() => {
        document.getElementById("i1").style.display = "flex";    
    }, 8000);
}

function min(obj){
    obj.parentElement.style.display = "none";
}

function ehe(){
    
    for (let index = 1; index < 31; index++) {
        document.getElementById("w" + index).style.display = "none";;
        document.getElementById("w" + index).style.position = "absolute";
        document.getElementById("w" + index).style.left = ((Math.random() * 1400) + 100 ) + "px";
        document.getElementById("w" + index).style.bottom = ((Math.random() * 600) +50 ) + "px";
        
    }
    setTimeout(() => {
        alert("For optimized experience, please visit this website using desktop/desktop mode with fullscreen enable!");
    }, 500);
    
}

function play(obj){
    obj.style.display = "none";
    document.getElementById("a1").play();
}

function pause(){
    document.getElementById("a1").pause();
    document.getElementById("mute").style.display = "inline";
}
