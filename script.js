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

if (nome.length < 3) return alert("O nome deve possuir mais de 2 caracteres")
if (!email.includes('@')) return alert("Email inválido")
if (cpf.length != 11) return alert('CPF inválido')
if (idade < 16) return alert('Você deve possuir no pelo menos 16 anos')
if (peso < 50) return alert('Você deve possuir pelo menos 50kg')
if (cidade.length == 0) return alert('Obrigatório informar cidade')
if (estado.length == 0) return alert('Obrigatório informar estado')
if (tipo == null) return alert('Obrigatório informar tipo sanguíneo')

 let cadastro = [nome, email, idade, peso, telefone, cpf, cidade, estado, tipo];

  document.getElementById("result").innerHTML =
    'dados enviados:' +
    "<pre>" + JSON.stringify(cadastro, null, 2) + "</pre>";

  let tabela = ''

  switch (tipo) {
    case 'O-':
      tabela = 'O-, O+, A-, A+, B-, B+, AB-, AB+'
      break
    case 'O+':
      tabela = 'O+, A+, B+, AB+'
      break
    case 'A-':
      tabela = 'A-, A+, AB-, AB+'
      break
    case 'A+':
      tabela = 'A+, AB+'
      break
    case 'B-':
      tabela = 'B-, B+, AB-, AB+'
      break
    case 'B+':
      tabela = 'B+, AB+'
      break
    case 'AB-':
      tabela = 'AB-, AB+'
      break
    case 'AB+':
      tabela = 'AB+'
      break
  }

  document.getElementById('tabela').innerHTML =
    'Tipos que podem receber do seu sangue: ' + tabela

})