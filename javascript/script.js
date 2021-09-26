//declaracion de variables
let operandoa;
let operandob;
let operacion;

function init() {
    //variables
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
}
    //eventos : cuando se haga click al boton se reflege en la pantalla
    //textContent le agrega el contenido a la pantalla resultado
    //reset llama la funcion resetear
    //+ - * / funcionan de la misma manera con el opreandoa y operandob
    //se usa limpiar en cada una de las operaciones para que me borre la pantalla de resultados
    //igual: guarda en el operando b 
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
     }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
//limpiar borra cualquier nro
//resetear borra e inicializa a 0 operando a - opreando b y la variable de operacion
    function limpiar() {
        resultado.textContent = "";
    }

    function resetear() {
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
//resolver tiene las tres cosas que necesita para recolver una operacion
//que son opreandoa opreandob y operacion
//resetear devuelve a 0 opreandoa operandob y operacion y establece el resultado dependiendo del tipo de operacion
function resolver() {
    let res = 0;
    switch(operacion) {
        case "+" :
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-" :
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;  
        case "*" :
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;   
        case "/" :
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;            
    }
    resetear () ;
    resultado.textContent = res;
}
