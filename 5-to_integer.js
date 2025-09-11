
const numeroConvertito = parseInt(process.argv[2])
process.argv[2]  

if (isNaN(numeroConvertito)){
    console.log("Not a number");
}else{
    console.log("My number: " + numeroConvertito)
};