/**
 * Criaçao e uso de funçoes
 */
function fatorial(numero){
    let ret = 1;
    for (let i=numero;i>1;i--){
        ret*=i; //isso é o mesmo que ret = ret * i
    }
    return ret; //retornando o valor
}
// usando a funçao
console.log("O fatorial de 5 é " + fatorial(5)); 