
const calcArea = (figura) => {
    // let figura = prompt("A qué figura quieres calcular su área? círculo, cuadrado o triángulo)")
    const pi = 3.1416
    switch (figura) {
        case "circulo":
            let radio = prompt("Dime el radio del círculo")
            return `El área de un circulo de radio ${radio} es ${(pi * (radio ** 2)).toFixed(2)}`
            break;
        case "cuadrado":
            let lado = prompt("Dime el lado del cuadrado")
            return `El área de un cuadrado de lado ${lado} es ${lado ** 2}`
            break;
        case "triangulo":
            let base = prompt("Dime la base del triángulo")
            let altura = prompt("Ahora dime su altura")
            return `El área de un triángulo de base ${base} y altura ${altura} es ${(base * altura) / 2}`
        default:
            return "datos incorrectos"
    }
}
console.log(calcArea(prompt("A qué figura quieres calcular su área? círculo, cuadrado o triángulo)")))