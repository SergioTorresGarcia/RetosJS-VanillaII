
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

// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para calcular
// el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si
// introducimos un 5, realizará esta operación 5*4*3*2*1=120.

let num = prompt("A qué número quieres calcular su factorial?")
let total = num
const factorial = (num) => {
    let i=1
    while (i<num) {
        total *= (num-i)
        i++
    }
    return `${num}! es ${total}`
}
console.log(factorial(num))
