function add (a, b){
    return  a + b;
}

const primoNumero = parseInt(process.argv[2])
const secondoNumero = parseInt(process.argv[3])

console.log(add (primoNumero , secondoNumero));
