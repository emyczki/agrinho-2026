// =========================
// BOTÃO "SAIBA MAIS"
// =========================
const botao = document.querySelector(".banner button");

if (botao) {
    botao.addEventListener("click", () => {
        const secao = document.querySelector(".introducao");
        if (secao) {
            secao.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// =========================
// FORMULÁRIO
// =========================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = form.querySelector("input[name='nome']").value;

        if (nome.trim() === "") {
            alert("Por favor, preencha o nome.");
            return;
        }

        alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada 🌱`);

        form.reset();
    });
}

// =========================
// MODO ESCURO (DARK MODE)
// =========================

// cria botão de modo escuro automaticamente
const darkBtn = document.createElement("button");
darkBtn.innerText = "🌙 Modo Escuro";
darkBtn.style.position = "fixed";
darkBtn.style.bottom = "20px";
darkBtn.style.right = "20px";
darkBtn.style.padding = "10px 15px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "8px";
darkBtn.style.cursor = "pointer";
darkBtn.style.zIndex = "999";
darkBtn.style.backgroundColor = "#2e7d32";
darkBtn.style.color = "white";

document.body.appendChild(darkBtn);

let darkMode = false;

darkBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#e0e0e0";

        document.querySelectorAll("section").forEach(sec => {
            sec.style.backgroundColor = "#1e1e1e";
        });

        document.querySelector("header").style.backgroundColor = "#1b5e20";
        document.querySelector("footer").style.backgroundColor = "#111";

        darkBtn.innerText = "☀️ Modo Claro";
        darkBtn.style.backgroundColor = "#444";
    } else {
        document.body.style.backgroundColor = "#f4f9f4";
        document.body.style.color = "#333";

        document.querySelectorAll("section").forEach(sec => {
            sec.style.backgroundColor = "transparent";
        });

        document.querySelector("header").style.backgroundColor = "#2e7d32";
        document.querySelector("footer").style.backgroundColor = "#1b5e20";

        darkBtn.innerText = "🌙 Modo Escuro";
        darkBtn.style.backgroundColor = "#2e7d32";
    }
});

// =========================
// ANIMAÇÃO AO ROLAR PÁGINA
// =========================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(20px)";
    section.style.transition = "0.6s ease";
    observer.observe(section);
});
