document.getElementById("formulario").addEventListener("submit", function(e) {

e.preventDefault()

let nome = document.getElementById("nome").value
let email = document.getElementById("email").value
let idade = document.getElementById("idade").value
let peso = document.getElementById("peso").value
let telefone = document.getElementById("telefone").value
let cpf = document.getElementById("cpf").value
let cidade = document.getElementById("cidade").value
let estado = document.getElementById("estado").value
let tipo = document.querySelector('input[name="tipo"]:checked')?.value



 let cadastro = [nome, email, idade, peso, telefone, cpf, cidade, estado, tipo];

  document.getElementById("result").innerHTML =
    'dados enviados:' +
     "<pre>" + JSON.stringify(cadastro, null, 2) + "</pre>";


})