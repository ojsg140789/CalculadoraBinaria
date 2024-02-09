// SCRIPT PARA CONVERTIR BINARIO A DECIMAL
exports.convertirBinarioDecimal = (valor) => {
    console.log(Number(valor));
    let dec = !isNaN(valor) ? parseInt(valor, 2) : null; // Specify radix 2 for binary
    return dec;
}