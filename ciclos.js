// ANCHOR Estructuras de repetición ---> for / while / di while

// 10 veces un console log que diga 'hola'

//console.log('hola');

//const saludarDiezVeces = () => {

    //console.log('hola');

    //INICIALIZACIÓN; CONDICIÓN; MODIFICADOR

    // ACÁ LOS N° VAN DEL 1 AL 10
    //for ( let i = 1; i <= 10; i++) {
      //  console.log('hola')
    //}

    // ACÁ LOS N° VAN DEL 10 AL 1

    //for ( let i = 10; i <= 1; i--) {
      //  console.log('hola')
    //}

    // IR Y VENIR HASTA EL 10
    //for ( i = 1; i <= 10; i++) {
      //  console.log(`${i} - ${11 - i}` )
    //}

    // NÚMEROS IMPARES DEL 1 - 30

    // for (let i = 1; i <= 30; i += 2) {

    //if ( i % 2 !== 0){
    //console.log( i )
//}
 //}


//}

//saludarDiezVeces()


//const contarHastaDiez = () => {

  //for ( let = 1; i < 10; i++) {
  //  console.log(i);
  //}
  //let i = 1;
  //while ( i <= 0 ) {
  //  console.log( i )

  //  i++
  //}

//  let i = 15;
  //do {
    //console.log( i );
    //i++
  //}
  //while ( i <= 10 ) 

//}

//contarHastaDiez(10);

// CONTAR LOS NÚMEROS DEL 1 AL X ( VA A SER EL NÚMERO POR PARAMETRO)
/*
const contarHastaX = (inicio, fin) => {

  for ( i = inicio; i <= fin ; i++) {
    console.log( i )
  }
}

contarHastaX( 5, 7);
console.log('--------------------')
contarHastaX(100, 110);
*/
// Elaborar un programa que permita ingresar un número entero del 1 al 12
// y muestre la tabla de multipplicar de dicho número
/*console.log('-------------');
const tabla = ( numero ) => {

  if ( numero < 1 || numero > 12 || (numero % 1) !== 0) {
    // NO CUMPLE LA VALIDACIÓN
    console.log('El número no es válido');
    return
  }

  // tabla de multiplicar
  // for

  for ( let i = 1; i < 10; i++) {

    console.log(`${numero} * ${i} = ${numero * i}`)

  }

}

//tabla(9);
*/

/*
const tabla = ( numero ) => {

  if ( numero >= 1 && numero < 12 && (numero % 1) === 0) {
    for ( i = 1; 1 <= 10; i++) {
      console.log(`${numero} * ${i} = ${numero * i}`)
    }
  } else {
    console.log('El número no es válido');
  }

  // tabla de multiplicar

}

tabla(2.2);
*/


// FUNCIÓN QUE DEVUELVA EL PROMEDIO DE 3 NOTAS
// Y QUE DEVUELVA UN BOOLEANO DICIENDO SI APROBÓ O NO


const promedio = (n1, n2, n3) => {

  let promedio = (n1 + n2 + n3) / 3;
  let estaAprobado = promedio >= 7

  return estaAprobado;

  //return estaAprobado ? true : false

  //if ( estaAprobado ) {
  //  return true;
  //} else {
  // return false
  //}





}