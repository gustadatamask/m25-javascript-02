/**
 * Exemplo de uso de laço While
 */
let i=0;
while(i<10){
    //Lembrando que pós-incremento (variavel++) ocorre como ultima coisa antes de ir para a proxima linha, ou seja, impreme o texto com o valor de i e depois aumenta 1
    console.log("Valor de i=" + i++);
}
console.log("Fim do while"); 
//Usando o while no final, com do ..while
i=0;
do {
    console.log("Valor de i=" + i++);
}while(i<10);
console.log("Fim do laço do..while");