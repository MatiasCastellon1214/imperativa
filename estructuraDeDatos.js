// CONDICIONALES

// IF - TERNARIO - SWITCH
/*
let determinarSiEsMayor = (edadUsuario) => {
    // DEVOLVER UN BOOLEANO EN ASE A SI ES MAYOR O NO
    // El usuario es mayor o menor de edad

    let palabra = '';

    if ( edadUsuario >= 18) {
        //palabra = 'mayor';
        return 'El usuario es mayor'
    } else if ( edadUsuario === 18) {
        return 'El usuario estpá en la edad justa;'
    }
    else {
        //palabra = 'menor';
        return 'El usuario es menor';

    }

    //return `El usuario es ${palabra} de edad`;

};*/
/*
let pepitoEsMayor = determinarSiEsMayor(67);

console.log(pepitoEsMayor);

let juancitoEsMayor = determinarSiEsMayor(17);

console.log(juancitoEsMayor);


//let nombre = 'pepito';

const probarScope = () => {
    let nombre = 'pepito';
    if (true){
        console.log(nombre);
    }
}

probarScope();
*/


// Hasta es 5 quiero que devuelva un string que diga 'Números hasta el 5'
// 6 años 20 quiero que me devuelva 'Números del 5 al 20'
// 20 años 50 quiero que me devuelva 'Números del 20 al 50'
// Mayores o = a 50 'El número ya es muy grande'
/*
const probandoIf = ( numero ) => {
    if ( numero <= 5) {
        return 'Números hasta el 5';
    } else if ( numero <= 20) {
        return 'Números del 5 al 20'
    } else if ( numero <= 50) {
        return 'Números del 20 al 50';
    } else {
        return 'El número ya es muy grande';
    }
}

let resultadoNumero = probandoIf(20);

console.log(resultadoNumero);
*/

let determinarSiEsMayor = ( edadDelUsuario ) => {
    // DEVOLVER UN BOOLEANO EN BASE A SI ES MAYOR O NO >= 18
/*
    if ( edadDelUsuario >= 18 ) {
        return true;
    } else {
        return false;
    }
*/
    // CONDICION ? lo verdadero : lo falso;

    let esMayor = edadDelUsuario >= 18 ? 'El usuario es mayor' : 'El usuario es menor';

    return esMayor
}

let pepitoEsMayor = determinarSiEsMayor(19);

console.log(pepitoEsMayor);


const calcularImpuesto = ( marcaAuto ) => {

    let impuesto = 1000;

    switch( marcaAuto ) {
        case 'renault':
            impuesto += 200
            break
        case 'vw':
            impuesto += 100
            break
        case 'audi':
            impuesto += 400
            break
        case 'volvo':
            impuesto += 500
            break
        default:
            return 'La marca de este auto está excenta'
    }
    return impuesto
}

let totalImpuesto = calcularImpuesto('volvo');

console.log(totalImpuesto);