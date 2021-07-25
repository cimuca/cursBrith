function init(){
    // Incarcam ca prim frame (acasa)
    document.getElementById("frameCont").contentWindow.location.href = "acasa.html";

    // declara ce frame avem selectat si-l marcam ca active
    frameIn('fAcasa');
}

// marcam frame active in meniu
function frameIn(frame){
    // curatam clasa active din meniu daca exista
    cleanActiveFrame();

    // element activ in meniu
    var element = document.getElementById(frame);
    element.classList.add("active");
}

// curatam clasa active din meniu daca exista
function cleanActiveFrame(){
    if(document.getElementsByClassName('active').length){
        var el = document.getElementsByClassName('active');
        el[0].classList.remove("active");
    }

}