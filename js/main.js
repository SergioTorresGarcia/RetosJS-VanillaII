
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

// Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si es
// primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por
// ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.


let num = prompt("Dime un número positivo y comprobaré si es un número primo")

const numPrimo = (num) => {

    if (num < 2) {
        return false
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        } else {
            return true
        }
    }
}
numPrimo(num) ? console.log(`${num} es un número primo`) : console.log(`${num} NO es un número primo`)