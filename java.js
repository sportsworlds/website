var nome = document.getElementById("nome");
var nome = document.getElementById("email");
var nome = document.getElementById("number");
var nome = document.getElementById("origem");
var btnEnviar = document.getElementById("enviar");
var contato = document.getElementById("contato");

contato.addEventListener('submit', event => {
   event.preventDefault();

   const formData = new FormData(event.target);
   const info = Object.fromEntries(formData);

   console.log(info);

   alert("Mensagem Enviada com Sucesso!");
});
