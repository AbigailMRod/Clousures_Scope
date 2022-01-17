/** con closures se pueden hacer variables privadas, se tiene que disponer de los
 * métodos creados para hacer las asignaciones, desde otro lado no se pueden cambiar 
 * los valores que se establecieron originalmente*/

const person = () =>{
    var saveName= "Name";

    return{
        getName: ()=>{
            return saveName;
        },
        setName:(name) =>{
            saveName=name;
        },
    };
};

newPerson= person();
console.log(newPerson.getName());
newPerson.setName("Abigail");
console.log(newPerson.getName());