/** en el scope local, las variables que están dentro de funciones, solo pueden ser 
 * accedidas desde dentro de la funcion, no desde fuera
*/

const helloWordl = () =>{
    const hello = "Hello World";
    console.log(hello);
};

helloWordl();

console.log(hello);


/** el ámbito léxico se refiere a que lo que está dentro de la función va a tomar las
 * variables que estén dentro y no les reasignará valores que ya existan en el global*/ 
var scope = "Im global";
const functionScope = () =>{
    var scope = "I am just a local";
    const fun = () =>{
        return scope
    }
    console.log(fun());
};
functionScope();

