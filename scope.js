let bonus = 6;
function sum (first, second){
    let result = first + second + bonus;
    if(result >= 10){
        const mood = "Happy";
        console.log(mood)
    }
    else {
        console.log("not happy");
    }
    return result;
}
const output = sum(1, 3);
console.log(output, bonus);