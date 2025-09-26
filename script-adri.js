
// Ejercicio 1

let edad = Number(prompt("¿Cuantos años tienes?"))

if (edad >= 0 && edad < 18) {
    console.log("Eres menor de edad")

} else if (edad >= 18 && edad < 105) {
    console.log("Eres mayor de edad")

} else console.log("No vale")

// Ejercicio 2

let numero = Number(prompt("Dime un número"))

while (numero > 1) {
    console.log(numero)
    numero = numero - 1
}
console.log(numero)



