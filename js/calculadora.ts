const base = <HTMLInputElement>document.getElementById("base");
const altura = <HTMLInputElement>document.getElementById("altura");
const area = <HTMLInputElement>document.getElementById("area");

document.getElementById("calcular").addEventListener("click", function(){
    // let res = base.value;
    // const res = parseInt(base.value);
    let res = Area(parseFloat(base.value), parseFloat(altura.value));
    area.setAttribute("placeholder", `${res}`);
}, false);

function Area(base:number, altura:number):number{

    return base * altura;
}
