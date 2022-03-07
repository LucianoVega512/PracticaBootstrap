function activo(btn){
    let clase = btn.getAttribute("class");
}


window.onload = () => {
    let menu1 = document.getElementById("menu1");
    let menu2 = document.getElementById("menu2");
    let menu3 = document.getElementById("menu3");

    menu1.onclick = () => {
        menu1.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3 active");
        menu2.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3");
        menu3.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3");
    };

    menu2.onclick = () => {
        menu2.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3 active");
        menu1.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3");
        menu3.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3");
    };

    menu3.onclick = () => {
        menu3.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3 active");
        menu2.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3");
        menu1.setAttribute("class", "btn btn-primary btn-lg my-3 mx-3");
    };
};