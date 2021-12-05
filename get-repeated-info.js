export default function getRepeatedInfo(number) {
    let result = null;
    
    if (typeof number === "number") {
        const toString = JSON.stringify(number);
        const spread = [...toString];


        let arr = [];
        let quantity = []
        let co = 1;
        spread.forEach((item, index)=> {
            arr.push([item, item.repeat(Number(item))]);
        });
        let obj = {} ;
    
        arr.forEach(item => {
            Object.assign(obj ,{[item[0]] : item[1]})
        })
    
        result = obj
    }else {
        result = 'Thats not a number'
    }
    return result;
};

// getRepeatedInfo(747375)