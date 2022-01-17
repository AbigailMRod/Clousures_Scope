
/**el hoisting eleva las asignaciones, en este caso por ejemplo, el console.log dará como
 * resultado el valor de 2, porque es como si primero se hicera la declaracion de la varible
 * y después se incializara
 */


a = 2;
var a;
console.log(a);

/** el hoisting solo se usa en las declaraciones y no en las inicializaciones */
console.log(a);
var a=2;




/**ocurre el hoisting de nuevo */
nameOfDog("Elmo");
function nameOfDog(name) {
    console.log(name);
}

