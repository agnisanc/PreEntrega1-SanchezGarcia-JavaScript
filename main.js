/* Este simulador esta orientado a presentar las cuotas de prestamos en pesos argentinos con una tasa de interes del 20% donde la cuotas
son definidas por los eventuales clientes usuarios */

username = prompt("Bienvenido! Por favor, ingrese su nombre de usuario")

while (username != "Agustin"){
    alert("Este usuario no esta registrado!")
    username = prompt("Bienvenido! Por favor, ingrese su nombre de usuario"); 
}
alert("Bienvenido Agustin!")

currency = prompt("¿En que moneda deseas realizar tu financiacion?"); 

while (currency != "Peso argentino"){
    alert("No tenemos financiaciones disponibles en esa moneda")
    currency = prompt("¿En que moneda deseas realizar tu financiacion?"); 
}
alert("Tenemos finaciaciones disponibles en esa moneda!")

const addition = (a, b) => a + b;
const division = (a, b) => a / b;
const interestRate = (x) => x * 0.20;
let amount = Number(prompt("Por favor, ingrese su monto de su prestamo a financiar"));
let fees = Number(prompt("Ingrese la cantidad de cuotas deseada en su financiacion"));


let feesPrice = division(addition(amount, interestRate(amount)),fees)

console.log(feesPrice)

alert("La cuota mensual de tu prestamo sera de" + " " + feesPrice)

alert("Gracias por financiar su prestamo con nosotros!")
