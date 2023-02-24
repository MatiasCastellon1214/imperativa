
// FUNCIONES

let nombre = 'Jorge';

console.log( nombre );

// DECLARADAS

function sumar (){
    // Delimitan el código
    let a = 2;
    let b = 3;
    let result = a + b;
    return `El resultado de ${a} + ${b} es igual a ${result}`;
}

let resultadoSuma1 = sumar();
console.log(resultadoSuma1);


function sumar2( numero1, numero2){
    let resultado2= numero1 + numero2;
    return resultado2;
}

let resultadoSuma2 = sumar2(23, 54);
console.log(resultadoSuma2);

let resultadoSuma3 = sumar2(435, 73.87);
console.log(resultadoSuma3);


function saludar (nombreDeUsuario){
    return `Hola ${nombreDeUsuario} como estas`;
}

let saludo = saludar('Juan');
console.log( saludo );

let saludo2 = saludar('Super Ramita');
console.log( saludo2 );


// EXPRESADAS O ANÓNIMAS/ comunes o arrows (flechas)

const multiplicar = function (n1, n2){
    // BLOQUE DE CÓDIGO
    return n1 * n1;
}

let resultadoMultiplicacion = multiplicar();

// HOISTING


// FUNCIONES DECLARADAS Y EXPRESADAS
/*
function ladrar (){
    // DECLARADAS
};

const ladrar = function(){
    // EXPRESADAS
};*/



// EXPRESADAS COMÚNES VS ARROW FLECHAS
/*
const dividir = function(){

}
*/

const dividir = (num1, num2) => num1 / num2;

let a = dividir(20, 5);
console.log(a);


// TODO ---> EJERCICIO 4 PLAUGROUND

const anterior = ( numero ) => {
    return --numero;
}

let res1 = res1(20);
console.log(res1);

const triple = ( numero ) => {
    return numero * 3;
}

let res2 = triple(3);
console.log(res2);

const anteriorDelTriple = ( numero ) => {
    //return (numero * 3) - 1;
    //let resultadoTriple = triple(numero);
    //let resultadoAnterior = anterior(resultadoMultiplicacion);
    //return resultadoAnterior

    return anterior( triple( numero )) // JS resuelve de adentro hacia afuera
}

