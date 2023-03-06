// ANCHOR ---> Arrays

//let num1 = 1  
//let num2 = 37
//let num3 = 29
//let num4 = 32

let numerosDeLaSuerte = [ 1, 37, 29, 32 ]

//let nombre1 = 'cuis'
//let nombre2 = 'jaimito'
//let nombre3 = 'jack'


let nombresDeLasMascotas = ['cuis', 'jaimito', 'jack', 'cacho', 'carisma']

console.log(nombresDeLasMascotas.length)

//console.log(nombresDeLasMascotas[0])

//nombresDeLasMascotas[0]
//nombresDeLasMascotas[1]
//nombresDeLasMascotas[2]

const recorrerArr = ( arr ) => {

for ( i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
}

recorrerArr(nombresDeLasMascotas)

recorrerArr(numerosDeLaSuerte)

let frase = 'hola como estas';

console.log(frase[6])

recorrerArr(frase)

let palabra = 'mochilai'

console.log( palabra.indexOf('i'))
console.log( palabra.lastIndexOf('i'))

console.log(nombresDeLasMascotas.lastIndexOf('jaimito'))

let nuevoArr = frase.split('h') 

console.log(nuevoArr)


let nombre = 'jorge'

console.log(nombre)

console.log(nombre.trim ())

console.log(nombre.toLocaleUpperCase())


let nuevoArr2 = frase.split(' ') 
console.log(nuevoArr2)

let nuevoString = nuevoArr.join(' ')
console.log(nuevoString)


// [ 1, 37, 29, 32 ]

console.log(numerosDeLaSuerte.includes(235))

let palabras = ['casa', 'escoba', 'auto']


//palabras.push('moto')
//palabras.push('perro')

palabras.push('moto', 'perro', 'gato')

console.log(palabras)


let a = palabras.pop()
//palabras.pop()

console.log(palabras)
console.log(a)

let array = [ 12, 15, 3, 21]

// NUEVO ARREGLO PERO INVERTIDO



let invertirArray = ( arr ) => {
    let arrayInvertido = []
let longitud = arr.length

    for ( i = 0; i < arr.length; i++) {

        arrayInvertido.push(arr.pop())

    }
    return arrayInvertido

}

let result = invertirArray(array)
console.log(result)


let numeritos = [12, 51, 11, 88, 120]

const calcularTotal = ( arr ) => {

    let acumulador = 0

for ( i = 0; i < arr.length; i++) {
    //arr[i]
    acumulador = acumulador + arr[i]
}

return acumulador

}

let total = calcularTotal(numeritos)

console.log(total)


