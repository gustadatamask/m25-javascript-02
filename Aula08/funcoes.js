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
// Arrow function
const fatorial_arrow = (numero) => {
    let ret = 1;
    for (let i=numero;i>1;i--) {
        ret *= i
    }
    return ret;
}
//usando funçao
console.log("O fatorial (arrow) de 5 é " + fatorial_arrow(5));