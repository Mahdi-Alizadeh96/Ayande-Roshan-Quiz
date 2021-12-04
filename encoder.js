function encoder(inputString , repeatCount) {
    let result = null;

    const pattern = /^[a-z]+$/;

    if(pattern.test(inputString)) {

        const alphabet = 'abcdefghijklmnopqrstuvwxyz';

        const spread = [...inputString];
        let arr = [];

        spread.forEach(item => {
            let foundIndex = alphabet.search(item);

            if(foundIndex + repeatCount >= 25) {
                
                

            }else {
                arr.push(alphabet[foundIndex+repeatCount])
            }

        })
        result = arr.join('');

        console.log(result);

    }else {
        return result = 'You can just put Lowercase letters';
    }
}

encoder("aby" , 3)