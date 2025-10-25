/**
 * Nesse codigo iremos ver objetos em JS (JSON)
 */
// JSON = JavaScript Object Notation
const meuObjeto = {
    "nome": "Gustavo",
    "endereco": "Rua Lazaro Luiz Zamenhof",
    "numero": 1164,
    "ehfumante": false,
    "ola": ()=> {
        console.log("Hello world!");
    }, 
    "telefones": {
        "residencial": "14991683911",
        "comercial": "21 991683911"
    }
}
meuObjeto.ola()
console.log(meuObjeto)
//Transformando meuObjeto JSON em texto
console.log(JSON.stringify(meuObjeto))
//Transformando meu texto em JSON
const txtObjeto = '{"codigo":1234, "preco":15.30, "descricao":"teste"}';
//O comando abaixo transforma de texto para objeto JSON
const obj = JSON.parse(txtObjeto);
console.log(obj);