let inputValue = prompt("Input value");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число не четное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
