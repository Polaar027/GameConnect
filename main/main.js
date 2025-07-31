// Exemplo: Validação simples de senha no cadastro
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const senha = document.getElementById("senha");
      const confirmar = document.getElementById("confirmar");

      if (senha && confirmar && senha.value !== confirmar.value) {
        e.preventDefault();
        alert("As senhas não coincidem. Verifique e tente novamente.");
      }
    });
  }
});

// Exemplo: Mensagem de boas-vindas na página inicial
if (window.location.pathname.includes("index.html")) {
  console.log("Bem-vindo ao GameConnect! 🎮");
}

