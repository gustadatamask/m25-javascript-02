/**
 * Aqui iremos ver como trabalhar com conjustos JS
 */
/* Nao podemos usar dessa forma abaixo
let nome1 = "Andre";
let nome2 = "amarildo";
...
*/
//abaixo estou defindo um vetor com 4 nome
let nomes = ["Andre","Amarildo","Joaquim","Zaqueu"];
console.log(nomes[2]);  
// Listandos os nomes usando laço for (1a opção)
//vetor.length devolve o tamanho do vetor
for (let i=0;i<nomes.length;i++){
    console.log(nomes[i])
}
console.log("Fim do for (1a opção)");
console.log("=+".repeat(20))
//Listando os nomes usando laço for (2 opçao)
for (const it of nomes){
    console.log(it);
}
console.log("Fim do for (2a opçao)")
console.log("=+".repeat(20))
//Usando o while para listar os nomes
let i=0;
while(i<nomes.length){  
    console.log(nomes[i++]);
}
console.log("Fim do while")  