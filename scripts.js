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
