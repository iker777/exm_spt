
//Ejer1
let edad = prompt("Dime tu edad");

while(edad<=0){
 edad = prompt("Dime tu edad");
}
if(edad>=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

//Ejer2
let num = prompt("Dime un numero");
if(num==0){
    console.log("Solo son permitidos numeros hasta el uno");
}
while(num>0){
    console.log(num);
    num--
}
