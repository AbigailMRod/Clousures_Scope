/**un clousure es la combinación de una función y el ámbito léxico en la cual ha sido
 * delcarada dicha función
 * 
 * **** Un clousure recuerda el ámbito en el cual ha sido creado******
 */

const moneyBox= (coins) =>{
    var saveCoins=0;
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`)
}

moneyBox(5);
moneyBox(10);



/**el clousure recuerda el valor de la memoria anterior, es por ello que en esta función
 * se van sumando las cifras y en la anteriro no
 */
const moneyBox =() =>{
    var saveCoins=0;
    const countCoins= (coins) =>{
        saveCoins += coins;
        console.log(`Money Box: $${saveCoins}`)
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);