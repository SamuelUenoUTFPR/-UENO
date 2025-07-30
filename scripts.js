document.addEventListener("DOMContentLoaded", function() {
    // --- CONTROLE DE MODAIS E ABAS (LÓGICA EXISTENTE) ---

    // Modal de Sustentabilidade (se aplicável em alguma página)
    const sustainabilityModal = document.getElementById("sustainabilityModal");
    const openSustainabilityModal = document.getElementById("openSustainabilityModal");
    if (sustainabilityModal && openSustainabilityModal) {
        openSustainabilityModal.addEventListener("click", () => {
            sustainabilityModal.style.display = "flex";
        });
    }

    // Controle de Abas (para a página de sustentabilidade)
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".tab-btn.active")?.classList.remove("active");
            btn.classList.add("active");
            
            const tabId = btn.dataset.tab;
            document.querySelector(".tab-content.active")?.classList.remove("active");
            document.getElementById(tabId)?.classList.add("active");
        });
    });

    // Modal de Cadastro (na página de login)
    const signupModal = document.getElementById("signupModal");
    const openSignupModal = document.getElementById("openSignupModal");
    if (signupModal && openSignupModal) {
        openSignupModal.addEventListener("click", () => {
            signupModal.style.display = "flex";
        });
    }

    // Lógica genérica para fechar QUALQUER modal
    document.querySelectorAll(".close-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal-overlay").style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            e.target.style.display = "none";
        }
    });

    // --- CONTROLE DE CARROSSEL (INCONSISTENTE, MANTIDO POR ENQUANTO) ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    if (slides.length > 0) { // Só executa se houver um carrossel deste tipo na página
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        prevButton?.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });

        nextButton?.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });

        setInterval(() => showSlide(currentSlide + 1), 5000);
        showSlide(0); // Garante que o primeiro slide apareça
    }
});

// --- LÓGICA DOS FORMULÁRIOS (CORRIGIDA E UNIFICADA) ---

// Formulário de CADASTRO
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault(); // 1. Previne o envio padrão do formulário

    // 2. Pega os valores dos campos de senha
    const senhaInput = this.querySelector("input[placeholder='Senha (mín. 8 caracteres)']");
    const confirmarSenhaInput = this.querySelector("input[placeholder='Confirmar Senha']");
    
    // 3. Valida se as senhas são iguais
    if (senhaInput.value !== confirmarSenhaInput.value) {
        alert("As senhas não coincidem!");
        confirmarSenhaInput.focus(); // Foca no campo para correção
        return; // Para a execução aqui se as senhas não baterem
    }

    // 4. (Opcional) Validação de força da senha
    if (senhaInput.value.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        senhaInput.focus();
        return;
    }

    // 5. Se todas as validações passaram, exibe sucesso e fecha o modal
    alert("Cadastro realizado com sucesso! Faça login para continuar.");
    document.getElementById("signupModal").style.display = "none"; // Fecha o modal
    this.reset(); // Limpa os campos do formulário
});

// Formulário de LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault(); // 1. Previne o envio padrão

    const emailInput = this.querySelector("input[type='email']");
    const passwordInput = this.querySelector("input[type='password']");

    // 2. Validação simples para ver se os campos não estão vazios
    if (emailInput.value === '' || passwordInput.value === '') {
        alert("Por favor, preencha e-mail e senha.");
        return;
    }

    // 3. Mostra feedback visual para o usuário (loading)
    const submitButton = this.querySelector("button[type='submit']");
    submitButton.disabled = true; // Desabilita para evitar cliques duplos
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';

    // 4. Simula uma espera (como se estivesse contatando um servidor) e redireciona
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500); // Espera de 1.5 segundos
});
