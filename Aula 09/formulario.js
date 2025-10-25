const validar_envio = () => {
    const cmpNome = document.querySelector("#idnome");
    if(cmpNome.value != "") {
        console.log("tem conteudo!!", cmpNome.value);
        return true;
    } else {
        console.log("Nao tem conteudo!! ",cmpNome.value);
        return false;
    }
}
// Adicionando o evento de submit ao formulario
const form = document.querySelector("#idform");
form.addEventListener('submit', function(e) {
    console.log("Evento Form!");
    console.log(validar_envio());
    e.preventDefault();
    return validar_envio();
})
