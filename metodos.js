let num1 = Number(prompt('ingrese un numero'))
let num2 = Number(prompt('ingrese el numero dos'))

function Desarrollo(){
    num1 > num2 ? console.log(num1 ) : console.log(num2)    
}
function  Otro() {
    num1 > num2 ? console.log(num2 , num1) : console.log( num1 , num2)
}

Desarrollo()
Otro()