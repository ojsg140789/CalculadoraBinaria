// SCRIPT PARA CONVERTIR BINARIO A DECIMAL
exports.convertirBinarioDecimal = (valor, base) => {
    console.log(Number(valor));
    let dec = !isNaN(valor) ? parseInt(valor, base) : null; // Specify radix 2 for binary
    return dec;
}