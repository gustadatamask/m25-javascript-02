/**
 * Exemplos de uso do switch no JS
 */
console.log("Menu de opções");
console.log("1 - Cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");
let op = 2;
if (op==1) {
    console.log("escolheu Cadastro!");
} else if (op == 2) {
    console.log("Escolheu consulta!");
}
 else if (op == 3) {
    console.log("Escolheu Alterção!");
}
 else if (op == 4) {
    console.log("Escolheu Exclusão!");
} else {
    console.log("escolheu uma opção invalida");
}
// Usando Switch para as mesmas situaçoes
switch(op) {
    case 1: console.log("Escolheu cadastro"); break;
    case 2: console.log("Escolheu consulta"); break;
    case 3: console.log("Escolheu alteraçao"); break;
    case 4: console.log("Escolheu uma exclusao"); break;
    default: console.log("escolheu uma opçao invalida"); 
}   