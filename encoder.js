export default function encoder(inputString , repeatCount) {
    let result = null;

    const pattern = /^[a-z]+$/;

    if(pattern.test(inputString)) {

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        const spread = [...inputString];
        let arr = [];

        spread.forEach(item => {
            let foundIndex = alphabet.search(item);

            if(foundIndex + repeatCount >= 25) {
                
                // no idea for here 

            }else {
                arr.push(alphabet[foundIndex+repeatCount])
            }

        })
        result = arr.join('');

        return result

    }else {
        return result = 'You can just put Lowercase letters';
    }
}

// encoder("abd" , 3)