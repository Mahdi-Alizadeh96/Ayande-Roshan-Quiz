export default function removerRepetitive(string) {

    let result = null;

    // <Make array unique
    var uniq = [ ...new Set(string) ]
    // Make array unique>

    // <Join Elements 
    result = uniq.join('');
    // Join Elements> 

    return result
};