var recebidos = JSON.parse(localStorage.getItem("@sw/messagens"))  || [];
var contato = document.getElementById("contato");

contato.addEventListener('submit', event => {
   event.preventDefault();

   const formData = new FormData(event.target);
   const info = Object.fromEntries(formData);
   
   recebidos.push(info);
   localStorage.setItem("@sw/messagens", JSON.stringify(recebidos));

   contato.reset();

   alert("Mensagem Enviada com Sucesso!");
});
