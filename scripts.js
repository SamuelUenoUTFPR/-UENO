document.addEventListener("DOMContentLoaded", function() {
    // Controle de Modais
    const modals = {
        sustainability: {
            open: document.getElementById("openSustainabilityModal"),
            modal: document.getElementById("sustainabilityModal"),
            close: document.querySelector("#sustainabilityModal .close-modal")
        }
    };

    // Abrir Modal de Sustentabilidade
    modals.sustainability.open.addEventListener("click", () => {
        modals.sustainability.modal.style.display = "flex";
        document.querySelector(".tab-content").classList.add("active");
    });

    // Controle de Abas
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".tab-btn.active").classList.remove("active");
            btn.classList.add("active");
            
            const tabId = btn.dataset.tab;
            document.querySelector(".tab-content.active").classList.remove("active");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Fechar Modais
    Object.values(modals).forEach(m => {
        m.close.addEventListener("click", () => m.modal.style.display = "none");
        window.addEventListener("click", (e) => {
            if (e.target === m.modal) m.modal.style.display = "none";
        });
    });
});

// Controle de Redirecionamento
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    // Validação Simulada
    window.location.href = "index.html";
});

document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    // Validação Simulada
    alert("Cadastro realizado! Redirecionando...");
    window.location.href = "index.html";
});

// Controle do Modal de Cadastro
const signupModal = document.getElementById("signupModal");
document.getElementById("openSignupModal")?.addEventListener("click", () => {
    signupModal.style.display = "flex";
});

document.querySelectorAll(".close-modal").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal-overlay").style.display = "none";
    });
});

// Fechar Modal ao Clicar Fora
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
        e.target.style.display = "none";
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

document.querySelector('.carousel-prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Auto-advance every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);

// Redirecionamento após login/cadastro
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    window.location.href = "index.html"; // Redireciona para a página principal
});

document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso! Faça login para continuar.");
    document.getElementById("signupModal").style.display = "none"; // Fecha o modal
});

// Valida se as senhas coincidem
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    const senha = document.querySelector("#signupForm input[type='password']");
    const confirmarSenha = document.querySelector("#signupForm input[type='password']:last-of-type");
    
    if(senha.value !== confirmarSenha.value) {
        e.preventDefault();
        alert("As senhas não coincidem!");
        confirmarSenha.focus();
    }
});

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    this.querySelector("button").innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    setTimeout(() => window.location.href = "index.html", 1500);
});
