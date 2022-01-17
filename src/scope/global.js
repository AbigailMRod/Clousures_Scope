/**Scope global es el entorno "global" desde el cual yo puedo acceder a las variables
 * que estén declaradas
 */

var hello = "Hello";
var hello = "Hello +";
let world= "Hello World"; 
let world= "Hello World +"; // con let y const no se puede reasignar un valor que ya tenia 
const helloWordl= "Hello World";


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWordl);
}

anotherFunction();



const helloWordl = () =>{ // no se deben asignar vsriables globales dentro de funciones 
    globalVar= "im global"
}

helloWordl();
console.log(globalVar);



// otra mala practica que debe evitarse 
const anotherFunction = () =>{
    var localVar= globalVar = "Im global";
}
anotherFunction ();
console.log(globalVar);