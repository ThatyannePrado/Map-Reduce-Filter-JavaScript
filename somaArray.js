const precos = [10.99, 11, 45, 78.50, 7.50, 43];
const saldo_inicial = 100;

function saldo(arr, saldo_inicial) {
    return arr.reduce(function(previus, actual ){
        return previus-actual;
    },saldo_inicial)
}

console.log(saldo(precos,saldo_inicial));

