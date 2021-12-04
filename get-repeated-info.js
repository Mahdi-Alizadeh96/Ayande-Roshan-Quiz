export default function getRepeatedInfo(number) {
    let result = null;
    
    if (typeof number === "number") {
        const toString = JSON.stringify(number);
        const spread = [...toString];
    
        let obj = {} ;
    
        spread.forEach(item => {
            Object.assign(obj ,{[item] : item.repeat(Number(item))})
        })
    
        result = obj
    }else {
        result = 'Thats not a number'
    }
    return result
};