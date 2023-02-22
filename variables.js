
let nombreDeUsuario = "Jaimito"; // 0 "Jaimito"

console.log(nombreDeUsuario);

//const apellido = "Pérez";

nombreDeUsuario = "Pepito";

console.log(nombreDeUsuario);


//console.log(apellido);

//apellido = 'Cuis'; // no se puede porque está con 'const'



// TIPOS DE DATOS


// ANCHOR ---> Strings = Cadena de texto o cadena de caracteres

let frase = 'Hola Mundo';


edad = 30;

console.log(typeof edad);

// ANCHOR ---> Enteros

edad = 30; 

// ANCHOR ---> Decimales (con '.')

let precio = 13.5; 

// ANCHOR ---> Booleanos = boolean

let estaLogeado = false; // ó 'true'


// ANCHOR ---> Undefined = No tiene valor pero es un dato

let email = undefined;

console.log(email);


// Null = La variable no tiene contenido
// NaN = 

console.log('Hola' / 5);



// OPERADORES

let nombre = 'Juancito';
let apellido = 'López';

console.log(nombre + ' ' + apellido);

let nombreCompleto = nombre + ' ' + apellido;

let saludo = 'Hola' + ' ' + nombre + ' ' + 'como estas?';

console.log(saludo);

let saludo2 = `Hola ${nombre} ${apellido} como estas?`;

console.log(saludo2);

let num1 = 5;
let num2 = 23;

let suma = num1 + num2;
let mult = num1 * num2;
let div = num1 / num2;
let resta = num1 - num2;
let modulo = num1 % num2; // ---> Me devuelve el resto

console.log(suma);
console.log(mult);
console.log(div);
console.log(resta);
console.log(modulo);
console.log('------------------------');
console.log('------------------------');
console.log('------------------------');



// OPERADORES DE COMPARACIÓN

let n1 = 15;
let n2 = 15;

let nombre1 = 'Pepito';
let nombre2 = 'Juancito';

console.log( n1 < n2 ); // Menor que
console.log( n1 > n2 ); // Mayor que
console.log( n1 >= n2 ); // Mayor o igual que
console.log( n1 <= n2 ); // Menor o igual que
console.log( n1 == n2 ); // Igual que
console.log(n1 != n2 ); // Distinto que


// COMARACIÓN SIMPLE ---> Sólo evalúa el valor y no el tipo de dato

console.log( nombre1 == nombre2 );
console.log( nombre1 != nombre2 );

let a = '12';
let b = 12;
console.log( a == b );
console.log( a != b );


// COMPARACIÓN ESTRICTA ---> Evalúa el valor pero también el tipo de dato

console.log( a === b );
console.log( a !== b );

// Negación

console.log('-----------------');
let esMayor = true;
console.log( !esMayor);

let j = 1;
let m = 2;

console.log( !(1 > 2) );


// OPERSDORES LÓGICOS


// AND ---> &&
// OR ---> ||

// Quiero que me devuelva 'true' si se cumples las 2

console.log( 1 > 2 && 1 < 5 && 10 < 21 ); // Devuelve 'true' si todos cumples

console.log( 1 > 2 || 1 < 5 || 10 < 21 ); // Devuelve 'true' si por lo menos uno es 'true'


