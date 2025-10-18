/**
 *  Exemplos de uso de condicionais
 */
let idade = 17;
//Usando if (se)
if (idade >=18) { 
    console.log("Voce pode dirigir!");
} else if (idade >=16) {
    console.log("Voce esta quase no ponto para dirigir, aguente mais um pouco")
}
else {
    console.log("Voce nao pode dirigir, voce é menor de idade!");
}
/**
 *  Operadores relacionais
 * > maior que =>   10 > 5      => verdadeiro
 * < menor que =>   5 < 2       => falso
 * == igual a =>   10 == 10        =>  verdade
 * != diferente =>  10 != 5      => verdade
 * >= maior ou igual a => 10      >= 11 => falso
 * <= menor ou igaul a => 10      <= 11 => verdade
 * 
 * Exemplos com texto
 * 'Ana' > 'ana' => Falso
 * 
 * Operadores logicos
 * && Operador AND => idade >= 18 && idade <= 60 
 *                 => verdadeiro para idades entre 18 e 60
 * || Operador OR => idade < 18 || idade > 60
 *                => Verdadeiro para idades menores de 18 ou idades maiores de 60
 *  ! operador NOT => !(idade >=18 && idade <= 60)
 *                 => Nesse caso seria equivalente a Verdadeiro para idades menores de 18 ou idades maiores de 60
 */
