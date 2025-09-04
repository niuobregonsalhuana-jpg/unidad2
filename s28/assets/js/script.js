
function showMessages() {
    console.log("la funcion fue llamada");
    console.log("inicio de mensajes");
    console.log("Hola");
    console.log("20");
    console.log("true");
    console.log("fin de los mensajes");
}

showMessages();

let multiplyTwoNumbers = (a, b) => {
    let result = a*b;
    let message = `Result: ${result}`;

    return message;
}

let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let result = multiplyTwoNumbers(num1, num2);

console.log(result);