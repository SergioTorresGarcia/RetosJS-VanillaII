
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


// Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre qué
// números queremos que los genere, podemos pedirlas al usuario antes de generar los
// números. Este método devolverá un número entero aleatorio. Muestra estos números por
// consola.



let numeros = parseInt(prompt("cuantos números quieres generar"))
let num1 = parseInt(prompt("Desde que número"))
let num2 = parseInt(prompt("Hasta que número"))

const randomNumbers = () => {
    let nums = []
    
    if (num2 - num1 > numeros) {
        let i = 0
        while (i < numeros) {

            nums.push(Math.floor((Math.random() * num2) + num1));
            i++
        }
    } else {
        console.log("no se puede - poco rango")
    }
    return nums
}

console.log(randomNumbers(num1, num2, numeros))