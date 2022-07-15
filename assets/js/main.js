//Variabili globali
let input = document.querySelector(".search");
let menu_drop = document.getElementById("dropmenu");
let nav_bar = document.querySelector(".fixed");
let prevScrollpos = window.pageYOffset;

function showmenu(){
    menu_drop.classList.toggle("show-menu");
}

window.onclick = function(e){
    if(!e.target.matches('.form-control')){
        let dropmenu = document.getElementsByClassName("dropdown-menu");
        for (i = 0; i < dropmenu.length; i++) {
            let opendropdown = dropmenu[i];
            if (opendropdown.classList.contains("show-menu")) {
                opendropdown.classList.remove("show-menu");
            }
        }
    }
}


window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;
    const ua = navigator.userAgent;
    if(prevScrollpos > currentScrollPos){
       nav_bar.style.top = "0px";
      
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        nav_bar.style.top = "0px";
    }
    else{
        nav_bar.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}  

