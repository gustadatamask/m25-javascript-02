/**
 * Codigo que vai demostrar o uso de arrays em JAVASCRIPT
 */
//Definindo um array
const vetor = [];
vetor.push("item 1");
vetor.push("item 2");
vetor.push("item 3");
console.log(vetor);
vetor.push(9982); //Adiciona um item dentro do vetor
console.log(vetor);
vetor.pop();//remove o ultimo elemento
vetor.splice|(1,1); //indice e quantidade, indice começa em 0
console.log(vetor);

//percorrendo o vetor com for (1a opçao)
console.log("Listando vetor com for 1 opçao")
for(let i=0;i<vetor.length;i++) {
    console.log(vetor[1])
}
//Percorrendo o vetor com for (2a opçao)
console.log("Listando o vetor com for 2 opçao")
for(let it of vetor){
    console.log(it)
}
console.log("Listando o vetor com for 3a opçao")
//Percorrendo vetor com forEach
vetor.forEach(item=>console.log(item))
