/** se debe tener mucho cuidado a la hora de hacer asignaciones, ya que de manera involuntaria
 * se pueden estar creando closures que no se requieren, con bloques de código que se 
 * pueden salir de control */

const anotherFunction = () =>{
    for (let i=0; i<10; i++){
        setTimeout(()=>{
            console.log(i);
        },1000)
    }
}
anotherFunction();