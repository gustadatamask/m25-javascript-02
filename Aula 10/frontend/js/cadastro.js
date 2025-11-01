/**
 * JS Responsavel pelo cadastro
 */
const maior_id = () => {
  //buscando os dados
  return axios.get('http://localhost:3000/produtos').then((ret)=>{
    console.log(ret);
     return ret.data.reduce((a,b) => (a > b?.id ? a : b?.id),0);
  })
}

const gravar = () => {
  //buscando os dados do formulario
    const id = document.querySelector("#id").value;
    const descricao = document.querySelector("#iddesc").value;
    const saldo = document.querySelector("#idsaldo").value;
    const preco = document.querySelector("#idpreco").value;
    //Montando o JSON para gravar
    maior_id().then((ret)=>{
 const dados = {
        "id": (id == "null" ? ret+1 : id ),
        "descricao": descricao,
        "saldo": saldo,
        "preco": preco
    }
    if (id=="null") {
           axios.post("http://localhost:3000/produtos",dados)
        .then((ret)=>
            console.log("Produto Criado com sucesso!"))
    } else {
             axios.put("http://localhost:3000/produto/"+id,dados)
        .then((ret)=>
            console.log("Produto gravado com sucesso!"))
    }
    })
    
}
//Colocando os eventos no formulario
const form = document.querySelector('form');
form.addEventListener('submit', function (e){
 //Tirar a submissao do form
 e.preventDefault();
 //Chamando a gravaçao do registro
 gravar();
 //voltando para a pagina inicial
setTimeout(()=>{
    window.location.href = "index.html";
},3000);
})