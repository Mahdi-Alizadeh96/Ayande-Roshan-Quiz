export default function operations(ops) {

    let result = null;

    const spread = [...ops];
    const newArray = spread.filter(item => item !== ' ');
    let finalArray = [];

    newArray.forEach((item, index) => {

    if(!isNaN(item)) {
        finalArray.push(Number(item));
    }if(item === "D") {
        finalArray.push((finalArray[index - 1 ] * 2))
    }if(item === "R") {
        finalArray.pop(finalArray[index - 1])
    }if(item === "+") {
        finalArray.push(finalArray[index - 1] + finalArray[index - 2 ])
    }
    });

    result = finalArray.reduce((a, b) => a + b);

    return result;
}
