
// RETO 1:

// const calcArea = (figura) => {
//     // let figura = prompt("A qué figura quieres calcular su área? círculo, cuadrado o triángulo)")
//     const pi = 3.1416
//     switch (figura) {
//         case "circulo":
//             let radio = prompt("Dime el radio del círculo")
//             return `El área de un circulo de radio ${radio} es ${(pi * (radio ** 2)).toFixed(2)}`
//             break;
//         case "cuadrado":
//             let lado = prompt("Dime el lado del cuadrado")
//             return `El área de un cuadrado de lado ${lado} es ${lado ** 2}`
//             break;
//         case "triangulo":
//             let base = prompt("Dime la base del triángulo")
//             let altura = prompt("Ahora dime su altura")
//             return `El área de un triángulo de base ${base} y altura ${altura} es ${(base * altura) / 2}`
//         default:
//             return "datos incorrectos"
//     }
// }
// console.log(calcArea(prompt("A qué figura quieres calcular su área? círculo, cuadrado o triángulo)")))


// RETO 2:

// let numeros = parseInt(prompt("cuantos números quieres generar"))
// let num1 = parseInt(prompt("Desde que número"))
// let num2 = parseInt(prompt("Hasta que número"))

// const randomNumbers = () => {
//     let nums = []

//     if (num2 - num1 > numeros) {
//         let i = 0
//         while (i < numeros) {

//             nums.push(Math.floor((Math.random() * num2) + num1));
//             i++
//         }
//     } else {
//         console.log("no se puede - poco rango")
//     }
//     return nums
// }

// console.log(randomNumbers(num1, num2, numeros))


// RETO 3:

// let num = prompt("Dime un número positivo y comprobaré si es un número primo")
// const numPrimo = (num) => {

//     if (num < 2) {
//         return false
//     }
//     for (i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false
//         } else {
//             return true
//         }
//     }
// }
// numPrimo(num) ? console.log(`${num} es un número primo`) : console.log(`${num} NO es un número primo`)


// RETO 4:

// let num = prompt("A qué número quieres calcular su factorial?")
// let total = num
// const factorial = (num) => {
//     let i=1
//     while (i<num) {
//         total *= (num-i)
//         i++
//     }
//     return `${num}! es ${total}`
// }
// console.log(factorial(num))


// RETO 5:

// let num = parseInt(prompt("Qué número quieres convertir a binario?"))

// const numBinario = []
// const convBinario = (num) => {

//     while (num >= 1) {
//         if (num % 2 == 0) {
//             numBinario.unshift('0')
//         } else {
//             numBinario.unshift('1')
//             num = num - 1
//         }
//         num = num / 2
//     }
//     return numBinario
// }
// console.log(convBinario(num).join(""))


// RETO 6:

// let num = prompt("Escribe un número mayor que 0, y comprobamos cuantas cifras tiene?").trim()

//  if(!isNaN(num) && (num > 0) && num % parseInt(num) == 0){
//     console.log(num.length + " cifras")
//  } else {
//     console.log("No es un número entero positivo")
//  }


// RETO 7:

let euros = parseFloat(prompt("¿Qué cantidad de euros quieres cambiar?"))
let currencyTo = prompt("¿A qué moneda? dólar(d), yen (y) o libra (l)")
console.log(euros, currencyTo)


const CurrencyConverter = (euros, currencyTo) => {
    switch (currencyTo) {
        case "d":
            return "$" + (euros / 0.93).toFixed(2)
            break;
        case "y":
            return (euros / 0.0062).toFixed(1) + "¥"
            break;
        case "l":
            return "£" + (euros / 1.17).toFixed(2)
            break;
        default:
            console.log("data is not correct")
    }
}
console.log(CurrencyConverter(euros, currencyTo))
