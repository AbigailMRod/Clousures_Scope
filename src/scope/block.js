
/**las varibles declaradas dentro de la funcion, se puede accerder dentro de la misma ,
 * anque estemos fuera del bloque (if), pero solo cuando se declaran con var.
 * 
 * Si se declaran las varibles con const o let solo se podran acceder desde dentro del bloque,
 * aunque esté este dentro de una funcion
*/

const fruits= ()=>{
    if (true){
        var fruits1= "apple";
        let fruits2= "banana";
        const fruits3= "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();

let x=1; // local
{let x=2; // de bloque 
console.log(x)}
console.log(x);


const anotherFunction = () =>{
    for (let i=0; i<10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}
anotherFunction();