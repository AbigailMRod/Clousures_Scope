

const fruits = () =>{
    var fruit = "Apple";
    console.log(fruit);
};

fruits();
console.log(fruit); //el global no tiene acceso al local 



/** las varibles declaradas con let o const no se puden volver a reasignar */
/** la recomendación es dejar de usar var, ya se en las funciones o en el global, para 
 * evitar que se reasignen varibles que no queremos */
const anotherFunction =() =>{
    var x = 1;
    var x = 2;
    let y = 1;
   /*  let y = 2; */
    console.log(x);
    console.log(y);
};
anotherFunction();