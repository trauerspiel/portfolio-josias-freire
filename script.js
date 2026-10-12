
/* Validação e simulação de envio do formulário */

const formulario = document.getElementById("formulario-contato");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        resultado.textContent = "Preencha todos os campos.";
        resultado.style.color = "red";
        return;
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        resultado.textContent = "Digite um e-mail válido.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = "Mensagem enviada com sucesso! (Simulação)";
    resultado.style.color = "green";

    formulario.reset();
});
