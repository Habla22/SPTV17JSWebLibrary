document.getElementById('enter-menu').onclick=function(){ //при клике на штуку с ИД "ентер-меню" запускается функция "актив-меню"
    toogleMenuActive('enter-menu');
}
document.getElementById('sysout').onclick=function(){ //при клике на штуку с ИД "ентер-меню" запускается функция "актив-меню"
    toogleMenuActive('sysout');
}

function toogleMenuActive(elementId){
    let activeElement = document.getElementById(elementId);
    let passiveElements = document.getElementsByClassName('nav-item');
    for(let i = 0;i < passiveElements.length; i++){ //цикл перебора nav-oв
        if(activeElement === passiveElements[i]){
            passiveElements[i].classList.add("active-menu");
        }else{
            if(passiveElements[i].classList.contains('active-menu')){
                passiveElements[i].classList.remove('active-menu');
            }
        }
    }
}