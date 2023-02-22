
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


// EXPRESADAS / comunes o arrows (flechas)

