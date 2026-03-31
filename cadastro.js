document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");
    
const button = document.querySelector("#bot");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const senha = document.querySelector("#sn").value;
  const confirmarSenha = document.querySelector("#csn").value;

 if(senha === confirmarSenha) {
    alert("Cadastro realizado com sucesso!")
    window.location.href = "/login/index.html";
  } else {
    alert("As senhas não coincidem. Por favor, tente novamente.");
  }
});
});