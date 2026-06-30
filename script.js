// Rolagem suave ao clicar no menu
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Validação simples do formulário
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = formulario.querySelector('input[type="text"]').value.trim();
    const email = formulario.querySelector('input[type="email"]').value.trim();
    const mensagem = formulario.querySelector("textarea").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!\nObrigado por contribuir com um futuro sustentável.");

    formulario.reset();
});

// Animação simples ao aparecer na tela
const secoes = document.querySelectorAll("section");

function mostrarSecoes() {
    const alturaTela = window.innerHeight;

    secoes.forEach(secao => {
        const topo = secao.getBoundingClientRect().top;

        if (topo < alturaTela - 100) {
            secao.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", mostrarSecoes);
window.addEventListener("load", mostrarSecoes);
