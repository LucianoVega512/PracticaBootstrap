var base = document.getElementById("base");
var altura = document.getElementById("altura");
var area = document.getElementById("area");
document.getElementById("calcular").addEventListener("click", function () {
    // let res = base.value;
    // const res = parseInt(base.value);
    var res = Area(parseFloat(base.value), parseFloat(altura.value));
    area.setAttribute("placeholder", "".concat(res));
}, false);
function Area(base, altura) {
    return base * altura;
}
