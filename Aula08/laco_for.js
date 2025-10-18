/**
 * Usos de laços for
 */
// 1a parte => inicializaçao de variaveis
// 2a parte => condiçao de permanencia
// 3a parte => atribuiçao / incremento de valor
for (let i=0; i<10; i++){
    console.log("Valor de i=" + i);
}
// Nesse caso abaixo da erro de inexistencia da variavel i
//Porque pertence somente ao bloco do for a variavel i por do let i dentro do for
console.log("Fim do for" + i);